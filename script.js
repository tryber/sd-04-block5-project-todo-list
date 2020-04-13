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
  textoTarefas.value;
});

listaTarefas.addEventListener('click', (selecionado) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  selecionado.target.style.backgroundColor = 'rgb(128,128,128)';
  selecionado.target.classList.add('selected');
});