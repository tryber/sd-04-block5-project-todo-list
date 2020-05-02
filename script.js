const can = document.getElementById('lista-tarefas');
const linhas = can.childNodes;
window.onload = restauraLista();

function incluirItem() { // https://bit.ly/3cZqVpE
  const tarefaTexto = document.getElementById('texto-tarefa');
  const li = document.createElement('li');
  li.innerHTML = tarefaTexto.value;
  can.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
}

function apagarLista() {
  // const linhas = can.childNodes;
  for (let i = linhas.length - 1; i >= 0; i -= 1) {
    if (linhas[i].tagName === 'LI') {
      can.removeChild(linhas[i]);
      localStorage.removeItem(`Tarefa${i}`);
    }
  }
}

function excluirItem() {
  // const linhas = can.childNodes;
  for (let i = linhas.length - 1; i >= 0; i -= 1) {
    if (linhas[i].className === 'completed') {
      can.removeChild(linhas[i]);
    }
  }
}

function salvarTarefas() {
  for (let i = 1; i < linhas.length; i += 1) {
    localStorage.setItem(`Tarefa${i}`, linhas[i].innerHTML);
  }
}

function restauraLista() {
  for (let i = 1; i <= localStorage.length; i += 1) {
    const li = document.createElement('li');
    if (`Tarefa${i}`) {
      li.innerHTML = localStorage.getItem(`Tarefa${i}`);
      can.appendChild(li);
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
