let taskText = document.getElementById('texto-tarefa');
let btnCreateTask = document.getElementById('criar-tarefa'); 
let taskList = document.getElementById('lista-tarefas');

function criaItem() {
  let item = document.createElement('li');
  item.innerHTML = textoTarefa.value;
  taskList.appendChild(item);
  taskText.value = '';
}

window.onload = function () {
  criaItem();
};
