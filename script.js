const addButton = document.getElementById('criar-tarefa');
const toDo = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const clear = document.getElementById('apaga-tudo');
const removeDone = document.getElementById('remover-finalizados');

addButton.addEventListener('click', () => {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = toDo.value;
  list.appendChild(tarefa);
  toDo.value = null;
});

list.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'rgb(128,128,128)';
});

list.addEventListener('dblclick', (e) => {
  if (e.target.className !== 'completed') {
    e.target.classList.add('completed');
  } else {
    e.target.classList.remove('completed');
  }
});

clear.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    list.removeChild(tarefas[i]);
  }
});

removeDone.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].className === 'completed') {
      list.removeChild(tarefas[i]);
    }
  }
});
