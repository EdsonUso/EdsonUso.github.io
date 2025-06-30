// theme-switcher.js - Gerencia a alternância entre tema claro e escuro

// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    // Pega o botão de tema
    const themeToggle = document.getElementById('theme-toggle');
    
    // Aplica o tema inicial
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);
    
    // Adiciona o evento de clique
    themeToggle.addEventListener('click', () => {
        // Verifica qual tema está ativo agora
        const isDark = document.body.classList.contains('dark-theme');
        
        // Inverte o tema
        const newTheme = isDark ? 'light' : 'dark';
        
        setTheme(newTheme);
    });
});

// Função para aplicar o tema
function setTheme(theme) {
    // Remove os dois temas
    document.body.classList.remove('light-theme', 'dark-theme');
    
    // Adiciona o tema correto
    document.body.classList.add(`${theme}-theme`);
    
    // Atualiza o ícone
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'light') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // Salva no localStorage
    localStorage.setItem('theme', theme);
}
