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

const newTaskBt = document.querySelector('#criar-tarefa');
newTaskBt.addEventListener('click', () => {
  const taskInput = document.querySelector('#texto-tarefa');
  if (taskInput.value) {
    addTask(true, taskInput.value, null);
    taskInput.value = '';
  }
});

const removeTaskBtn = document.querySelector('#remover-selecionado');
removeTaskBtn.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  deleteTask(selectedTask);
  selectedTask.remove();
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

const upTaskBtn = document.querySelector('#mover-cima');
upTaskBtn.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  moveTask(selectedTask, 'up');
});

const downTaskBtn = document.querySelector('#mover-baixo');
downTaskBtn.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  moveTask(selectedTask, 'down');
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

function moveTask(task, direction) {
  const previousTask = task.previousSibling;
  const nextTask = task.nextSibling;
  const currentTask = task;
  const taskData = getTasks(task.id)[0];
  delete taskData.id;

  switch (direction) {
    case 'up':
      if (previousTask.id) {
        const previousTaskId = previousTask.id;
        const previousTaskData = getTasks(previousTask.id)[0];
        delete previousTaskData.id;
        updateTask(previousTask, taskData);
        updateTask(currentTask, previousTaskData);
        previousTask.id = currentTask.id;
        currentTask.id = previousTaskId;
        currentTask.previousSibling.remove();
        currentTask.after(previousTask);
      } else {
        alert('End of Task List');
      }
      break;
    case 'down':
      if (nextTask.id) {
        console.log(nextTask.id);
        const nextTaskId = nextTask.id;
        const nextTaskData = getTasks(nextTask.id)[0];
        delete nextTaskData.id;
        updateTask(nextTask, taskData);
        updateTask(currentTask, nextTaskData);
        nextTask.id = currentTask.id;
        currentTask.id = nextTaskId;
        currentTask.nextSibling.remove();
        currentTask.before(nextTask);
      } else {
        alert('End Of Task List');
      }
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
  localStorage.removeItem(task.id);
}

function updateTask(task, taskData) {
  const jsonTaskData = JSON.stringify(taskData);
  localStorage.setItem(task.id, jsonTaskData);
}
