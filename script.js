const taskText = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearAllTasks = document.getElementById('apaga-tudo');
const clearDoneTasks = document.getElementById('remover-finalizados');
let listItem = '';
let elem = null;
let txt = null;

function removeClass() {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].classList.remove('selected');
  }
}

function addClickEvent(elem) {
  elem.addEventListener('click', () => {  
    removeClass();
    elem.classList.add('selected');
  });
}

function addDblClickEvent(elem) {
  elem.addEventListener('dblclick', () => {  
    if (elem.classList.contains('completed')) {
      elem.classList.remove('completed');
    }
    else {
      elem.classList.add('completed');
    }
  });
}

btnAdd.addEventListener('click', () => {
  elem = document.createElement('li');
  txt = document.createTextNode(taskText.value);
  elem.appendChild(txt);
  taskList.appendChild(elem);
  taskText.value = '';
  listItem = document.querySelectorAll('ol li');
  addClickEvent(elem);
  addDblClickEvent(elem);
});

clearAllTasks.addEventListener('click', () => {
  taskList.innerHTML = '';
});

clearDoneTasks.addEventListener('click', () => {
  let completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
});
