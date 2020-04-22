const TASKTEXT = document.getElementById('texto-tarefa');
const BTNCREATETASK = document.getElementById('criar-tarefa');
const TASKLIST = document.getElementById('lista-tarefas');
const BTNREMOVELIST = document.getElementById('apaga-tudo');
const BTNREMOVEFINISHEDLIST = document.getElementById('remover-finalizados');
const BTNREMOVESELECTED = document.getElementById('remover-selecionado');
const BTNSALVAR = document.getElementById('salvar-tarefas');
const BTNUP = document.getElementById('mover-cima');
const BTNDOWN = document.getElementById('mover-baixo');

function CreateItem() {
  if (TASKTEXT.value === '') {
    alert('Você precisa digitar alguma tarefa primeiro');
  } else {
    const ITEM = document.createElement('li');
    ITEM.innerHTML = TASKTEXT.value;
    TASKLIST.appendChild(ITEM);
    TASKTEXT.value = '';
  }
}

function removeChildList(item) {
  TASKLIST.removeChild(item);
  localStorage.removeItem('itens');
}

function RemoveList(classRemove) {
  const ITEMS = document.querySelectorAll('li');
  for (let i = 0; i < ITEMS.length; i += 1) {
    if ((classRemove === 'remove') ||
      (ITEMS[i].className.trim() === classRemove)) {
      removeChildList(ITEMS[i]);
    }
  }
}

function UpItemList() {
  const ITEMSSELECTED = document.querySelector('.selected');
  if (ITEMSSELECTED === null) {
    alert('Você deve selecionar o item que deseja mover para cima!');
  } else {
    const PROXITEM = ITEMSSELECTED.previousSibling;
    if (PROXITEM) {
      TASKLIST.insertBefore(ITEMSSELECTED, PROXITEM);
    }
  }
}

function DownItemList() {
  const ITEMSSELECTED = document.querySelector('.selected');
  if (ITEMSSELECTED === null) {
    alert('Você deve selecionar o item que deseja mover para baixo!');
  } else {
    const PROXITEM = ITEMSSELECTED.nextSibling;
    if (PROXITEM) {
      TASKLIST.insertBefore(PROXITEM, ITEMSSELECTED);
    }
  }
}

TASKLIST.addEventListener('click', function (event) {
  event.target.classList.toggle('selected');
});

TASKLIST.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
});

BTNUP.addEventListener('click', function () {
  UpItemList();
});

BTNDOWN.addEventListener('click', function () {
  DownItemList();
});

BTNSALVAR.addEventListener('click', function () {
  localStorage.setItem('itens', TASKLIST.innerHTML);
});

if (localStorage !== null) {
  TASKLIST.innerHTML = localStorage.getItem('itens');
}

BTNREMOVELIST.addEventListener('click', function () {
  RemoveList('remove');
});

BTNREMOVEFINISHEDLIST.addEventListener('click', function () {
  RemoveList('completed');
});

BTNREMOVESELECTED.addEventListener('click', function () {
  RemoveList('selected');
});

BTNCREATETASK.addEventListener('click', function () {
  CreateItem();
});
