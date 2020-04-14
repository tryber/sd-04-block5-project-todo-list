// Query selectors
const addTaskBtn = document.querySelector('.criar-tarefa');
const deleteAllBtn = document.querySelector('.apaga-tudo');
const deleteCompletedBtn = document.querySelector('.remover-finalizados');
const taskList = document.querySelector('.lista-tarefas');
const text = document.querySelector('.texto-tarefa');

// Create task element
function createTask() {
  const task = document.createElement('li');
  task.classList.add('task-li');
  task.innerHTML = text.value;
  task.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task-li');
    tasks.forEach((item) => { if (item !== event.target) item.classList.remove('selected'); });
    event.target.classList.toggle('selected');
  });
  task.addEventListener('dblclick', () => {
    event.target.classList.toggle('completed');
  });
  return task;
}

// Create task event listener
addTaskBtn.addEventListener('click', () => {
  if (text.value !== '') taskList.appendChild(createTask());
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
