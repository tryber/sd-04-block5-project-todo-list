const taskText = document.getElementById('texto-tarefa');
const buttonCreateTask = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const buttonDeleteList = document.getElementById('apaga-tudo');
const removeFinished = document.getElementById('remover-finalizados');

buttonCreateTask.addEventListener('click', function () {
  const valueTaskText = taskText.value;
  const li = document.createElement('li');
  li.classList.add('listTask');
  listTask.appendChild(li).innerHTML = valueTaskText;
  taskText.value = '';
});

buttonDeleteList.addEventListener('click', function () {
  const listItems = document.querySelectorAll('.listTask');
  for (let i = 0; i < listItems.length; i += 1) {
    listTask.removeChild(listItems[i]);
  }
});

listTask.addEventListener('click', function (event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
});

const removeSelected = document.getElementById('remover-selecionado');
removeSelected.addEventListener('click', function () {
  const remove = document.querySelector('.selected');
  listTask.removeChild(remove);
});

listTask.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

removeFinished.addEventListener('click', function () {
  const listItems = document.querySelectorAll('ol .completed');
  for (let j = 0; j < listItems.length; j += 1) {
    listTask.removeChild(listItems[j]);
  }
});

listTask.innerHTML = localStorage.listTask;

const salveStorage = document.getElementById('salvar-tarefas');
salveStorage.addEventListener('click', function () {
  localStorage.listTask = document.getElementById('lista-tarefas').innerHTML;
});
