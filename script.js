const lista = document.getElementById('lista-tarefas');
const criar = document.getElementById('criar-tarefa');
criar.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa');
  const item = document.createElement('li');
  item.innerHTML = tarefa.value;
  lista.appendChild(item);
  tarefa.value = '';
});
lista.addEventListener('click', function () {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
});
lista.addEventListener('dblclick', function () {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});