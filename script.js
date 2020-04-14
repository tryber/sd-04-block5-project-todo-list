// Query selectors
const addTaskBtn = document.querySelector('.criar-tarefa');
const taskList = document.querySelector('.lista-tarefas');
const text = document.querySelector('.texto-tarefa');

function createTask() {
  const task = document.createElement('li');
  task.classList.add('task-li');
  task.innerHTML = text.value;
  task.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task-li');
    tasks.forEach((item) => { if (item !== event.target) item.classList.remove('selected'); });
    event.target.classList.toggle('selected');
  });
  return task;
}

addTaskBtn.addEventListener('click', () => {
  if (text.value !== '') taskList.appendChild(createTask());
  text.value = '';
});
