// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight nav on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 60;
    if (pageYOffset >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});

// Contact form submission (dummy)
const form = document.getElementById('contact-form');
const response = document.getElementById('form-response');
form.addEventListener('submit', e => {
  e.preventDefault();
  // Replace with real backend call or email API
  response.textContent = 'Thank you! We’ll be in touch soon.';
  form.reset();
});
