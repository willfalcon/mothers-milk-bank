export default async function getNewSlides(archive) {
  let page = parseInt(archive.dataset.page) + 1;
  let stories = await fetch(`/wp-json/mmb/v1/stories/${page}`).then(res => res.json());

  if (!stories.length || stories.length < 3) {
    archive.dataset.page = 'done';
  } else {
    archive.dataset.page = page;
  }

  let slides = stories.map(story => {
    return `
      <a href="${story.permalink}" class="latest-stories__item swiper-slide story">
        <header class="story__header">
          <h3 class="story__heading">
            ${story.title}
          </h3>
        </header>
        <div class="quote">
          <span>""</span>
        </div>
        <p class="story__excerpt">
          ${story.excerpt}
        </p>
        <span class="story__arrow">
          <i class="fa-solid fa-arrow-right fa-xl"></i>
        </span>
      </a>
    `;
  });
  return slides;
}
