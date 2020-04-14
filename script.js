window.onload = function () {
  let textTask = document.getElementById('texto-tarefa');
  let btnCreateTask = document.getElementById('criar-tarefa');
  let taskList = document.getElementById('lista-tarefas');

  function createTask() {
    let newTask = document.createElement('li');
    newTask.innerText = textTask.value;
    newTask.addEventListener('click', clickTask);
    taskList.appendChild(newTask);
    textTask.value = '';
  }

  function clickTask(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }

  btnCreateTask.addEventListener('click', createTask);
};
