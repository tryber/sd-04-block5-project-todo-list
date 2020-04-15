const taskTxt = document.querySelector('#texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const creatTask = document.createElement('li');

// Change BG of todo to Gray
function changeBG(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Add a Task
function addToDo() {
  addBtn.addEventListener('click', function () {
    const task = document.createElement('li');
    task.innerHTML = taskTxt.value;
    task.addEventListener('click', changeBG)
    taskList.appendChild(task);
    taskTxt.value = '';
  })
}

addToDo();



