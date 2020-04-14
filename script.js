let textoTarefa;
let listaTarefas;
let tarefaSelecionada;

function clickTarefa(target) {
  if (target !== tarefaSelecionada) {
    if (tarefaSelecionada) {
      tarefaSelecionada.classList.remove('selected');
    }
    target.classList.add('selected');
    tarefaSelecionada = target;
  }
}

function doubleClickTarefa(event) {
  const target = event.target;
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

function criarTarefa(text, className) {
  if (text !== '') {
    const novaTarefa = document.createElement('li');
    const novoText = document.createTextNode(text);
    novaTarefa.appendChild(novoText);
    if (className) {
      novaTarefa.className = className;
    }
    listaTarefas.appendChild(novaTarefa);
  }
}

function eventCriarTarefa() {
  criarTarefa(textoTarefa.value);
  textoTarefa.value = '';
}

function loadTarefas(tarefa) {
  for (let i = 0; i < tarefa.text.length; i += 1) {
    criarTarefa(tarefa.text[i], tarefa.class[i]);
  }
}

function changePos(element1, element2) {
  const text1 = element1.innerText;
  const class1 = element1.className;
  element1.innerHTML = element2.innerText;
  element1.className = element2.className;
  element2.innerHTML = text1;
  element2.className = class1;
}

function moveCima() {
  if (tarefaSelecionada) {
    const anterior = tarefaSelecionada.previousSibling;
    if (anterior) {
      changePos(tarefaSelecionada, anterior);
      clickTarefa(anterior);
    }
  }
}

function moveBaixo() {
  if (tarefaSelecionada) {
    const proxima = tarefaSelecionada.nextSibling;
    if (proxima) {
      changePos(tarefaSelecionada, proxima);
      clickTarefa(proxima);
    }
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
  const lista = {
    text: [],
    class: [],
  };
  for (let i = 0; i < listaTarefas.childNodes.length; i += 1) {
    lista.text[i] = listaTarefas.childNodes[i].innerText;
    lista.class[i] = listaTarefas.childNodes[i].className;
  }
  localStorage.lista = JSON.stringify(lista);
}

window.onload = function () {
  textoTarefa = document.getElementById('texto-tarefa');
  listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.addEventListener('dblclick', doubleClickTarefa);
  listaTarefas.addEventListener('click', function (event) {
    clickTarefa(event.target);
  });
  if (localStorage.lista) {
    loadTarefas(JSON.parse(localStorage.lista));
    tarefaSelecionada = document.getElementsByClassName('selected')[0];
  }
};
