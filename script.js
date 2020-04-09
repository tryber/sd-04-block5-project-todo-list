function incluirItem() { //https://codare.aurelio.net/2006/12/20/javascript-construindo-listas-dinamicamente/
  let tarefaTexto = document.getElementById("texto-tarefa");
  let can = document.getElementById("lista-tarefas");
  let li = document.createElement("li");
  li.innerHTML = tarefaTexto.value.toUpperCase();
  can.appendChild(li);
  document.getElementById("texto-tarefa").value = '';
}

function apagarLista() {
  let can = document.getElementById("lista-tarefas");
  let linhas = can.childNodes;
  for (let i = linhas.length - 1; i >= 0; i--) {
    if (linhas[i].tagName == 'LI') {
      can.removeChild(linhas[i]);
    }
  }
}
