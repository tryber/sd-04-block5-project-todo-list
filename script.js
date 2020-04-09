let taskText = document.getElementById('texto-tarefa');
let btnAdd = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');
let elem = null;
let txt = null;

btnAdd.addEventListener('click', () => {
  elem = document.createElement('li');
  txt = document.createTextNode(taskText.value);
  elem.appendChild(txt);
  taskList.appendChild(elem);
  taskText.value = '';
});
