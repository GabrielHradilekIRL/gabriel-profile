document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width') || '0%';
    bar.style.width = '0%';

    setTimeout(() => {
      bar.style.transition = 'width 2s ease-in-out';
      bar.style.width = targetWidth;
    }, 300);
  });
});
