let textoTarefa;
let listaTarefas;
let tarefaSelecionada;

function criarTarefa() {
  if (textoTarefa.value !== '') {
    let novaTarefa = document.createElement('li');
    novaTarefa.innerText = textoTarefa.value;
    textoTarefa.value = '';
    novaTarefa.addEventListener('dblclick', doubleClickTarefa);
    novaTarefa.addEventListener('click', clickTarefa);
    listaTarefas.appendChild(novaTarefa);
  }
}

function clickTarefa(event) {
  let target = event.target;
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
  let target = event.target;
  if (target.className === 'completed') {
    target.className = '';
  } else {
    target.className = 'completed';
  }
}

function moveCima() {
  let anterior = tarefaSelecionada.previousElementSibling;
  if (tarefaSelecionada && anterior) {
    listaTarefas.insertBefore(tarefaSelecionada, anterior);
  }
}

function moveBaixo() {
  let proxima = tarefaSelecionada.nextElementSibling
  if (tarefaSelecionada && proxima) {
    listaTarefas.insertBefore(proxima, tarefaSelecionada);
  }
}

function remover() {
  if (tarefaSelecionada)
    tarefaSelecionada.remove();
}

function removerTudo() {
  let count = listaTarefas.childNodes.length;
  for (let i = 0; i < count; i += 1) {
    listaTarefas.removeChild(listaTarefas.lastChild);
  }
}

function removerCompleted() {
  let allCompleted = document.getElementsByClassName("completed");
  let count = allCompleted.length;
  for (let i = 0; i < count; i += 1) {
    allCompleted[0].remove();
  }
}

function salvar() {
  localStorage.lista = JSON.stringify(listaTarefas.innerHTML);
}

window.onload = function () {
  textoTarefa = this.document.getElementById('texto-tarefa');
  listaTarefas = this.document.getElementById('lista-tarefas');
  if (localStorage.lista) {
    listaTarefas.innerHTML = this.JSON.parse(localStorage.lista);
  }
}
