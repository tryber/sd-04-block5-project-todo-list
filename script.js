const newTarefa = document.querySelector('#texto-tarefa');
const buttonAdd = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const buttonDel = document.querySelector('#apaga-tudo');
const buttonLimpa = document.querySelector('#remover-finalizados');
const elements = document.getElementsByClassName('completed');

buttonAdd.addEventListener('click', function (e) {
  e.preventDefault();
  const node = document.createElement('li');
  const textnode = document.createTextNode(newTarefa.value);
  node.appendChild(textnode);
  lista.appendChild(node);
  newTarefa.value = '';
});

lista.addEventListener('click', function (e) {
  e.target.classList.toggle('cinza');
});

lista.addEventListener('dblclick', function (e) {
  e.target.classList.toggle('completed');
});

buttonDel.addEventListener('click', function () {
  lista.innerHTML = '';
});

function removeElementsByClass() {
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

buttonLimpa.addEventListener('click', removeElementsByClass);
