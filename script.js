// Query selectors
const addTaskBtn = document.querySelector('.criar-tarefa');
const deleteAllBtn = document.querySelector('.apaga-tudo');
const deleteCompletedBtn = document.querySelector('.remover-finalizados');
const deleteSelectedBtn = document.querySelector('.remover-selecionado');
const moveUpBtn = document.querySelector('.mover-cima');
const moveDownBtn = document.querySelector('.mover-baixo');
const saveTasks = document.querySelector('.salvar-tarefas');
const taskList = document.querySelector('.lista-tarefas');
const text = document.querySelector('.texto-tarefa');

// Add all event listeneres to li elements
function addTaskEventListeners(element) {
  element.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task-li');
    tasks.forEach((item) => { if (item !== event.target) item.classList.remove('selected'); });
    event.target.classList.toggle('selected');
  });
  element.addEventListener('dblclick', () => {
    event.target.classList.toggle('completed');
  });
}

// Create task element
function createTask(liText) {
  const task = document.createElement('li');
  task.classList.add('task-li');
  task.innerHTML = liText;
  addTaskEventListeners(task);
  return task;
}

// Create task event listener
addTaskBtn.addEventListener('click', () => {
  if (text.value !== '') taskList.appendChild(createTask(text.value));
  text.value = '';
});

// Delete all button
deleteAllBtn.addEventListener('click', () => {
  while (taskList.firstChild) taskList.removeChild(taskList.firstChild);
});

// Delete completed button
deleteCompletedBtn.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  completed.forEach((item) => {
    item.parentNode.removeChild(item);
  });
});

// Deleted selected
deleteSelectedBtn.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  taskList.removeChild(selected);
});

// Save tasks
saveTasks.addEventListener('click', () => {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('taskList', taskList.innerHTML);
  } else {
    alert('Your browser does not support local storage feature');
  }
});

// Load tasks
function loadTasks() {
  const taskListLocalStorage = localStorage.getItem('taskList');
  taskList.innerHTML = taskListLocalStorage;
  const tasks = document.querySelectorAll('.task-li');
  tasks.forEach((item) => { addTaskEventListeners(item); });
}

// Move up
moveUpBtn.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && selectedTask.previousElementSibling !== null) {
    selectedTask.parentNode.insertBefore(selectedTask, selectedTask.previousElementSibling);
  }
});

// Move down
moveDownBtn.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && selectedTask.nextElementSibling !== null) {
    selectedTask.parentNode.insertBefore(selectedTask.nextElementSibling, selectedTask);
  }
});

// Function calls
loadTasks();
