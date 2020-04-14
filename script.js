window.onload = function () {
  let textTask = document.getElementById('texto-tarefa');
  let btnCreateTask = document.getElementById('criar-tarefa');
  let taskList = document.getElementById('lista-tarefas');

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

  function createTask() {
    let newTask = document.createElement('li');
    newTask.innerText = textTask.value;
    newTask.addEventListener('click', clickTask);
    newTask.addEventListener('dblclick', completedTask);
    taskList.appendChild(newTask);
    textTask.value = '';
  }

  btnCreateTask.addEventListener('click', createTask);
};
