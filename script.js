const list = document.getElementById('lista-tarefas');
if (typeof Storage !== 'undefined') {
  list.innerHTML = localStorage.list;
}

// button criar-tarefa
const addButton = document.getElementById('criar-tarefa');
const toDo = document.getElementById('texto-tarefa');
addButton.addEventListener('click', () => {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = toDo.value;
  list.appendChild(tarefa);
  toDo.value = null;
});

// select a item
list.addEventListener('click', (e) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  e.target.style.backgroundColor = 'rgb(128,128,128)';
  e.target.classList.add('selected');
});

// select completed
list.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
});

// button apaga-tudo
const clear = document.getElementById('apaga-tudo');
clear.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    list.removeChild(tarefas[i]);
  }
});

// button remover-finalizados
const removeDone = document.getElementById('remover-finalizados');
removeDone.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('completed')) {
      list.removeChild(tarefas[i]);
    }
  }
});

// button salvar-tarefas
const store = document.getElementById('salvar-tarefas');
store.addEventListener('click', () => {
  localStorage.list = document.getElementById('lista-tarefas').innerHTML;
});

// button mover-cima
const toUp = document.getElementById('mover-cima');
toUp.addEventListener('click', () => {
  const selectedToDo = document.querySelector('.selected');
  const toDoUp = selectedToDo.innerHTML;
  const toDoDown = selectedToDo.previousElementSibling.innerHTML;
  selectedToDo.previousElementSibling.innerHTML = toDoUp;
  selectedToDo.previousElementSibling.className = 'selected';
  selectedToDo.previousElementSibling.style.backgroundColor = 'rgb(128,128,128)';
  selectedToDo.innerHTML = toDoDown;
  selectedToDo.classList.remove('selected');
  selectedToDo.style.backgroundColor = 'white';
});

// button mover-baixo
const toDown = document.getElementById('mover-baixo');
toDown.addEventListener('click', () => {
  const selectedToDo = document.querySelector('.selected');
  const toDoDown = selectedToDo.innerHTML;
  const toDoUp = selectedToDo.nextElementSibling.innerHTML;
  selectedToDo.nextElementSibling.innerHTML = toDoDown;
  selectedToDo.nextElementSibling.className = 'selected';
  selectedToDo.nextElementSibling.style.backgroundColor = 'rgb(128,128,128)';
  selectedToDo.innerHTML = toDoUp;
  selectedToDo.classList.remove('selected');
  selectedToDo.style.backgroundColor = 'white';
});

// button remover-selecionado
const remove = document.getElementById('remover-selecionado');
remove.addEventListener('click', () => {
  const toRemove = document.querySelector('.selected');
  list.removeChild(toRemove);
});
