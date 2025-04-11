// theme-switcher.js - Gerencia a alternância entre tema claro e escuro

document.addEventListener('DOMContentLoaded', () => {
    initThemeSwitcher();
  });
  
  function initThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Verifica se há um tema salvo no localStorage ou preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Aplica o tema inicial
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkTheme)) {
      document.body.classList.add('dark-theme');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      document.body.classList.add('light-theme');
    }
    
    // Event listener para trocar o tema
    themeToggle.addEventListener('click', () => {
      // Toggle das classes
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
      
      // Alterna o ícone
      themeIcon.classList.toggle('fa-moon');
      themeIcon.classList.toggle('fa-sun');
      
      // Salva a preferência no localStorage
      const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
    });
  }