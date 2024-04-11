import initWaves from '../../src/scripts/waves';

const header = document.querySelector('.home-header,.page-header');
if (header) {
  const { animation, duration } = header.dataset;
  if (animation !== 'none') {
    const waves = header.querySelector('.waves-wrapper');
    initWaves(waves, animation, duration);
  }
}
