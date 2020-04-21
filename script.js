const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const caixaDeTexto = document.getElementById('texto-tarefa');

function addItem() {
  const li = document.createElement('li');
  li.innerHTML = caixaDeTexto.value;
  lista.appendChild(li);
  caixaDeTexto.value = null;
}
function alterarFundo(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function riscado(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  }
  else {
    event.target.classList.add('completed');
  }
}

criarTarefa.addEventListener('click', addItem);
lista.addEventListener('click', alterarFundo);
lista.addEventListener('dblclick', riscado);
