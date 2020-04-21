const lista = document.getElementById('lista-tarefas');
const criar = document.getElementById('criar-tarefa');
document.getElementById('criar-tarefa').style.cursor = 'pointer';
document.getElementById('remover-selecionado').style.cursor = 'pointer';
document.getElementById('remover-finalizados').style.cursor = 'pointer';
document.getElementById('apaga-tudo').style.cursor = 'pointer';
document.getElementById('mover-cima').style.cursor = 'pointer';
document.getElementById('mover-baixo').style.cursor = 'pointer';
document.getElementById('salvar-tarefas').style.cursor = 'pointer';
document.getElementById('lista-tarefas').style.cursor = 'pointer';



criar.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa');
  const item = document.createElement('li');
  item.innerHTML = tarefa.value;
  lista.appendChild(item);
  tarefa.value='';
});

