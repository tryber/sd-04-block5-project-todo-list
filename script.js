//  start with storaged list
const list = document.getElementById('lista-tarefas');
// if (typeof localStorage !== undefined) {
//   let storedList = localStorage.list;
//   console.log(storedList[1]);
//   for (let i = 0; i < localStorage.list; i += 1) {
//     let toDo = document.createElement('li');
//     list.appendChild(localStorage.list[i])
//   }
// }

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
    document.querySelector('.selected').classList.remove('selected');
  }
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
  const toDoList = document.querySelectorAll('ol>li');
});

// button mover-cima
const toUp = document.getElementById('mover-cima');
toUp.addEventListener('click', () => {
  const selectedToDo = document.querySelector('.selected');
  const toDoUp = selectedToDo.innerHTML;
  const toDoDown = selectedToDo.previousElementSibling.innerHTML;
  selectedToDo.previousElementSibling.innerHTML = toDoUp;
  selectedToDo.previousElementSibling.className = 'selected';
  selectedToDo.innerHTML = toDoDown;
  selectedToDo.classList.remove('selected');
});

// button mover-baixo
const toDown = document.getElementById('mover-baixo');
toDown.addEventListener('click', () => {
  const selectedToDo = document.querySelector('.selected');
  const toDoDown = selectedToDo.innerHTML;
  const toDoUp = selectedToDo.nextElementSibling.innerHTML;
  selectedToDo.nextElementSibling.innerHTML = toDoDown;
  selectedToDo.nextElementSibling.className = 'selected';
  selectedToDo.innerHTML = toDoUp;
  selectedToDo.classList.remove('selected');
});
