export default function initAnimations() {
  const ups = document.querySelectorAll('.animation-up');
  ups.forEach(el => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          el.classList.add('showed');
          observer.unobserve(el);
        }
      },
      {
        // threshold: 1,
        rootMargin: `-25% 0% -25% 0%`,
      }
    );
    observer.observe(el);
  });
}
