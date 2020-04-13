// Query selectors
const addTaskBtn = document.querySelector('.criar-tarefa');
const taskList = document.querySelector('.lista-tarefas');
const text = document.querySelector('.texto-tarefa');

// Create task function
function createTask() {
  const task = document.createElement('li');
  task.innerHTML = text.value;
  return task;
}

// Add task event listener
addTaskBtn.addEventListener('click', () => {
  taskList.appendChild(createTask());
  text.value = '';
});
