document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos Globais ---
    const body = document.body;
    const centralText = document.querySelector('.central-text');
    const animatedText = document.getElementById('texto-animado');
    const imageContainers = document.querySelectorAll('.animation-container');
    const fullscreenContainer = document.getElementById('fullscreen-image-container');
    const lateralTextContainer = document.getElementById('lateral-text-container');
    const lateralText = document.getElementById('texto-lateral');

    // --- Fase 1: Animação de Texto Central ---
    const textSections = document.querySelectorAll('.scroll-section');
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newText = entry.target.getAttribute('data-text');
                centralText.classList.remove('visible');
                setTimeout(() => {
                    animatedText.textContent = newText;
                    centralText.classList.add('visible');
                }, 300);
            }
        });
    }, { root: null, threshold: 0.5 });
    textSections.forEach(section => textObserver.observe(section));

    // --- Fase 1: Animação de Imagens Laterais ---
    const lateralImages = ['assets/images/mae/coracao1.svg', 'assets/images/mae/coracao2.svg', 'assets/images/mae/flor1.svg'];
    let imageInterval = setInterval(() => {
        imageContainers.forEach(container => createImage(container));
    }, 1500);

    function createImage(container) {
        const img = document.createElement('div');
        img.classList.add('animated-image');
        const randomImage = lateralImages[Math.floor(Math.random() * lateralImages.length)];
        img.style.backgroundImage = `url(${randomImage})`;
        img.style.left = `${Math.random() * 80}%`;
        container.appendChild(img);
        img.addEventListener('animationend', () => img.remove());
    }

    // --- Lógica de Cor de Fundo ---
    window.addEventListener('scroll', () => {
        body.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- Fase 2: Animação de Imagem + Texto ---
    const imageTextSections = document.querySelectorAll('.image-text-section');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, { root: null, threshold: 0.4 });
    imageTextSections.forEach(section => imageObserver.observe(section));

    // --- Fase 3: Gatilho da Tela Cheia ---
    const expandTrigger = document.getElementById('expand-trigger-section');
    const expandObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateFullscreen(entry.target.getAttribute('data-image'));
                expandObserver.unobserve(entry.target); // Roda só uma vez
            }
        });
    }, { root: null, threshold: 0.6 });
    expandObserver.observe(expandTrigger);

    function activateFullscreen(imageUrl) {
        body.classList.add('fullscreen-active');
        fullscreenContainer.style.backgroundImage = `url(${imageUrl})`;
        fullscreenContainer.classList.add('visible');
        clearInterval(imageInterval); // Para as imagens laterais

        // Transição para a fase 3
        setTimeout(() => {
            lateralTextContainer.classList.add('visible');
            // Ativa o observador para o texto lateral APÓS a transição
            lateralTextTriggers.forEach(section => lateralObserver.observe(section));
        }, 1000); // Delay para a imagem aparecer
    }

    // --- Fase 3: Animação de Texto Lateral ---
    const lateralTextTriggers = document.querySelectorAll('.lateral-text-trigger');
    const lateralObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newText = entry.target.getAttribute('data-lateral-text');
                lateralText.textContent = newText;
            }
        });
    }, { root: null, threshold: 0.5 });

});