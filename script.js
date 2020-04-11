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
  var elements = document.querySelectorAll('li'); 
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].target.classList.contains('completed')) {
      lista.removeChild(elements[i]);
    }
  }
}

// Event Listener
criarTarefa.addEventListener('click', tarefaList);
removeAll.addEventListener('click', Allremove);

// Elementos da Lista

lista.addEventListener('click', function () {
  marcaUm(event);
  });
lista.addEventListener('dblclick', function () {
  marcaDone(event);
});
