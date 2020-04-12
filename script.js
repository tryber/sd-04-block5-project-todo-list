const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const li = document.createElement('li');

if (typeof Storage !== 'undefined') {
    listaTarefas.innerHTML = localStorage.listaTarefas;
}

criarTarefa.addEventListener('click', () => {
  li.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(li);
  textoTarefa.value = null;
});
