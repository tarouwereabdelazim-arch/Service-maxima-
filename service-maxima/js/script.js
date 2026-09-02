// SERVICE MAXIMA SARL — script partagé

document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Formulaire de contact (démo front-end uniquement)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.querySelector('#form-feedback');
      const nom = form.querySelector('#nom').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!nom || !email || !message) {
        feedback.textContent = "Merci de remplir tous les champs obligatoires.";
        feedback.style.color = '#C1622D';
        return;
      }
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        feedback.textContent = "Merci d'entrer une adresse e-mail valide.";
        feedback.style.color = '#C1622D';
        return;
      }

      feedback.textContent = "Votre message a bien été envoyé. Notre équipe vous recontactera sous 48h.";
      feedback.style.color = '#1B3A2B';
      form.reset();
    });
  }
});
