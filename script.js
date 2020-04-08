const addButton = document.getElementById('criar-tarefa');
const toDo = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

addButton.addEventListener('click', () => {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = toDo.value;
  list.appendChild(tarefa);
  toDo.value = null;
})

list.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'rgb(128,128,128)';
});

list.addEventListener('dblclick', (e) => {
  e.target.classList.add('completed');
});
