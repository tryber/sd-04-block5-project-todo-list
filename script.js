window.onload = function () {
  const tarefaInserida = document.getElementById('texto-tarefa');
  const botaoAdicionar = document.getElementById('criar-tarefa');
  const listaDeTarefas = document.getElementById('lista-tarefas');
  const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
  const botaoLimparLista = document.getElementById('apaga-tudo');
  function criarTarefa() {
    const item = document.createElement('li');
    const tarefa = document.createTextNode(tarefaInserida.value);
    item.appendChild(tarefa);
    listaDeTarefas.appendChild(item);
    tarefaInserida.value = '';
  }
  botaoAdicionar.addEventListener('click', criarTarefa);
  function alteraLiBackground(event) {
    event.target.classList.add('item-cinza');
  }
  listaDeTarefas.addEventListener('click', alteraLiBackground);
  function itemCompleto(event) {
    event.target.classList.remove('item-cinza');
    event.target.classList.toggle('completed');
  }
  listaDeTarefas.addEventListener('dblclick', itemCompleto);
  function apagaFinalizadas() {
    var itens = document.querySelectorAll('li');
    for (let i = 0; i < itens.length; i++) {
      if(itens[i].className === 'completed') {
        itens[i].innerHTML = '';
      }
    }
  }
  botaoRemoverFinalizados.addEventListener('click', apagaFinalizadas);
  function apagaLista() {
    listaDeTarefas.innerHTML = '';
  }
  botaoLimparLista.addEventListener('click', apagaLista);
};
