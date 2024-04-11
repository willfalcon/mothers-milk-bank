export default function initWaves(container, animation, duration) {
  const waves = container.querySelectorAll('.waves');
  Array.from(waves).forEach(wave => {
    wave.style.transition = `${duration}s`;
  });
  const wave1 = waves[0];
  const wave2 = waves[1];
  const { height } = wave1.getBoundingClientRect();
  wave1.parentNode.parentNode.style.height = height + 'px';

  if (animation === 'right') {
    wave1.style.transform = 'rotateY(180deg) translateX(100%)';
    wave2.style.transform = 'translateX(0)';
  }
  if (animation === 'left') {
    wave1.style.transform = 'translateX(0)';
    wave2.style.transform = 'rotateY(180deg) translateX(-100%)';
  }
}
