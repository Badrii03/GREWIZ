document.addEventListener('DOMContentLoaded', function () {
  const navOpenBtn = document.querySelector('[data-nav-open-btn]');
  const navCloseBtn = document.querySelector('[data-nav-close-btn]');
  const navbar = document.querySelector('[data-navbar]');
  const overlay = document.querySelector('[data-overlay]');

  navOpenBtn.addEventListener('click', function () {
    navbar.classList.add('open');
    overlay.classList.add('active');
  });

  navCloseBtn.addEventListener('click', function () {
    navbar.classList.remove('open');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', function () {
    navbar.classList.remove('open');
    overlay.classList.remove('active');
  });
});
