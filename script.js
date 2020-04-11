// Lendo as entradas
let tarefa = document.getElementById('texto-tarefa');
let criarTarefa = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');

// Funçoes
function tarefaList () {
  let li = document.createElement('li');
  li.innerHTML = tarefa.value;
  li.className = 'tarefa';
  lista.appendChild(li);
}

// Event Listener
criarTarefa.addEventListener('click', tarefaList);
