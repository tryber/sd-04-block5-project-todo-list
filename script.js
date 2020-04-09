const taskText = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearAllTasks = document.getElementById('apaga-tudo');
const clearDoneTasks = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');
const btnRemoveSelected = document.getElementById('remover-selecionado');
let listItem = '';
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');

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

window.onload = () => {
  if (typeof Storage !== undefined) {
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
});

btnRemoveSelected.addEventListener('click', () => {
  document.querySelector('.selected').remove();
});

btnMoveUp.addEventListener('click', () => {
  let selectedItem = document.querySelector('.selected');
  let previous = selectedItem.previousElementSibling;
  let upItem = selectedItem.innerHTML;
  if (previous) {
    let downItem = selectedItem.previousElementSibling.innerHTML;
    selectedItem.previousElementSibling.innerHTML = upItem;
    selectedItem.previousElementSibling.classList.add('selected');
    selectedItem.innerHTML = downItem;
    selectedItem.classList.remove('selected');
  }
});

btnMoveDown.addEventListener('click', () => {
  let selectedItem = document.querySelector('.selected');
  let next = selectedItem.nextElementSibling;
  let downItem = selectedItem.innerHTML;
  if (next) {
    let upItem = selectedItem.nextElementSibling.innerHTML;
    selectedItem.nextElementSibling.innerHTML = downItem;
    selectedItem.nextElementSibling.classList.add('selected');
    selectedItem.innerHTML = upItem;
    selectedItem.classList.remove('selected');
  }
});
