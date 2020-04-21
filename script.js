window.onload = function () {
  const tarefaInserida = document.getElementById('texto-tarefa');
  const botaoAdicionar = document.getElementById('criar-tarefa');
  const listaDeTarefas = document.getElementById('lista-tarefas');
  const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
  const botaoLimparLista = document.getElementById('apaga-tudo');
  const botaoRemoverSelecionados = document.getElementById('remover-selecionado');
  const botaoSalvarLista = document.getElementById('salvar-tarefas');

  function criarTarefa() {
    const item = document.createElement('li');
    const tarefa = document.createTextNode(tarefaInserida.value);
    item.appendChild(tarefa);
    listaDeTarefas.appendChild(item);
    tarefaInserida.value = '';
  }
  botaoAdicionar.addEventListener('click', criarTarefa);
  function selecionaItem(event) {
    event.target.classList.add('selected');
  }
  listaDeTarefas.addEventListener('click', selecionaItem);
  function itemCompleto(event) {
    event.target.classList.remove('selected');
    event.target.classList.toggle('completed');
  }
  listaDeTarefas.addEventListener('dblclick', itemCompleto);
  function apagaFinalizadas() {
    const itens = document.querySelectorAll('li');
    for (let i = 0; i < itens.length; i += 1) {
      if (itens[i].className === 'completed') {
        itens[i].remove();
      }
    }
  }
  botaoRemoverFinalizados.addEventListener('click', apagaFinalizadas);
  function apagaLista() {
    listaDeTarefas.innerHTML = '';
  }
  botaoLimparLista.addEventListener('click', apagaLista);

  function removeSelecionado() {
    const itens = document.querySelectorAll('li');
    for (let i = 0; i < itens.length; i += 1) {
      if (itens[i].className === 'selected') {
        itens[i].remove();
      }
    }
  }
  botaoRemoverSelecionados.addEventListener('click', removeSelecionado);
  function salvarLista() {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('Tarefas', listaDeTarefas.innerHTML);
      console.log(localStorage);
    }
  }
  botaoSalvarLista.addEventListener('click', salvarLista);

  // function recuperaLista() {
  //   const tarefas = localStorage.getItem('Tarefas');
  //   listaDeTarefas.innerHTML = tarefas;
  //   const itens = document.querySelectorAll('li');
  //   for (let i = 0; i < itens.length; i += 1) {

  //   }
  // }
  // window.addEventListener('load', recuperaLista);
};

