const lista = document.getElementById('lista-tarefas');
if (typeof Storage !== 'undefined') {
  lista.innerHTML = localStorage.lista;
}

const btnCriar = document.getElementById('criar-tarefa');
const btnApagaSel = document.getElementById('remover-selecionado');
const btnApagaFin = document.getElementById('remover-finalizados');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnCima = document.getElementById('mover-cima');
const btnBaixo = document.getElementById('mover-baixo');
const btnSalvarTarefas = document.getElementById('salvar-tarefas');

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

btnCriar.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa');
  const item = document.createElement('li');
  item.innerHTML = tarefa.value;
  lista.appendChild(item);
  tarefa.value = '';
});

btnApagaSel.addEventListener('click', () => {
  const tarefaSel = document.querySelector('.selected');
  lista.removeChild(tarefaSel);
});

btnApagaFin.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('completed')) {
      lista.removeChild(tarefas[i]);
    }
  }
});

btnApagaTudo.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    lista.removeChild(tarefas[i]);
  }
});

btnCima.addEventListener('click', function () {
  const tarefaSel = document.querySelector('.selected');
  const acima = tarefaSel.innerHTML;
  const abaixo = tarefaSel.previousElementSibling.innerHTML;
  tarefaSel.previousElementSibling.innerHTML = acima;
  tarefaSel.previousElementSibling.className = 'selected';
  tarefaSel.innerHTML = abaixo;
  tarefaSel.classList.remove('selected');
});

btnBaixo.addEventListener('click', function () {
  const tarefaSel = document.querySelector('.selected');
  const acima = tarefaSel.nextElementSibling.innerHTML;
  const abaixo = tarefaSel.innerHTML;
  tarefaSel.nextElementSibling.innerHTML = abaixo;
  tarefaSel.nextElementSibling.className = 'selected';
  tarefaSel.innerHTML = acima;
  tarefaSel.classList.remove('selected');
});

btnSalvarTarefas.addEventListener('click', function () {
  localStorage.lista = document.getElementById('lista-tarefas').innerHTML;
});
