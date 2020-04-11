// Lendo as entradas
const tarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
let item = [];
let count = 0;

// Funçoes
function tarefaList() {
  const li = document.createElement('li');
  li.innerHTML = tarefa.value;
  li.className = 'tarefa';
  lista.appendChild(li);
  tarefa.value = '';
  count += 1;
}

function marcaUm(i) {
  item[i].style.backgroundColor = rgb(128, 128, 128);
}

function marcaDone(i) {
  if (item[i].className == 'completed') {
    item[i].className = "tarefa";
  } else {
    item[i].className = 'tarefa completed';
  }
}

// Event Listener
criarTarefa.addEventListener('click', tarefaList);

// Elementos da Lista
for (let i = 1; i <= count; i += 1) {
  item[i] = document.getElementsByClassName('tarefa')[i];
  item[i].addEventListener('click', function() {
    marcaUm(i); 
  });
  item[i].addEventListener('dblclick', function() {
    marcaDone(i);
  });
}
