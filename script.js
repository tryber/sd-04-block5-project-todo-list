// Query selectors
const addTaskBtn = document.querySelector('.criar-tarefa');
const taskList = document.querySelector('.lista-tarefas');

// Create task function
function createTask() {
  const task = document.createElement('li');
  const text = document.querySelector('.texto-tarefa');
  task.innerHTML = text.value;
  return task;
}

// Add task event listener
addTaskBtn.addEventListener('click', () => {
  taskList.appendChild(createTask());
});
