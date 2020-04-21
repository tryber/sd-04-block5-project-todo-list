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
  
};
