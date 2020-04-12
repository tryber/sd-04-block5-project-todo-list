// Query selectors
const addTaskBtn = document.querySelector('.criar-tarefa');
const list = document.querySelector('.lista-tarefas');

// Add task event listener
addTaskBtn.addEventListener('click', () => {
  const task = document.querySelector('.texto-tarefa').value;
  const newTaskLi = document.createElement('li');
  newTaskLi.classList.add('task-item');
  const newTaskText = document.createElement('p');
  newTaskText.innerHTML = task;
  newTaskLi.appendChild(newTaskText);
  list.appendChild(newTaskLi);

  newTaskLi.addEventListener('click', () => {
    const taskItem = document.querySelectorAll('.task-item');
    taskItem.forEach((item) => {
      item.style.backgroundColor = 'initial';
    });
    newTaskLi.style.backgroundColor = 'rgb(128 , 128 , 128)';
  });

  newTaskLi.addEventListener('dblclick', () => {
    newTaskLi.classList.add('completed');
  });
});
