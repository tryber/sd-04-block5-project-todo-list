const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const li = document.createElement('li');

if (typeof Storage !== ' ') {
    listaTarefas.innerHTML = localStorage.listaTarefas;
}

criarTarefa.addEventListener('click', () => {
  tarefa.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(tarefa);
  textoTarefa.value = null;
});

