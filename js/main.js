// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight nav on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (pageYOffset >= top) current = sec.getAttribute('id') || 'hero';
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// Quick Enquiry: prefill subject & scroll to contact
document.querySelectorAll('.quick-enquiry').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.closest('.product-card').dataset.product;
    document.getElementById('inquiry-subject').value = `Enquiry: ${product}`;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submit feedback
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.createElement('p');
  msg.className = 'mt-3 text-success';
  msg.textContent = "Thank you! We’ll be in touch soon.";
  form.appendChild(msg);
  form.reset();
});
