document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const currentPage = document.body.dataset.page;
  document.querySelectorAll('.nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const pageName = href.replace(/\.html$/, '');
    if (pageName === currentPage) {
      link.classList.add('active');
    }
  });

  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
});
