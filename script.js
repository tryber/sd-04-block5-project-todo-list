const textoTarefa = document.getElementById('texto-tarefa'); // Manipula a caixa de texto.
const btnAdiciona = document.getElementById('criar-tarefa'); // Manipula o botão que adiciona na lista.
const btnLimpa = document.getElementById('apaga-tudo'); // Manipula o botão que apaga a lista.
const btnLimpaConcluidas = document.getElementById('remover-finalizados'); // Manipula o botão que limpa itens concluídos.
const btnSalvaTarefas = document.getElementById('salvar-tarefas');
const lista = document.getElementById('lista-tarefas'); // Manipula a lista de tarefas.

function storeExists() { // Verifica so o navegador tem suporte a Storage.
  return typeof Storage !== 'undefined';
}

function salvaListaNoStorage() { // Salva os itens da lista no LocalStorage.
  if (storeExists()) {
    const itens = lista.childNodes;
    for (let i = 0; i < itens.length; i += 1) {
      localStorage.setItem(`item${i}`, `${itens[i].innerText}`);
    }
  } else {
    alert('Seu navegador não tem suporte a Local Storage!');
  }
}

function selecionaItem() { // Altera o fundo do item clicado.
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      itens[i].style.backgroundColor = 'white';
    }
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function marcaItem() { // Risca o item que for clicado duas vezes, e desfaz o risco.
  const indentifier = event.target.style.textDecoration;
  if (indentifier === 'line-through') {
    event.target.style.textDecoration = 'none';
    event.target.classList.remove('completed');
  } else {
    event.target.style.textDecoration = 'line-through';
    event.target.className = 'completed';
  }
}

function apagaLista(number) { // Apaga todos os item da lista.
  for (let n = 0; n < number; n += 1) {
    lista.removeChild(lista.childNodes[0]);
  }
}

function craiItem(value) {
  const item = document.createElement('li');
  if (!value == null) {
    item.innerHTML = localStorage.getItem(value);
    item.addEventListener('click', selecionaItem);
    item.addEventListener('dblclick', marcaItem);
    lista.appendChild(item);
    textoTarefa.value = '';
  } else {
    item.innerHTML = textoTarefa.value;
    item.addEventListener('click', selecionaItem);
    item.addEventListener('dblclick', marcaItem);
    lista.appendChild(item);
    textoTarefa.value = '';
  }
}

function eventBtnAdiciona() { // Evento para o botão que adiciona itens.
  btnAdiciona.addEventListener('click', function () {
    craiItem();
  });
}

function eventBtnLimpa() { // Evento para o botão que limpa a lista.
  btnLimpa.addEventListener('click', function () {
    const comprimentoLista = lista.childNodes.length;
    apagaLista(comprimentoLista);
  });
}

function eventBtnLimpaConcluidas() {
  btnLimpaConcluidas.addEventListener('click', function () {
    const concluidas = document.querySelectorAll('.completed');
    for (let c = 0; c < concluidas.length; c += 1) {
      lista.removeChild(concluidas[c]);
    }
  });
}

function eventBtnSalvarTarefas() {
  btnSalvaTarefas.addEventListener('click', function () {
    salvaListaNoStorage();
  });
}

window.onload = function () {
  eventBtnAdiciona();
  eventBtnLimpa();
  eventBtnLimpaConcluidas();
  eventBtnSalvarTarefas();
};
