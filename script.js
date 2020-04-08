const newTaskBt = document.querySelector('#criar-tarefa');
newTaskBt.addEventListener('click', () => {
  const taskInput = document.querySelector('#texto-tarefa');
  addTask(true, taskInput.value, null);
  taskInput.value = '';
});

function addTask(isNew, task) {
  const taskList = document.querySelector('#lista-tarefas');

  // Create the task elements
  // Create the li tag
  const newTask = document.createElement('li');
  newTask.className = 'task';
  // Create task  text
  const newTaskTextDiv = document.createElement('div');
  newTaskTextDiv.className = 'task-text';
  newTaskTextDiv.innerHTML = task;
  newTask.appendChild(newTaskTextDiv);
  // Create item details
  const newTaskDetailsDiv = document.createElement('div');
  newTaskDetailsDiv.className = 'task-details';
  newTaskDetailsDiv.hidden = true;
  newTask.appendChild(newTaskDetailsDiv);
  // Set task events
  setTaskEvents(newTask);
  // Append to task list
  taskList.appendChild(newTask, task);
}

function setTaskEvents(task) {
  task.addEventListener('click', () => {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }
    task.classList.add('selected');
  });
}
