const drawer = document.querySelector('.drawer');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const toggleMenu = (open) => { drawer.classList.toggle('is-open', open); drawer.setAttribute('aria-hidden', !open); menu.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : ''; };
menu.addEventListener('click', () => toggleMenu(true)); close.addEventListener('click', () => toggleMenu(false));
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => { const target = document.querySelector(link.getAttribute('href')); if (!target) return; event.preventDefault(); toggleMenu(false); window.scrollTo({top: Math.max(0, target.offsetTop - 90), behavior: 'smooth'}); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') toggleMenu(false); });
const makeCardLink = (card, url) => {
  card.style.cursor = 'pointer';
  card.tabIndex = 0;
  card.setAttribute('role', 'link');
  card.addEventListener('click', () => { window.location.href = url; });
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); window.location.href = url; }
  });
};
const certificateIds = ['semiconductor', 'embedded', 'scout'];
document.querySelectorAll('#certificates .certificate-grid article').forEach((card, index) => {
  makeCardLink(card, `certificate.html?cert=${certificateIds[index]}`);
});
const projectIds = ['accident', 'home', 'robo'];
document.querySelectorAll('#projects .project:not(.project-quote)').forEach((card, index) => {
  const url = `project.html?project=${projectIds[index]}`;
  const preview = card.querySelector('.preview');
  if (preview) { preview.href = url; preview.classList.remove('disabled'); preview.setAttribute('aria-label', 'View project case study'); }
  makeCardLink(card, url);
});
