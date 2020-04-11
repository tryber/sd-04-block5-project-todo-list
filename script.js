// Lendo as entradas
const tarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const removeAll = document.getElementById('apaga-tudo');
const removeDone = document.getElementById('apaga-finalizados');

// Funçoes
function tarefaList() {
  const li = document.createElement('li');
  li.innerHTML = tarefa.value;
  li.className = 'tarefa';
  lista.appendChild(li);
  tarefa.value = '';
}

function marcaUm(i) {
  if (event.target.className == 'tarefa'){
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function marcaDone(i) {
  if (event.target.className === 'tarefa completed') {
    event.target.className = 'tarefa';
  } else {
    event.target.className = 'tarefa completed';
  }
}

function Allremove() {
  while (lista.hasChildNodes()) {  
    lista.removeChild(lista.firstChild);
  }
}

function DoneRemove() {
  document.querySelectorAll('.completed').forEach(function(a){
    a.remove()
    })
}

// Event Listener
criarTarefa.addEventListener('click', tarefaList);
removeAll.addEventListener('click', Allremove);

// Elementos da Lista

document.body.addEventListener('click', function () {
  marcaUm(event);
  });
document.body.addEventListener('dblclick', function () {
  marcaDone(event);
});
