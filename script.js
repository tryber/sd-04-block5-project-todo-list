window.onload = function () {
  let textTask = document.getElementById('texto-tarefa');
  let btnCreateTask = document.getElementById('criar-tarefa');
  let taskList = document.getElementById('lista-tarefas');
  let btnCleanList = document.getElementById('apaga-tudo');
  let btnRemoveDone = document.getElementById('remover-finalizados');

  function clickTask(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }

  function completedTask(event) {
    if (event.target.className === 'completed') {
      event.target.className = '';
    } else {
      event.target.className = 'completed';
    }
  }

  function cleanList() {
    let listSize = taskList.childNodes.length;
    for (let i = 0; i < listSize; i += 1) {
      taskList.removeChild(taskList.lastChild);
    }
  }

  function cleanDone() {
    let taskDone = document.getElementsByClassName('completed');
    let taskDoneList = taskDone.length;
    for (let i = 0; i < taskDoneList; i += 1) {
        taskDone[0].remove();
    }
  }

  function createTask() {
    let newTask = document.createElement('li');
    newTask.innerText = textTask.value;
    newTask.addEventListener('click', clickTask);
    newTask.addEventListener('dblclick', completedTask);
    taskList.appendChild(newTask);
    textTask.value = '';
  }

  btnCreateTask.addEventListener('click', createTask);
  btnCleanList.addEventListener('click', cleanList);
  btnRemoveDone.addEventListener('click', cleanDone);
};
