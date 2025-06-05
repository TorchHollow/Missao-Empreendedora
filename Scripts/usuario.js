// Notificação
document.querySelector('.notification').addEventListener('click', () => {
    alert('Você não tem novas notificações!');
});


// Botão Voltar
document.querySelector('.back-button').addEventListener('click', () => {
    window.history.back();
});


// Conteúdos dinâmicos
const historico = [
    'Pedido #1234 - Curso de Marketing',
    'Pedido #5678 - Livro de Empreendedorismo'
];


const favoritos = [
    'Curso de Design de Produto',
    'Mentoria Empreendedora'
];


const historicoDiv = document.getElementById('historico');
const favoritosDiv = document.getElementById('favoritos');


historico.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item;
    historicoDiv.appendChild(p);
});


favoritos.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item;
    favoritosDiv.appendChild(p);
});
