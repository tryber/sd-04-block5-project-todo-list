//  LISTA DAS TAREFAS
const taskList = document.getElementById('lista-tarefas');

//  BOTÃO CRIAR TAREFA
const addTaskButton = document.getElementById('criar-tarefa');

//  BOTAO APAGA TUDO
const clearAllButton = document.getElementById('apaga-tudo');

//  BOTAO APAGA TAREFAS COMPLETAS
const clearCompletedButton = document.getElementById('remover-finalizados');

//  FUNÇÃO ADICIONAR TASk-----------------------------------------------
function newTask() {
  const li = document.createElement('li');
  li.className = 'taskItem';
  const inputValue = document.getElementById('texto-tarefa').value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert('You must especify a task!');
  } else {
    document.getElementById('lista-tarefas').appendChild(li);
  }
  document.getElementById('texto-tarefa').value = '';
}
addTaskButton.addEventListener('click', newTask);
//  ----------------------------------------------------------------------

//  mudando o backGround--------------------------------------------------
taskList.addEventListener('click', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
});
//  ---------------------------------------------------------------------

// apagando todos itens da lista-----------------------------------------
clearAllButton.addEventListener('click', function () {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    taskList.removeChild(tasks[i]);
  }
});
//  ---------------------------------------------------------------------

//  marcando como completo ----------------------------------------------
taskList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
//  --------------------------------------------------------------------

//  removendo tasks completadas ----------------------------------------
clearCompletedButton.addEventListener('click', function () {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('completed')) {
      taskList.removeChild(tasks[i]);
    }
  }
});
//  -------------------------------------------------------------------
