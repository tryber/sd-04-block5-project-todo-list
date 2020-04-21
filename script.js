const TASKTEXT = document.getElementById('texto-tarefa');
const BTNCREATETASK = document.getElementById('criar-tarefa');
const TASKLIST = document.getElementById('lista-tarefas');

function CreateItem() {
  if (TASKTEXT.value === '') {
    alert('Você precisa digitar alguma tarefa primeiro');
  } else {
    const ITEM = document.createElement('li');
    ITEM.innerHTML = TASKTEXT.value;
    TASKLIST.appendChild(ITEM);
    TASKTEXT.value = '';
  }
};

window.onload = function () {
  BTNCREATETASK.addEventListener('click', function() {
    CreateItem();
  });

  TASKLIST.addEventListener('click', function(event) {
    event.target.classList.toggle('selected');
  });

  TASKLIST.addEventListener('dblclick', function(event) {
    event.target.classList.toggle('completed');
  });
  
};
