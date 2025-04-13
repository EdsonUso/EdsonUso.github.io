// main.js - Script principal com inicialização e funcionalidades gerais

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todos os módulos
    initNavbar();
    initScrollAnimations();
    initBackToTop();
    initFormHandler();
    initLazyLoading();
    
    // Atualiza o ano atual no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
  });
  
  // Gerencia a barra de navegação e menu mobile
  function initNavbar() {
    const header = document.querySelector('.header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Aplica classe scrolled ao header quando a página é rolada
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Atualiza o link ativo baseado na posição do scroll
      updateActiveNavLink();
    });
    
    // Toggle do menu mobile
    mobileMenuToggle.addEventListener('click', () => {
      navbar.classList.toggle('open');
      mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
      mobileMenuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Fecha o menu mobile ao clicar em um link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('open');
        mobileMenuToggle.querySelector('i').classList.add('fa-bars');
        mobileMenuToggle.querySelector('i').classList.remove('fa-times');
      });
    });
    
    // Atualiza o link ativo baseado na posição do scroll
    function updateActiveNavLink() {
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    
    // Inicializa o link ativo
    updateActiveNavLink();
  }
  
  // Botão de voltar ao topo
  function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }