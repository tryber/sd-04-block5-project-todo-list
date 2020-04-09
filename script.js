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
      let splitt = localStorage.savedItems.split(',');
      arraySavedTasks = splitt;
      for (let i = 0; i < arraySavedTasks.length; i += 1) {
        addToList(arraySavedTasks[i]);
      }
    }
  }
}

function addToList(value) {
  let e = document.createElement('li');
  let text = document.createTextNode(value);
  e.appendChild(text);
  taskList.appendChild(e);
  listItem = document.querySelectorAll('ol li');
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
  arraySavedTasks = []
  let allItens = document.querySelectorAll('ol li');
  for (let i = 0; i < allItens.length; i += 1) {
    arraySavedTasks.push(allItens[i].textContent);
  }
  localStorage.savedItems = arraySavedTasks;
})
