// lazy-loading.js - Implementa lazy loading para imagens e melhor desempenho

function initLazyLoading() {
    // Se o navegador suporta nativamente o lazy loading, não precisamos fazer nada
    if ('loading' in HTMLImageElement.prototype) {
      // Os atributos loading="lazy" já estão definidos no HTML
      return;
    }
    
    // Fallback para navegadores que não suportam lazy loading nativo
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    // Observer para lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    
    // Observa todas as imagens com loading="lazy"
    lazyImages.forEach(img => {
      // Armazena a URL real no atributo data-src
      img.dataset.src = img.src;
      // Coloca um placeholder ou deixa src vazio
      img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
      // Observa a imagem
      imageObserver.observe(img);
    });
    
    // Otimização adicional: carrega recursos não críticos apenas depois que a página é carregada
    window.addEventListener('load', () => {
      // Por exemplo, carregar fontes adicionais ou scripts não essenciais aqui
      setTimeout(() => {
        // Exemplo: carregar uma font adicional após o carregamento da página
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap';
        document.head.appendChild(link);
      }, 1000);
    });
  }