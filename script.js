document.addEventListener('DOMContentLoaded', async () => {
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
    if (href && href.replace(/\.html$/, '') === currentPage) link.classList.add('active');
  });

  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  try {
    const response = await fetch('content/school.json', { cache: 'no-cache' });
    if (!response.ok) return;
    const school = await response.json();
    document.querySelectorAll('[data-school]').forEach((node) => {
      const value = school[node.dataset.school];
      if (value) node.textContent = value;
    });
    document.querySelectorAll('.whatsapp-link').forEach((link) => {
      if (school.whatsapp) {
        link.href = `https://wa.me/${String(school.whatsapp).replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Central College Kawempe, I would like to make an enquiry.')}`;
        link.hidden = false;
      }
    });
  } catch (error) {
    console.warn('School settings could not be loaded.', error);
  }
});
