const ol = document.querySelector('#lista-tarefas');
// Caso tenha tarefas salvas no Local Store, resgatar como <li> da <ol>:
if (typeof Storage !== 'undefined') {
  ol.innerHTML = localStorage.list;
}

const input = document.querySelector('#texto-tarefa');
const button1 = document.querySelector('#criar-tarefa');
const button2 = document.querySelector('#apaga-tudo');
const button3 = document.querySelector('#remover-finalizados');
const button4 = document.querySelector('#salvar-tarefas');
const button5 = document.querySelector('#remover-selecionado');
const button6 = document.querySelector('#mover-cima');
const button7 = document.querySelector('#mover-baixo');

// Função mover elemento para cima
button6.addEventListener('click', function () {
  const tasks = document.querySelector('.selected');
  const up = tasks.previousSibling;
  ol.insertBefore(tasks, up);
});

// Função mover elemento para baixo:
button7.addEventListener('click', function () {
  const up = document.querySelector('.selected');
  const tasks = up.nextSibling;
  ol.insertBefore(tasks, up);
});

// Adicionando função de add tarefas no button1:
function addTask() {
  if (input.value !== '') {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = '';
  }
}
button1.addEventListener('click', addTask);

// Função para apagar tudo no button2:
function clear() {
  localStorage.list = '';
  while (ol.firstChild) {
    ol.firstChild.remove();
  }
}
button2.addEventListener('click', clear);

// Funcao para adicionar classes pelo clique, definiçao do bsckground color via css:
ol.addEventListener('click', function (e) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  e.target.classList.add('selected');
});

// Adicionanda a classe para as tarefas completadas e estilo definido via CSS:
ol.addEventListener('dblclick', function (e) {
  e.target.classList.toggle('completed');
});

// Função para remover somentes os itens finalizados da lista:
button3.addEventListener('click', function () {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('completed')) {
      ol.removeChild(tasks[i]);
    }
  }
});

// Função que salva os itens no localStore:
button4.addEventListener('click', function () {
  localStorage.list = ol.innerHTML;
});

// Função para remover item selecionado:
button5.addEventListener('click', function () {
  const tasks = document.querySelectorAll('.selected');
  for (let i = 0; i < tasks.length; i += 1) {
    ol.removeChild(tasks[i]);
  }
});
