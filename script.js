let adicioanar = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let item = document.getElementById('texto-tarefa');
adicionar.addEventListener( 'click' ,  function() {
  let conteudo = document.createElement('LI');
  conteudo.innerHTML = item.value;
  conteudo.className = 'cursor';
  item.value ='';
  lista.appendChild(conteudo);
});