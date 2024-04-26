import distance from '@turf/distance';
import { parsePhoneNumber } from 'libphonenumber-js';
import viewportSize from 'viewport-size';

const width = viewportSize.getWidth();
const mobile = width < 768;

async function initMap() {
  // Get locations
  const res = await fetch('/wp-json/mmb/v1/locations').then(res => res.json());
  const { locations } = res;

  // Setup map
  mapboxgl.accessToken = res.token;
  const map = new mapboxgl.Map({
    container: 'mmb-locations',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-89.3985, 32.7547],
    zoom: 5.75,
  });

  // Add location markers
  let markers = [];
  locations.forEach((location, i) => {
    const phone = parsePhoneNumber(location.phone, 'US');
    const mobilePopup = new mapboxgl.Popup({
      className: 'map-location-popup',
    }).setHTML(`<h2>${location.name}</h2>
          <h3>${location.city}</h3>
          <a target="_blank" href="https://maps.apple.com/?saddr=${origin[1]},${origin[0]}&daddr=${encodeURIComponent(
      location.address
    )}&dirflag=d">Open in Maps</a>
          <address>${location.address}</address>
          <a href="${phone.getURI}">${phone.formatNational()}</a>
          <p>${location.notes}</p>`);

    const popup = mobile
      ? mobilePopup
      : new mapboxgl.Popup({
          className: 'map-location-popup',
        }).setHTML(`
      <h2>${location.name}</h2>
      <h3>${location.city}</h3>
    `);
    const marker = new mapboxgl.Marker({}).setLngLat(location.coordinates).setPopup(popup).addTo(map);

    markers.push({ marker, location: location.name });
  });

  // Add map controls
  // map.addControl(new mapboxgl.GeolocateControl());
  map.addControl(new mapboxgl.ScaleControl());

  // Temporary marker and control refs
  let currentLocationMarkerRef;
  let locationDataRef;

  // Add search box
  const search = new MapboxSearchBox();
  search.accessToken = res.token;
  search.options = {
    bbox: [
      [-91.655009, 30.173943],
      [-88.097888, 34.996052],
    ],
    flyTo: false,
  };
  map.addControl(search, 'top-left');
  search.unbindMap();

  // Setup search behavior

  // Callback for when a user clicks a search reslt

  search.addEventListener('retrieve', event => {
    const featureCollection = event.detail;
    const feature = featureCollection.features[0];
    const coords = feature.geometry.coordinates;

    // 1. Add marker to searched location
    if (currentLocationMarkerRef) {
      currentLocationMarkerRef.remove();
    }
    currentLocationMarkerRef = new mapboxgl.Marker({ color: '#D14B73' }).setLngLat(coords).addTo(map);

    // 2. figure out which location is closest
    const closest = getClosestLocation(locations, coords);

    // 3. move map to show both locations
    const bound1 = new mapboxgl.LngLat(coords[0], coords[1]);
    const bound2 = new mapboxgl.LngLat(closest.coordinates[0], closest.coordinates[1]);
    const bounds = new mapboxgl.LngLatBounds(bound1, bound2);

    map.fitBounds(bounds, {
      padding: mobile
        ? {
            top: 100,
            bottom: 50,
            left: 50,
            right: 50,
          }
        : {
            top: 50,
            bottom: 50,
            left: 350,
            right: 50,
          },
    });

    // 4. show location details in sidebar
    if (!mobile) {
      if (locationDataRef) map.removeControl(locationDataRef);
      const locationDataBox = new LocationData({ ...closest, distance: distance(coords, closest.coordinates), origin: bound1 });
      locationDataRef = locationDataBox;
      map.addControl(locationDataBox, 'top-left');
    }

    // 5. show location name popup over marker
    const marker = markers.find(marker => marker.location === closest.name);
    marker.marker.togglePopup();

    // 6. maybe show direction path?

    showDirectionPath(map, coords, closest.coordinates, res.token, locationDataRef);
  });
}

if (document.querySelector('#mmb-locations')) initMap();

function getClosestLocation(locations, coordinates) {
  return locations.reduce((acc, curr) => {
    if (!acc) return curr;
    const currDistance = distance(coordinates, curr.coordinates, { units: 'miles' });
    const accDistance = distance(coordinates, acc.coordinates, { units: 'miles' });
    if (currDistance < accDistance) {
      return curr;
    }
    return acc;
  });
}

class LocationData {
  constructor(args) {
    this.location = args;
    this.origin = args.origin;
  }
  onAdd(map) {
    this._container = document.createElement('div');
    this._container.className = 'map-location-data mapboxgl-ctrl mapboxgl-ctrl-group';
    const phone = parsePhoneNumber(this.location.phone, 'US');
    this._container.innerHTML = `
          <h2>${this.location.name}</h2>
          <h3>${this.location.city}</h3>
          <p>${Math.round(this.location.distance * 10) / 10} miles</p>
          <a target="_blank" href="https://maps.apple.com/?saddr=${this.origin[1]},${this.origin[0]}&daddr=${encodeURIComponent(
      this.location.address
    )}&dirflag=d">Open in Maps</a>
          <address>${this.location.address}</address>
          <a href="${phone.getURI}">${phone.formatNational()}</a>
          <p>${this.location.notes}</p>
        `;
    this._container.addEventListener('contextmenu', e => e.preventDefault());
    return this._container;
  }
  onRemove(map) {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}

async function showDirectionPath(map, from, to, token) {
  const res = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${from.join(',')};${to.join(
      ','
    )}?access_token=${token}&waypoints_per_route=true&geometries=geojson`
  ).then(res => res.json());
  console.log(res);
  console.log('distance: ', res.routes[0].distance / 1609.34);
  // add source and layer for direction path to map
  const existingSource = map.getSource('route-source');
  if (existingSource) {
    existingSource.setData(res.routes[0].geometry);
  } else {
    map.addSource('route-source', {
      type: 'geojson',
      data: res.routes[0].geometry,
    });
    map.addLayer({
      id: 'route',
      type: 'line',
      source: 'route-source',
      layout: {
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#D14B73',
        'line-width': 3,
      },
    });
  }
}
