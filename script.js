const taskText = document.getElementById('texto-tarefa');
const buttonCreateTask = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const buttonDeleteList = document.getElementById('apaga-tudo');
const removeFinished = document.getElementById('remover-finalizados');

buttonCreateTask.addEventListener('click', function () {
  let valueTaskText = taskText.value;
  let li = document.createElement('li');
  li.classList.add('listTask');
  listTask.appendChild(li).innerHTML = valueTaskText;
  taskText.value = '';
});

buttonDeleteList.addEventListener('click', function () {
  const listItems = document.querySelectorAll('.listTask');
  for ( let i = 0; i < listItems.length; i += 1) {
    listTask.removeChild(listItems[i]);
  }
});

document.body.addEventListener('click', function (event) {
    if (event.target.className == 'listTask') {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

listTask.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

removeFinished.addEventListener ('click', function() {
  const listItems = document.querySelectorAll('ol .completed');
  for (let j = 0; j < listItems.length; j += 1 ) {
      listTask.removeChild(listItems[j]);
    }
  }
);