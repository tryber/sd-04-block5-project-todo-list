const can = document.getElementById('lista-tarefas');

function incluirItem() { // https://codare.aurelio.net/2006/12/20/javascript-construindo-listas-dinamicamente/
  const tarefaTexto = document.getElementById('texto-tarefa');
  const li = document.createElement('li');
  // li.className = 'cible';
  // li.innerHTML = tarefaTexto.value.toUpperCase();
  li.innerHTML = tarefaTexto.value;
  can.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
}

function apagarLista() {
  const linhas = can.childNodes;
  for (let i = linhas.length - 1; i >= 0; i -= 1) {
    if (linhas[i].tagName === 'LI') {
      can.removeChild(linhas[i]);
    }
  }
}

function excluirItem() {
  const linhas = can.childNodes;
  for (let i = linhas.length - 1; i >= 0; i -= 1) {
    if (linhas[i].className === 'completed') {
      can.removeChild(linhas[i]);
    }
  }
}

function changeBkg(e) {
  e.target.classList.toggle('selected');
}
can.addEventListener('click', changeBkg);

function completed(e) {
  e.target.classList.toggle('completed');
}
can.addEventListener('dblclick', completed);
