const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const btnApagar = document.getElementById('apaga-tudo');
const btnFinalizados = document.getElementById('remover-finalizados');
const btnSelecionado = document.getElementById('remover-selecionado');
const btnSave = document.getElementById('salvar-tarefas');
const btnCima = document.getElementById('mover-cima');
const btnBaixo = document.getElementById('mover-baixo');
const list = document.getElementById('lista-tarefas');
const allBtn = document.getElementsByTagName('button');
let items = document.getElementsByClassName('list-item');

window.onload = function() {
  list.innerHTML = localStorage.getItem('list');
}

btnSelecionado.addEventListener('click', () => {
  for (let i = 0; i < items.length; i += 1) {
    for (let u = 0; u < items[i].classList.length; u += 1) {
      if (items[i].classList[u] === 'selected') {
        items[i].remove();
        break;
      }
    }
  }
});

function selectItem() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].classList.remove('selected');
  }
  if (event.target.classList[1] !== 'selected') {
    event.target.classList.add('selected');
  }
}

function changeCursor() {
  event.target.style.cursor = 'pointer';
}

function finishItem() {
  let completed = false;
  for (let i = 0; i < event.target.classList.length; i++) {
    if (event.target.classList[i] === 'completed') completed = true;
  }
  if (completed) event.target.classList.remove('completed');
  else event.target.classList.add('completed');
}

btn.addEventListener('click', () => {
  const item = document.createElement('li');
  item.className = 'list-item';
  item.innerHTML = input.value;
  input.value = '';
  list.appendChild(item);
});

function getItems() {
  items = document.getElementsByClassName('list-item');
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', selectItem);
    items[i].addEventListener('dblclick', finishItem);
    items[i].addEventListener('mouseover', changeCursor);
  }
}

function saveList() {
  localStorage.setItem("list", list.innerHTML);
}

btnSave.addEventListener('click', saveList);

setInterval(getItems, 1);

btnApagar.addEventListener('click', () => {
  list.innerHTML = '';
});

btnFinalizados.addEventListener('click', () => {
  if (items.length > 0) {
    for (let i = 0; i < items.length; i += 1) {
      for (let u = 0; u < items[i].classList.length; u += 1) {
        if (items[i].classList[u] === 'completed') {
          items[i].remove();
          if (i !== 0) i--;
          else break;
        }
      }
    }
  }
})

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener('mouseover', changeCursor);
}

btnCima.addEventListener('click', () => {
  const arr = Array.from(items);
  let pos = 0;
  for (let i = 0; i < items.length; i += 1) {
    for (let u = 0; u < items[i].classList.length; u += 1) {
      if (items[i].classList[u] === 'selected') {
        pos = i;
      }
    }
  }
  if (pos === 0) return 0;
  const temp = arr[pos];
  arr[pos] = arr[pos - 1];
  arr[pos - 1] = temp;
  list.innerHTML = '';
  for (i in arr) {
    list.appendChild(arr[i]);
  }
});

btnBaixo.addEventListener('click', () => {
  const arr = Array.from(items);
  let pos = 0;
  for (let i = 0; i < items.length; i += 1) {
    for (let u = 0; u < items[i].classList.length; u += 1) {
      if (items[i].classList[u] === 'selected') {
        pos = i;
      }
    }
  }
  if (pos === (items.length - 1)) return 0;
  const temp = arr[pos];
  arr[pos] = arr[pos + 1];
  arr[pos + 1] = temp;
  list.innerHTML = '';
  for (i in arr) {
    list.appendChild(arr[i]);
  }
});
