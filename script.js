const taskText = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearAllTasks = document.getElementById('apaga-tudo');
const clearDoneTasks = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');
let arraySavedTasks = [];
let listItem = '';
let elem = null;
let txt = null;

window.onload = () => {
  if(typeof Storage !== undefined) {
    if (localStorage.savedItems) {
      taskList.innerHTML = localStorage.savedItems;
      let child = taskList.children;
      for (let i = 0; i < child.length; i += 1) {
        addClickEvent(child[i]);
        addDblClickEvent(child[i]);
      }
    }
  }
}

function addToList(value) {
  let e = document.createElement('li');
  let text = document.createTextNode(value);
  e.appendChild(text);
  taskList.appendChild(e);
  addClickEvent(e);
  addDblClickEvent(e);
}

function removeClass() {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].classList.remove('selected');
  }
}

function addClickEvent(elem) {
  elem.addEventListener('click', () => {  
    listItem = document.querySelectorAll('ol li');
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
  addToList(taskText.value);
  taskText.value = '';
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

saveTasks.addEventListener('click', () => {
  localStorage.savedItems = taskList.innerHTML;
})
