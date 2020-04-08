const inputTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const apagaSelecionado = document.getElementById('remover-selecionado');
const apagaFinalizado = document.getElementById('remover-finalizados');
const salvarTarefas = document.getElementById('salvar-tarefas');
const paraCima = document.getElementById('mover-cima');
const paraBaixo = document.getElementById('mover-baixo');

function moveUp() {
  const bottomLi = document.querySelector('.selected');
  const upperLi = bottomLi.previousSibling;
  listaTarefas.insertBefore(bottomLi, upperLi);
}

function moveDown() {
  const upperLi = document.querySelector('.selected');
  const bottomLi = upperLi.nextSibling;
  listaTarefas.insertBefore(bottomLi, upperLi);
}

function selectItem(e) {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  e.target.classList.add('selected');
}

function doneItem(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function salvadorDeTarefas() {
  localStorage.lista = listaTarefas.innerHTML;
}

function tarefaParaLista() {
  const item = document.createElement('li');
  item.addEventListener('click', selectItem);
  item.addEventListener('dblclick', doneItem);
  item.innerHTML = inputTarefa.value;
  listaTarefas.appendChild(item);
  inputTarefa.value = '';
}

function apagadorDeFinalizado() {
  const finalizados = document.getElementsByClassName('completed');
  while (finalizados[0]) {
    finalizados[0].parentNode.removeChild(finalizados[0]);
  }
}

window.onload = function () {
  if (localStorage.lista) {
    listaTarefas.innerHTML = localStorage.lista;
    const itensLista = document.getElementsByTagName('li');
    for (let i = 0; i < itensLista.length; i += 1) {
      itensLista[i].addEventListener('click', selectItem);
      itensLista[i].addEventListener('dblclick', doneItem);
    }
  }
}

criarTarefa.addEventListener('click', tarefaParaLista);
apagaTudo.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
});

apagaSelecionado.addEventListener('click', () => {
  const item = document.querySelector('.selected');
  item.parentNode.removeChild(item);
});

apagaFinalizado.addEventListener('click', apagadorDeFinalizado);

salvarTarefas.addEventListener('click', salvadorDeTarefas);
paraCima.addEventListener('click', moveUp);
paraBaixo.addEventListener('click', moveDown);
