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
        alert("Chamou");
        
        // Debug para ver as classes atuais
        console.log("Classes atuais:", document.body.className);
        
        // Verifica qual tema está ativo agora
        const isDark = document.body.classList.contains('dark-theme');
        console.log("Está no tema escuro?", isDark);
        
        // Inverte o tema
        const newTheme = isDark ? 'light' : 'dark';
        console.log("Novo tema será:", newTheme);
        
        setTheme(newTheme);
    });
});

// Função para aplicar o tema
function setTheme(theme) {
    console.log("Aplicando tema:", theme);
    
    // Debug antes de remover classes
    console.log("Classes antes:", document.body.className);
    
    // Remove os dois temas
    document.body.classList.remove('light-theme', 'dark-theme');
    
    // Debug depois de remover classes
    console.log("Classes depois de remover:", document.body.className);
    
    // Adiciona o tema correto
    document.body.classList.add(`${theme}-theme`);
    
    // Debug depois de adicionar nova classe
    console.log("Classes finais:", document.body.className);
    
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