// Lendo as entradas
const tarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

// Funçoes
function tarefaList() {
  const li = document.createElement('li');
  li.innerHTML = tarefa.value;
  li.className = 'tarefa';
  lista.appendChild(li);
  tarefa.value = '';
}

// Event Listener
criarTarefa.addEventListener('click', tarefaList);
