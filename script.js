const savedTasks = getTasks();
if (savedTasks) {
  savedTasks.forEach((task) => {
    // const taskId = savedTasks.indexOf(task) + 1;
    const createdTask = addTask(false, task.text, task.id);
    if (task.checked) {
      createdTask.classList.add('completed');
    }
  });
}
showTaskControls(false);

const newTaskBt = document.querySelector('#criar-tarefa');
newTaskBt.addEventListener('click', () => {
  const taskInput = document.querySelector('#texto-tarefa');
  if (taskInput.value) {
    addTask(true, taskInput.value, null);
    taskInput.value = '';
  }
  showTaskControls(false);
});

const removeTaskBtn = document.querySelector('#remover-selecionado');
removeTaskBtn.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  deleteTask(selectedTask);
  selectedTask.remove();
  showTaskControls(false);
});

const cleanTasksBtn = document.querySelector('#apaga-tudo');
cleanTasksBtn.addEventListener('click', () => {
  deleteTask();
  document.querySelector('#lista-tarefas').innerHTML = '';
  showTaskControls(false);
});

const removeCompletedBtn = document.querySelector('#remover-finalizados');
removeCompletedBtn.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((task) => {
    task.remove();
    deleteTask(task);
  });
  showTaskControls(false);
});

const upTaskBtn = document.querySelector('#mover-cima');
upTaskBtn.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  moveTaskUp(selectedTask);
});

const downTaskBtn = document.querySelector('#mover-baixo');
downTaskBtn.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  moveTaskDown(selectedTask);
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
  // Select task
  task.addEventListener('click', () => {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }
    task.classList.add('selected');
    showTaskControls(true);
  });
  // Complete Task
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

function moveTaskUp(task) {
  // Get next and selected tasks nodes
  const currentTask = task;
  const previousTask = task.previousSibling;
  if (previousTask.id) {
    // Get task data from localStorage
    const currentTaskData = getTasks(currentTask.id)[0];
    delete currentTaskData.id;
    const previousTaskData = getTasks(previousTask.id)[0];
    delete previousTaskData.id;
    // Update tasks registers on localStorage
    updateTask(previousTask, currentTaskData);
    updateTask(currentTask, previousTaskData);
    // Swap id's
    const tempId = currentTask.id;
    currentTask.id = previousTask.id;
    previousTask.id = tempId;
    currentTask.previousSibling.remove();
    currentTask.after(previousTask);
  }
}

function moveTaskDown(task) {
  // Get next and selected tasks nodes
  const currentTask = task;
  const nextTask = task.nextSibling;
  if (nextTask) {
    // Get task data from localStorage
    const currentTaskData = getTasks(currentTask.id)[0];
    delete currentTaskData.id;
    const nextTaskData = getTasks(nextTask.id)[0];
    delete nextTaskData.id;
    // Update tasks registers on localStorage
    updateTask(nextTask, currentTaskData);
    updateTask(currentTask, nextTaskData);
    // Swap id's
    const tempId = currentTask.id;
    currentTask.id = nextTask.id;
    nextTask.id = tempId;
    // Move tasks on list
    currentTask.nextSibling.remove();
    currentTask.before(nextTask);
  }
}

function showTaskControls(show) {
  const taskcontrol = document.querySelector('.task-controls-container');
  switch (show) {
    case true:
      taskcontrol.classList.add('visible');
      break;
    case false:
      taskcontrol.classList.remove('visible');
      break;
    default:
      break;
  }
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
          item.id = key;
          tasksArray.push(item);
        });
        break;
      case false:
      // Key provided
        tasksArray.push(JSON.parse(localStorage.getItem(taskId)));
        tasksArray[0].id = taskId;
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

function deleteTask(task) {
  if (task) {
    localStorage.removeItem(task.id);
  } else {
    localStorage.clear();
  }
}

function updateTask(task, taskData) {
  const jsonTaskData = JSON.stringify(taskData);
  localStorage.setItem(task.id, jsonTaskData);
}
