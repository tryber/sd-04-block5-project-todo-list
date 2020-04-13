const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefas = document.getElementById('criar-tarefa');
const textoTarefas = document.getElementById('texto-tarefa');
const apagarTudo = document.getElementById('apaga-tudo');
const apagarLista = document.getElementById('remover-finalizados');

if (typeof Storage !== 'undefined') {
  listaTarefas.innerHTML = localStorage.list;
}

criarTarefas.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = textoTarefas.value;
  listaTarefas.appendChild(li);
  textoTarefas.value = null;
})

listaTarefas.addEventListener('click', (selecionado) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  selecionado.target.style.backgroundColor = 'rgb(128,128,128)';
  selecionado.target.classList.add('selected');
})

listaTarefas.addEventListener('dblclick', (selecionado) => {
  if (selecionado.target.classList.contains('completed')) {
    selecionado.target.classList.remove('completed');
  } else {
    selecionado.target.classList.add('completed');
  }
})

apagarTudo.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    listaTarefas.removeChild(li[i]);
  }
})

apagarLista.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].classList.contains('completed')) {
      listaTarefas.removeChild(li[i]);
    }
  }
})
