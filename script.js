// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const tabs = document.querySelector('.tabs');

if (menuToggle && tabs) {
  menuToggle.addEventListener('click', () => {
    const isOpen = tabs.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cierra el menú al elegir una sección (útil en móvil)
  tabs.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      tabs.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Año dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
