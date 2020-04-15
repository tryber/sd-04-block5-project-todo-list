const taskTxt = document.querySelector('#texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const creatTask = document.createElement('li');
const deleteBtn = document.getElementById('apaga-tudo');

// Change BG of todo clicked to Gray
function changeBG() {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Scratch the todo when double clicked
function finishedToDo() {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.className = 'completed';
  }
}

// Add a Task
function addToDo() {
  addBtn.addEventListener('click', function () {
    const task = document.createElement('li');
    task.innerHTML = taskTxt.value;
    task.addEventListener('dblclick', finishedToDo);
    task.addEventListener('click', changeBG);
    taskList.appendChild(task);
    taskTxt.value = '';
  })
}

addToDo();