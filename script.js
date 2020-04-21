const lista = document.getElementById('lista-tarefas');
const criar = document.getElementById('criar-tarefa');
const apagaSel = document.getElementById('remover-selecionado');
const apagaFin = document.getElementById('remover-finalizados');
const apagaTudo = document.getElementById('apaga-tudo');

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

apagaSel.addEventListener('click', () => {
  const tarefaSel = document.querySelector('.selected');
  lista.removeChild(tarefaSel);
});

apagaFin.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('completed')) {
      lista.removeChild(tarefas[i]);
    }
  }
});

apagaTudo.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    lista.removeChild(tarefas[i]);
  }
});
