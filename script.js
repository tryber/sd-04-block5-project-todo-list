const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefas = document.getElementById('criar-tarefa');
const textoTarefas = document.getElementById('texto-tarefa');

if (typeof Storage !== 'undefined') {
  listaTarefas.innerHTML = localStorage.list;
}

criarTarefas.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = textoTarefas.value;
  listaTarefas.appendChild(li);
  textoTarefas.value = null;
});
