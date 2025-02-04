const heart = document.getElementById('heart');
const message = document.getElementById('message');
let isMessageVisible = false;

heart.addEventListener('click', () => {
    isMessageVisible = !isMessageVisible;
    
    if(isMessageVisible) {
        message.innerHTML = `
            <h2>Vida</h2>
            <p>Tenho amado ter você ao meu lado</p>
            <p>Esses ultimos dias, descutimos bastante, por algumas coisas que você fez e eu fiz</p>
            <p>Mas digo tudo isso porque quero o melhor pra nós dois, que esse relacionamento de certo</p>
            <p>Acima de qualquer problema, eu te amo, continue descendo para entender...</p>
        `;
        message.classList.add('visible');
    } else {
        message.classList.remove('visible');
        setTimeout(() => {
            message.innerHTML = `
                <h2>Meu Amor</h2>
                <p>Clique no coração para ver uma mensagem especial...</p>
            `;
        }, 500);
    }
});

// Animação para os cards de memória
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.memory-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});