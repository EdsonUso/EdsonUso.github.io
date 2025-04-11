// animations.js - Gerencia animações de scroll e transições

function initScrollAnimations() {
    // Seleciona todos os elementos que deverão ter animação ao scroll
    const animatedElements = document.querySelectorAll(
      '.section-header, .project-card, .about-text h3, .timeline-item, .skill-category, .contact-item, .hero-text, .hero-image'
    );
    
    // Adiciona a classe fade-in em todos os elementos
    animatedElements.forEach(element => {
      element.classList.add('fade-in');
    });
    
    // Observer para animação ao entrar na viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Uma vez que a animação é mostrada, pode parar de observar este elemento
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Observa todos os elementos animados
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    // Animação inicial para elementos visíveis imediatamente
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(element => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    }, 100);
    
    // Helper para verificar se elemento está na viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.bottom >= 0 &&
        rect.right >= 0
      );
    }
  }