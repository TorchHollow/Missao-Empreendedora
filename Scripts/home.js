window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
   
    // adiciona a classe que ativa a transição
    setTimeout(() => {
      menu.classList.add('active');
    }, 200); // delay de 200ms para suavizar
  });
