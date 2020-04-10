const buttonCriarTarefa = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
function criarTarefa() {
  const li = document.createElement('li');
  const inputTarefa = document.getElementById('texto-tarefa');
  li.innerHTML = inputTarefa.value;
  ol.appendChild(li);
  inputTarefa.value = '';
}
buttonCriarTarefa.addEventListener('click', function () {
  criarTarefa();
});

ol.addEventListener('click', function (event) {
  event.target.classList.add('cinza');
});

function verificaCompleted(event) {
  if (event.target.classList[1] === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
ol.addEventListener('dblclick', function (event) {
  verificaCompleted(event);
});

function removeList() {
  const li = document.getElementsByTagName('li');
  for (let i = li.length -1; i >= 0; i -= 1) {
    li[i].remove();
  }
}
const buttonApagaTudo = document.getElementById('apaga-tudo');
buttonApagaTudo.addEventListener('click', function () {
  removeList();
});
