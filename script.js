const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const caixaDeTexto = document.getElementById('texto-tarefa');

function addItem () {
  const li = document.createElement('li');
  li.innerHTML = caixaDeTexto.value;
  lista.appendChild(li);
  caixaDeTexto.value = null; 
}

criarTarefa.addEventListener('click', addItem);
