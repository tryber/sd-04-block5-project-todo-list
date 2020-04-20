let textTask;
let taskList;
let btnCreateTask;
let btnCleanList;
let btnRemoveDone;

function clickTask(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function completedTask(event) {
  if (event.target.className === 'completed') {
    event.target.className = '';
  } else {
    event.target.className = 'completed';
  }
}

function cleanList() {
  const listSize = taskList.childNodes.length;
  for (let i = 0; i < listSize; i += 1) {
    taskList.removeChild(taskList.lastChild);
  }
}

function cleanDone() {
  const taskDone = document.getElementsByClassName('completed');
  const taskDoneList = taskDone.length;
  for (let i = 0; i < taskDoneList; i += 1) {
    taskDone[0].remove();
  }
}

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = textTask.value;
  newTask.addEventListener('click', clickTask);
  newTask.addEventListener('dblclick', completedTask);
  taskList.appendChild(newTask);
  textTask.value = '';
}

window.onload = function () {
  textTask = document.getElementById('texto-tarefa');
  btnCreateTask = document.getElementById('criar-tarefa');
  taskList = document.getElementById('lista-tarefas');
  btnCleanList = document.getElementById('apaga-tudo');
  btnRemoveDone = document.getElementById('remover-finalizados');

  btnCreateTask.addEventListener('click', createTask);
  btnCleanList.addEventListener('click', cleanList);
  btnRemoveDone.addEventListener('click', cleanDone);
};
