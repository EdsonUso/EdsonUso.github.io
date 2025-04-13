// form-handler.js - Gerencia o envio do formulário de contato

function initFormHandler() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Coleta os dados do formulário
        const formData = new FormData(contactForm);
        const formDataObj = Object.fromEntries(formData.entries());
        
        // Elementos de UI para feedback
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        try {
          // Mostra loading state
          submitButton.disabled = true;
          submitButton.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Enviando...';
          
          //TODO: Envio de email com Email.JS
          
          // Simula o delay de envio (remova em produção)
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Limpa o formulário após envio
          contactForm.reset();
          
          // Mostra mensagem de sucesso
          showFormMessage('success', 'Mensagem enviada com sucesso! Entrarei em contato em breve.');
        } catch (error) {
          console.error('Erro ao enviar formulário:', error);
          
          // Mostra mensagem de erro
          showFormMessage('error', 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
        } finally {
          // Restaura o botão
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonText;
        }
      });
    }
    
    // Helper para mostrar mensagens temporárias
    function showFormMessage(type, message) {
      // Remove mensagens anteriores
      const oldMessage = document.querySelector('.form-message');
      if (oldMessage) oldMessage.remove();
      
      // Cria elemento de mensagem
      const messageElement = document.createElement('div');
      messageElement.classList.add('form-message', `form-message-${type}`);
      messageElement.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
      
      // Adiciona ao formulário
      contactForm.appendChild(messageElement);
      
      // Remove após alguns segundos
      setTimeout(() => {
        messageElement.classList.add('form-message-hiding');
        setTimeout(() => messageElement.remove(), 300);
      }, 5000);
    }
  }