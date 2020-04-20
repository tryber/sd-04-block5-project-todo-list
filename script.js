const textoTarefa = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnApagaFinalizados = document.getElementById('remover-finalizados');
const lista = document.getElementById('lista-tarefas');
let tarefa = '';


btn.addEventListener('click', function () {
  const criarTarefa = document.createElement('LI');
  criarTarefa.className = 'item-lista';
  tarefa = document.createTextNode(textoTarefa.value);
  criarTarefa.appendChild(tarefa);
  lista.appendChild(criarTarefa);
  tarefa = '';
  textoTarefa.value = '';
});
lista.addEventListener('click', function (event) {
  if (event.target.className === 'item-lista') {
    event.target.className = 'item-lista selected';
  } else if (event.target.className === 'item-lista selected') {
    event.target.className = 'item-lista completed';
  }
});
lista.addEventListener('dblclick', function (event) {
  event.target.className = 'item-lista';
});
btnApagaTudo.addEventListener('click', function () {
  lista.innerHTML = '';
});
btnApagaFinalizados.addEventListener('click', function () {
  const quantosFinalizados = lista.querySelectorAll('.completed').length;
  for (let i = 0; i < quantosFinalizados; i += 1) {
    lista.querySelector('.completed').remove('li');
  }
});
