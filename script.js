const savedTasks = getTasks();
if (savedTasks) {
  savedTasks.forEach((task) => {
    const taskId = savedTasks.indexOf(task) + 1;
    const createdTask = addTask(false, task.text, taskId);
    if (task.checked) {
      createdTask.classList.add('completed');
    }
  });
}

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

function addTask(isNew, task, taskId) {
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
  if (taskId) newTask.id = taskId;
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
      completeTask(task);
    } else {
      task.classList.add('completed');
      completeTask(task);
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

function getTasks(taskId) {
  if (localStorage.length > 0) {
    const tasksArray = [];
    // Get local storage keys in sorted order
    const sortedKeys = Object.keys(localStorage).sort((a, b) => a - b);
    switch (!taskId) {
      case true:
      // Key not provided
        sortedKeys.forEach((key) => {
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
    return tasksArray;
  }
  return null;
}

function completeTask(task) {
  const savedTask = getTasks(task.id)[0];
  if (savedTask.checked) {
    savedTask.checked = false;
  } else {
    savedTask.checked = true;
  }
  localStorage.setItem(task.id, JSON.stringify(savedTask));
}
