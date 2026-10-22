// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => {
  if (e.target.matches('a')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
});

// Highlight the nav link for the section in view
const navLinks = [...document.querySelectorAll('.nav-links a')];
const map = new Map(navLinks.map(a => [a.getAttribute('href').slice(1), a]));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting && map.has(en.target.id)) {
      navLinks.forEach(a => a.classList.remove('active'));
      map.get(en.target.id).classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });

// Age from date of birth (Dec 11, 2007)
const dob = new Date(2007, 11, 11), now = new Date();
let age = now.getFullYear() - dob.getFullYear();
if (now < new Date(now.getFullYear(), dob.getMonth(), dob.getDate())) age--;
document.getElementById('age').textContent = age;
