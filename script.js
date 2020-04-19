const criarTarefa = document.getElementById('criar-tarefa');
const textTarefa = document.getElementById('texto-tarefa');
const limpar = document.getElementById('apaga-tudo');
const remFinalizado = document.getElementById('remover-finalizados');
// const excluiSel = document.querySelector('remover-selecionado');
const listaDeTarefa = document.getElementById('lista-tarefas');

function limpaLista() {
  for (let i = 0; i < listaDeTarefa.childNodes.length; i += 0) {
    listaDeTarefa.removeChild(listaDeTarefa.childNodes[i]);
  }
}

function bgwhite() {
  event.target.classList.add('white');
}

function addTarefa() {
  const lista = document.createElement('li');
  lista.className = 'cursor';
  listaDeTarefa.appendChild(lista);
  lista.innerHTML = textTarefa.value;
  textTarefa.value = '';
  lista.addEventListener('click', bgwhite);
  lista.addEventListener('dblclick', function line() {
    if (lista.style.textDecoration === 'line-through') {
      lista.style.textDecoration = 'none';
      lista.classList.remove('completed');
    } else {
      lista.style.textDecoration = 'line-through';
      lista.classList.add('completed');
    }
  });
}

remFinalizado.addEventListener('click', () => {
  document.querySelectorAll('li').forEach(function (e) {
    if (e.classList.contains('completed')) {
      e.remove();
    }
  });
});

// excluiSel.addEventListener('click', () => {
//   document.querySelector('li').remove();
// });

// excluiSel.addEventListener('click', function () {
//   document.querySelector('.selected').remove();
// });

criarTarefa.addEventListener('click', addTarefa);
limpar.addEventListener('click', limpaLista);
