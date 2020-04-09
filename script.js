let textoTarefa;
let listaTarefas;
let tarefaSelecionada;

function clickTarefa(target) {
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

function criarTarefa(text, className) {
  if (text !== '') {
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = text;
    textoTarefa.value = '';
    if (className) {
      novaTarefa.className = className;
    }
    novaTarefa.addEventListener('dblclick', doubleClickTarefa);
    novaTarefa.addEventListener('click', function (event) {
      clickTarefa(event.target);
    });
    listaTarefas.appendChild(novaTarefa);
  }
}

function eventCriarTarefa() {
  criarTarefa(textoTarefa.value);
}

function loadTarefas(tarefa) {
  for (let i = 0; i < tarefa.text.length; i += 1) {
    criarTarefa(tarefa.text[i], tarefa.class[i]);
  }
}

function moveCima() {
  if (tarefaSelecionada) {
    const anterior = tarefaSelecionada.previousElementSibling;
    if (anterior) {
      changePos(tarefaSelecionada, anterior);
      clickTarefa(anterior);
    } else {
      changePos(tarefaSelecionada, listaTarefas.lastChild);
      clickTarefa(listaTarefas.lastChild);
    }
  }
}

function moveBaixo() {
  if (tarefaSelecionada) {
    const proxima = tarefaSelecionada.nextElementSibling;
    if (tarefaSelecionada && proxima) {
      changePos(tarefaSelecionada, proxima);
      clickTarefa(proxima);
    } else {
      changePos(tarefaSelecionada, listaTarefas.firstChild);
      clickTarefa(listaTarefas.firstChild);
    }
  }
}

function changePos(element1, element2) {
  const text1 = element1.innerText;
  const class1 = element1.className;
  element1.innerText = element2.innerText;
  element1.className = element2.className;
  element2.innerText = text1;
  element2.className = class1;
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
  if (localStorage.lista) {
    loadTarefas(JSON.parse(localStorage.lista));
  }
};
