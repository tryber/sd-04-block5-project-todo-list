// Lendo as entradas
const tarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const item = [];
let count = 0;

// Funçoes
function tarefaList() {
  const li = document.createElement('li');
  li.innerHTML = tarefa.value;
  li.className = 'tarefa';
  lista.appendChild(li);
  item[count] = document.getElementsByClassName('tarefa')[count];
  tarefa.value = '';
  count += 1;
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

// Event Listener
criarTarefa.addEventListener('click', tarefaList);

// Elementos da Lista

  document.body.addEventListener('click', function () {
    marcaUm(event);
    });
  document.body.addEventListener('dblclick', function () {
    marcaDone(event);
  });
