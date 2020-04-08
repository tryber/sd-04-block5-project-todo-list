let textoTarefa;
let listaTarefas;
let tarefaSelecionada;

function clickTarefa(event) {
  const target = event.target;
  if (target !== tarefaSelecionada) {
    if (tarefaSelecionada) {
      tarefaSelecionada.style.backgroundColor = 'initial';
    }
    target.style.backgroundColor = 'rgb(128,128,128)';
    tarefaSelecionada = target;
  } else {
    tarefaSelecionada = null;
    target.style.backgroundColor = 'initial';
  }
}

function doubleClickTarefa(event) {
  const target = event.target;
  if (target.className === 'completed') {
    target.className = '';
  } else {
    target.className = 'completed';
  }
}

function criarTarefa(text) {
  if (text !== '') {
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = text;
    textoTarefa.value = '';
    novaTarefa.addEventListener('dblclick', doubleClickTarefa);
    novaTarefa.addEventListener('click', clickTarefa);
    listaTarefas.appendChild(novaTarefa);
  }
}

function eventCriarTarefa() {
  criarTarefa(textoTarefa.value);
}

function moveCima() {
  const anterior = tarefaSelecionada.previousElementSibling;
  if (tarefaSelecionada && anterior) {
    listaTarefas.insertBefore(tarefaSelecionada, anterior);
  }
}

function moveBaixo() {
  const proxima = tarefaSelecionada.nextElementSibling;
  if (tarefaSelecionada && proxima) {
    listaTarefas.insertBefore(proxima, tarefaSelecionada);
  }
}

function remover() {
  if (tarefaSelecionada) {
    tarefaSelecionada.remove();
  }
}

function removerTudo() {
  const count = listaTarefas.childNodes.length;
  for (let i = 0; i < count; i += 1) {
    listaTarefas.removeChild(listaTarefas.lastChild);
  }
}

function removerCompleted() {
  const allCompleted = document.getElementsByClassName('completed');
  const count = allCompleted.length;
  for (let i = 0; i < count; i += 1) {
    allCompleted[0].remove();
  }
}

function salvar() {
  const lista = [];
  for (let i = 0; i < listaTarefas.childNodes.length; i += 1) {
    lista[i] = listaTarefas.childNodes[i].innerText;
  }
  localStorage.lista = JSON.stringify(lista);
}

window.onload = function () {
  textoTarefa = this.document.getElementById('texto-tarefa');
  listaTarefas = this.document.getElementById('lista-tarefas');
  if (localStorage.lista) {
    const lista = this.JSON.parse(localStorage.lista);
    for (let i = 0; i < lista.length; i += 1) {
      this.criarTarefa(lista[i]);
    }
  }
};
