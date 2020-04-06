const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const btnApagar = document.getElementById('apaga-tudo');
const btnFinalizados = document.getElementById('remover-finalizados');
const list = document.getElementById('lista-tarefas');
const allBtn = document.getElementsByTagName('button');
let items = document.getElementsByClassName('list-item');
let finished = [];

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
  item.addEventListener('click', selectItem);
  item.addEventListener('dblclick', finishItem);
  item.addEventListener('mouseover', changeCursor);
  input.value = '';
  list.appendChild(item);
});

function getItems() {
  items = document.getElementsByClassName('list-item');
}
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
