// Alternância de tema Claro / Escuro com persistência
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('mickael-theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('mickael-theme', next);
  updateThemeButton(next);
});

function updateThemeButton(theme) {
  themeToggle.textContent = theme === 'dark' ? '☀ Modo Claro' : '🌙 Modo Escuro';
}

// Menu mobile responsivo
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Filtro interativo de Habilidades e Interesses
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    skillCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Abas interativas na seção Tecnologia na Profissão
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const target = document.getElementById('tab-' + btn.getAttribute('data-tab'));
    if (target) target.classList.add('active');
  });
});
