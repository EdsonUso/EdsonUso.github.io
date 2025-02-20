const heart = document.getElementById('heart');
const message = document.getElementById('message');
let isMessageVisible = false;

heart.addEventListener('click', () => {
    isMessageVisible = !isMessageVisible;
    
    if(isMessageVisible) {
        message.innerHTML = `
            <h2>Sarneia</h2>
            <p>Sarneia sarneia sarneia!</p>
            <p>Sarneia sarneia sarneia sarneia!</p>
            <p>Sarneia sarneia sarneia</p>
            <p>Sarneia sarneia...</p>
        `;
        message.classList.add('visible');
    } else {
        message.classList.remove('visible');
        setTimeout(() => {
            message.innerHTML = `
                <h2>Sarneia</h2>
                <p>Sarneia sarneia sarneia...</p>
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