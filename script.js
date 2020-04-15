const taskTxt = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const creatTask = document.createElement('li');

addBtn.addEventListener('click', function () {
  const task = document.createElement('li');
  task.innerHTML = taskTxt.value;
  taskList.appendChild(task);
  task.value = '';
})