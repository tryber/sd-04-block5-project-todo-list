window.onload = function() {
  const tarefaInserida = document.getElementById('texto-tarefa');
  const botaoAdicionar = document.getElementById('criar-tarefa');
  const listaDeTarefas = document.getElementById('lista-tarefas');
  const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
  const botaoLimparLista = document.getElementById('apaga-tudo');
  //
  
  function criarTarefa (event) {
  const item = document.createElement('li');
  const tarefa = document.createTextNode(tarefaInserida.value);
  item.appendChild(tarefa);
  listaDeTarefas.appendChild(item);
  tarefaInserida.value = "";
  }
  botaoAdicionar.addEventListener('click', criarTarefa);
  //
  
  function alteraLiBackground (event) {
  console.log(event.target);
  event.target.classList.add('item-cinza');
  }
  listaDeTarefas.addEventListener('click', alteraLiBackground);
  //

  function itemCompleto (event) {
  event.target.classList.remove('item-cinza');
  event.target.classList.add('completed');
  }
  listaDeTarefas.addEventListener('dblclick', itemCompleto);
  //

  function apagaFinalizadas (event) {
  document.querySelector('.completed').innerHTML = "";
  }
  botaoRemoverFinalizados.addEventListener ('click', apagaFinalizadas);
  //
  
  function apagaLista (event) {
  listaDeTarefas.innerHTML = "";
  }
  botaoLimparLista.addEventListener('click', apagaLista);
  //

}
