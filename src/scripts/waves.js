export default function initWaves(container) {
  const waves = container.querySelectorAll('.waves');

  const wave1 = waves[0];
  const wave2 = waves[1];
  const { height } = wave1.getBoundingClientRect();
  wave1.parentNode.parentNode.style.height = height + 'px';

  wave1.style.transform = 'rotateY(180deg) translateX(100%)';
  wave2.style.transform = 'translateX(0)';
}
