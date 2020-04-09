const savedTasks = getTasks();
savedTasks.forEach((task) => {
  addTask(false, task.text);
});

const newTaskBt = document.querySelector('#criar-tarefa');
newTaskBt.addEventListener('click', () => {
  const taskInput = document.querySelector('#texto-tarefa');
  if (taskInput.value) {
    addTask(true, taskInput.value, null);
    taskInput.value = '';
  }
});

const cleanTasksBtn = document.querySelector('#apaga-tudo');
cleanTasksBtn.addEventListener('click', () => {
  document.querySelector('#lista-tarefas').innerHTML = '';
});

const removeCompletedBtn = document.querySelector('#remover-finalizados');
removeCompletedBtn.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((task) => {
    task.remove();
  });
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
  // Put task o localStorage and set id like key
  if (isNew) newTask.id = createTask(task);
  // Append to task list
  taskList.appendChild(newTask, task);

  return newTask;
}

function setTaskEvents(task) {
  task.addEventListener('click', () => {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }
    task.classList.add('selected');
  });
  task.addEventListener('dblclick', () => {
    if (task.classList.contains('completed')) {
      task.classList.remove('completed');
    } else {
      task.classList.add('completed');
    }
  });
}

// LocalStorage Functions
function createTask(taskText) {
  let lastKey = 0;
  Object.keys(localStorage).forEach((key) => {
    if (Number(key) > lastKey) {
      lastKey = Number(key);
    }
  });
  // Generate a new key
  const newKey = lastKey + 1;
  // Generate task creation details
  const actualDate = new Date();
  const taskDate = `Created on 
  ${(`0${actualDate.getDate()}`).slice(-2)}
  /${(`0${actualDate.getMonth()}`).slice(-2)}/${actualDate.getFullYear()}`;

  // Create localStorage entry
  localStorage.setItem(newKey, JSON.stringify({
    text: taskText,
    datails: taskDate,
    list: 'principal',
    checked: false,
  }));

  return newKey;
}
getTasks();
function getTasks(taskId) {
  if (localStorage.length > 0) {
    const tasksArray = [];
    switch (!taskId) {
      case true:
      // Key not provided
        Object.keys(localStorage).forEach((key) => {
          const item = JSON.parse(localStorage.getItem(key));
          tasksArray.push(item);
        });
        break;
      case false:
      // Key provided
        tasksArray.push(JSON.parse(localStorage.getItem(taskId)));
        break;
      default:
        break;
    }
    return tasksArray.sort();
  }
  return null;
}
