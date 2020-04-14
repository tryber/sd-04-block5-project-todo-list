let button = document.getElementById('criar-tarefa');
let ltarefa = document.getElementById('lista-tarefas');
let txt = document.getElementById('texto-tarefa');
button.addEventListener( 'click' ,  function() {
  let criar = document.createElement('LI');
  criar.innerHTML = txt.value;
  criar.className = 'cursor';
  txt.value ='';
  ltarefa.appendChild(criar);
});