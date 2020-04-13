window.onload = function() {
  const tarefaInserida = document.getElementById('texto-tarefa');
  const botaoAdicionar = document.getElementById('criar-tarefa');
  const listaDeTarefas = document.getElementById('lista-tarefas');
  const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
  const botaoLimparLista = document.getElementById('apaga-tudo');

  
  // Requisito 5 
  function criarTarefa (event) {
  var item = document.createElement('li');
  var tarefa = document.createTextNode(tarefaInserida.value);
  item.appendChild(tarefa);
  listaDeTarefas.appendChild(item);
  tarefaInserida.value = "";
  }
  botaoAdicionar.addEventListener('click', criarTarefa);

  
}
