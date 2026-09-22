const drawer = document.querySelector('.drawer');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const toggleMenu = (open) => { drawer.classList.toggle('is-open', open); drawer.setAttribute('aria-hidden', !open); menu.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : ''; };
menu.addEventListener('click', () => toggleMenu(true)); close.addEventListener('click', () => toggleMenu(false));
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => { const target = document.querySelector(link.getAttribute('href')); if (!target) return; event.preventDefault(); toggleMenu(false); window.scrollTo({top: Math.max(0, target.offsetTop - 90), behavior: 'smooth'}); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') toggleMenu(false); });
