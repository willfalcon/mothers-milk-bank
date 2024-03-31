import Cookies from 'js-cookie';

export default function initAlert() {
  const alert = document.querySelector('#cdhq-alert');
  if (!alert) return;
  const hasDelay = alert.dataset.delay;
  if (hasDelay) {
    alert.style.display = 'block';
    const delay = parseInt(hasDelay);
    setTimeout(() => {
      alert.style.marginTop = '0';
    }, delay * 1000);
  }

  const id = alert.dataset.id;

  const close = document.querySelector('#close-alert');
  close.addEventListener('click', () => {
    alert.style.marginTop = '-100%';

    Cookies.set(id, true, { expires: 7 });
  });
}
