const taskTxt = document.querySelector('#texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const deleteBtn = document.getElementById('apaga-tudo');
const removeBtn = document.getElementById('remover-finalizados');
const creatTask = document.createElement('li');

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


deleteBtn.addEventListener('click', function() {
  const toDos = document.querySelectorAll('li');
  for (let i = 0; i < toDos.length; i += 1) {
    taskList.removeChild(toDos[i]);
  }
})

removeBtn.addEventListener('click', function() {
  const done = document.querySelectorAll('.completed');
  for (let i = 0; i < done.length; i += 1) {
    taskList.removeChild(done[i]);
  }

})



addToDo();