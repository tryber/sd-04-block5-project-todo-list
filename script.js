const newTarefa = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');

button.addEventListener('click', function(e) {
  e.preventDefault;
  let node = document.createElement("li");
  let textnode = document.createTextNode(newTarefa.value);
  console.log(textnode);
  node.appendChild(textnode);
  lista.appendChild(node);
  newTarefa.value = '';
  });