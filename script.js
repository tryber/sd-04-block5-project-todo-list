const botaoCriar = document.getElementById('criar-tarefa');
const botaoLimpar = document.getElementById('apaga-tudo');
const botaoLimparFin = document.getElementById('remover-finalizados');
const botaoSalvar = document.getElementById('salvar-tarefas');
const botaoRemover = document.getElementById('remover-selecionado');
const inputTarefa = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');

// criando itens e adicionando-os à lista através do input recebido:
function criarTarefa() {
  const item = document.createElement('li');
  item.innerHTML = inputTarefa.value;
  lista.appendChild(item);
  document.getElementById('texto-tarefa').value = '';
}
botaoCriar.addEventListener('click', criarTarefa);

// limpando a lista de tarefas e o localStorage:
function limparTarefas() {
  while (lista.firstChild) {
    lista.firstChild.remove();
  }
  localStorage.clear('items');
}
botaoLimpar.addEventListener('click', limparTarefas);

// removendo as tarefas concuidas da lista:
function limparTarefasConcluidas() {
  const tarefasCompletadas = document.querySelectorAll('.completed');
  for (let i = 0; i < tarefasCompletadas.length; i += 1) {
    document.getElementById('lista-tarefas').removeChild(tarefasCompletadas[i]);
  }
}
botaoLimparFin.addEventListener('click', limparTarefasConcluidas);

// adicionando cor ao item clicado:
lista.addEventListener('click', function (event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  if (event.target && event.target.nodeName === 'LI') {
    event.target.classList.add('selected');
  }
});

// riscando os itens concluidos da lista:
lista.addEventListener('dblclick', function (event) {
  if (event.target && event.target.nodeName === 'LI') {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else event.target.classList.add('completed');
  }
});

// salvando os itens ATUAIS da lista no localStorage:
function salvarLista() {
  localStorage.clear('items');
  const itemsArray = [];
  const classesArray = [];
  const listaItens = document.querySelectorAll('li');

  for (let j = 0; j < listaItens.length; j += 1) {
    itemsArray.push(listaItens[j].textContent);
    classesArray.push(listaItens[j].classList.value);
  }
  localStorage.setItem('items', JSON.stringify(itemsArray));
  localStorage.setItem('classes', JSON.stringify(classesArray));
}
botaoSalvar.addEventListener('click', salvarLista);

// recapitulando os itens salvos e adicionando-os novamente na lista:
function criadorLista(text, classes) {
  const item = document.createElement('li');
  item.textContent = text;
  lista.appendChild(item);
  if (classes !== '') item.className += classes;
}
const data = JSON.parse(localStorage.getItem('items'));
const classes = JSON.parse(localStorage.getItem('classes'));
if (data != null) {
  for (let item = 0; item < data.length; item += 1) {
    criadorLista(data[item], classes[item]);
  }
}

// movendo o item selecionado para cima:
function moverCima() {
  const selectedItem = document.querySelector('.selected');
  const upItem = selectedItem.previousSibling;
  if (upItem) {
    lista.insertBefore(selectedItem, upItem);
  }
}
document.getElementById('mover-cima').addEventListener('click', moverCima);

// movendo o item selecionado para baixo:
function moverBaixo() {
  const selectedItem = document.querySelector('.selected');
  const downItem = selectedItem.nextSibling;
  if (downItem) {
    lista.insertBefore(downItem, selectedItem);
  }
}
document.getElementById('mover-baixo').addEventListener('click', moverBaixo);

// removendo as tarefas concuidas da lista:
function limparItemSelecionado() {
  const itemSelecionado = document.querySelector('.selected');
  document.getElementById('lista-tarefas').removeChild(itemSelecionado);
}
botaoRemover.addEventListener('click', limparItemSelecionado);


  //  --> other ways to add cursor events <--
  //  document.addEventListener('mouseover', function (event) {
  //    if (event.target && event.target.nodeName == 'BUTTON') {
  //      event.target.style.cursor = 'pointer';
  //    }
  //  });

  //  document.getElementById('lista-tarefas').addEventListener('mouseover', function (event) {
  //    if (event.target && event.target.nodeName == 'LI') {
  //      event.target.style.cursor = 'pointer';
  //    }
  //  });
