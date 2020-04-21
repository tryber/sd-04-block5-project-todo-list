const TASKTEXT = document.getElementById('texto-tarefa');
const BTNCREATETASK = document.getElementById('criar-tarefa');
const TASKLIST = document.getElementById('lista-tarefas');
const BTNREMOVELIST =  document.getElementById('apaga-tudo')
const BTNREMOVEFINISHEDLIST = document.getElementById('remover-finalizados');
const BTNREMOVESELECTED = document.getElementById('remover-selecionado')

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

function RemoveList(action) {
  let items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    switch (action) {
      case 2:
        if (items[i].className === 'completed') {
          removeChildList(items[i]);
        }
        break;
      case 3:
        if (items[i].className === 'selected') {
          removeChildList(items[i]);
        }
        break;
      default:
        removeChildList(items[i]);
        break;
    }
  }
}

function removeChildList(item) {
  TASKLIST.removeChild(item);
}

window.onload = function () {
  BTNCREATETASK.addEventListener('click', function () {
    CreateItem();
  });

  TASKLIST.addEventListener('click', function (event) {
    event.target.classList.toggle('selected');
  });

  TASKLIST.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });

  BTNREMOVELIST.addEventListener('click', function () {
    RemoveList(1);
  });

  BTNREMOVEFINISHEDLIST.addEventListener('click', function () {
    RemoveList(2);
  });

  BTNREMOVESELECTED.addEventListener('click', function () {
    RemoveList(3);
  });

};
