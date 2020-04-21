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
    document.querySelector('.selected').style.backgroundColor = 'rgb(29,29,29)';
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
});
