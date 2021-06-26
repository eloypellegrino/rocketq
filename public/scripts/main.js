import { Modal } from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const checkButtons = document.querySelectorAll('.actions a.check');
const deleteButtons = document.querySelectorAll('.actions a.delete');
const modalButton = document.querySelector('.modal button');
const roomIdCopy = document.querySelector('#room-id-copy');

function handleClick(e, check) {
  e.preventDefault();

  const roomId = document.querySelector('#room-id').dataset.id;
  const questionId = e.target.dataset.id;
  const slug = check ? 'check' : 'delete';

  const form = document.querySelector('.modal form');
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

  modalTitle.innerText = check ? 'Marcar como lida' : 'Excluir pergunta';
  modalDescription.innerText = check
    ? 'Deseja marcar essa pergunta como lida?'
    : 'Deseja excluir essa pergunta?';
  modalButton.innerText = check ? 'Confirmar' : 'Excluir';

  check
    ? modalButton.classList.remove('red')
    : modalButton.classList.add('red');

  modal.open();
}

checkButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    handleClick(e, true);
  });
});

deleteButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    handleClick(e, false);
  });
});

console.log(roomIdCopy.innerHTML);

roomIdCopy.addEventListener('click', copy_text);

function copy_text() {
  var copyText = document.getElementById('room-id-copy');
  var textArea = document.createElement('textarea');
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('Copy');
  textArea.remove();
}
