const ol = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const button1 = document.querySelector('#criar-tarefa');
const button2 = document.querySelector('#apaga-tudo');
const button3 = document.querySelector('#remover-finalizados');

// Adicionando função de add tarefas no button1
function addTask() {
  if (input.value !== '') {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = '';
  }
}
button1.addEventListener('click', addTask);

// Função apaga tudo no button2
function clear() {
  while (ol.firstChild) {
    ol.firstChild.remove();
  }
}
button2.addEventListener('click', clear);

// Fundo cinza para as tarefas selecionadas
ol.addEventListener('click', function (e) {
  e.target.classList.toggle('gray');
});

// Adicionanda a classe para as tarifas completadas
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
