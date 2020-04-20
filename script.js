
const btnAdd = document.getElementById('criar-tarefa');
const olTodo = document.getElementById('lista-tarefas');
const txtTodo = document.getElementById('texto-tarefa');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnRemoveAll = document.getElementById('apaga-tudo');
const btnRemoveDone = document.getElementById('remover-finalizados');
const btnRemoveSelected = document.getElementById('remover-selecionado');

btnAdd.addEventListener('click', () => {
  const liNew = document.createElement('li');
  olTodo.appendChild(liNew).innerText = txtTodo.value;
  txtTodo.value = '';
  liNew.addEventListener('click', function () { this.classList.add('selected'); });
  liNew.addEventListener('dblclick', function () { this.classList.toggle('completed'); });
});

btnMoveUp.addEventListener('click', () => {
  const current = document.querySelector('.selected');
  const previous = current.previousSibling.innerText;
  current.previousSibling.innerText = current.innerText;
  current.innerText = previous;
  current.className = '';
  current.previousSibling.className = 'selected';
});

btnMoveDown.addEventListener('click', () => {
  const current = document.querySelector('.selected');
  const next = current.nextSibling.innerText;
  current.nextSibling.innerText = current.innerText;
  current.innerText = next;
  current.className = '';
  current.nextSibling.className = 'selected';
});

btnRemoveAll.addEventListener('click', () => {
  const liAll = document.getElementsByTagName('li');
  [...liAll].forEach((element) => { olTodo.removeChild(element); });
});

btnRemoveDone.addEventListener('click', () => {
  const liDone = document.getElementsByClassName('completed');
  [...liDone].forEach((element) => { olTodo.removeChild(element); });
});

btnRemoveSelected.addEventListener('click', () => {
  const liSelected = document.querySelector('.selected');
  olTodo.removeChild(liSelected);
});
