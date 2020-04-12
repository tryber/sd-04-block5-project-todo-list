const buttonCriarTarefa = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
function criarTarefa(tarefa, status) {
  const li = document.createElement('li');
  li.innerHTML = tarefa;
  if (status != undefined) li.classList.add(status);
  ol.appendChild(li);
}

buttonCriarTarefa.addEventListener('click', function () {
  const inputTarefa = document.getElementById('texto-tarefa');
  criarTarefa(inputTarefa.value);
  inputTarefa.value = '';
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

function removeElements(toBeRemoved) {
  for (let i = toBeRemoved.length - 1; i >= 0; i -= 1) {
    toBeRemoved[i].remove();
  }
}

const buttonApagaTudo = document.getElementById('apaga-tudo');
buttonApagaTudo.addEventListener('click', function () {
  removeElements(document.getElementsByTagName('li'));
});

const removerFinalizados = document.getElementById('remover-finalizados');
removerFinalizados.addEventListener('click', function () {
  removeElements(document.querySelectorAll('.completed'));
});

function saveList(list) {
  for (let i = 0; i < list.length; i += 1) {
    localStorage.setItem(i, list[i].innerHTML + '|' + list[i].classList[1]);
  }
}

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', function () {
  saveList(document.getElementsByTagName('li'));
});

function loadList() {
  let index = 0;
  while (localStorage.getItem(index) !== null) {
    const savedValue = localStorage.getItem(index);
    const tarefaStatus = savedValue.split('|');
    criarTarefa(tarefaStatus[0], tarefaStatus[1]);
    index += 1;
  }
}

loadList();
