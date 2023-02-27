// Seleciona o botão de abertura do modal
const abrirModal = document.querySelector('.abrir-modal');
// Seleciona o modal
const modal = document.querySelector('.modal-codigo');
// Seleciona o botão de fechamento do modal
const fecharModal = document.querySelector('.fechar-modal');

// Adiciona um ouvinte de evento de clique no botão de abertura do modal
abrirModal.addEventListener('click', () => {
  // Abre o modal adicionando a classe "aberto"
  modal.classList.add('aberto');
});

// Adiciona um ouvinte de evento de clique no botão de fechamento do modal
fecharModal.addEventListener('click', () => {
  // Fecha o modal removendo a classe "aberto"
  modal.classList.remove('aberto');
});
