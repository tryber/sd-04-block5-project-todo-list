const newTaskBt = document.querySelector('#criar-tarefa');
newTaskBt.addEventListener('click', () => {
  const taskInput = document.querySelector('#texto-tarefa');
  addTask(true, taskInput.value, null);
  taskInput.value = '';
});

function addTask(isNew, task, details) {
  const taskList = document.querySelector('#lista-tarefas');
  const actualDate = new Date();

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
  // Append to task list
  taskList.appendChild(newTask, task);

  switch (isNew) {
    case true:
      newTaskDetailsDiv.innerHTML = `Created on 
          ${(`0${actualDate.getDate()}`).slice(-2)}
          /${(`0${actualDate.getMonth()}`).slice(-2)}/${actualDate.getFullYear()}`;
      break;
    case false:
      newTaskDetailsDiv.innerHTML = details;
      break;
    default:
      break;
  }
}
