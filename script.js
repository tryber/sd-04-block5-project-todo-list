let btnAdicionaLI = document.getElementById("criar-tarefa");
let textAdiciona = document.getElementById("texto-tarefa");
let listaAdiciona = document.getElementById("lista-tarefas");


btnAdicionaLI.addEventListener('click', () => {
  if (textAdiciona.value) {
    let nodeLi = document.createElement("li");
    let nodeText = document.createTextNode(textAdiciona.value);
    nodeLi.appendChild(nodeText);
    listaAdiciona.appendChild(nodeLi);
    textAdiciona.value = "";
  }
});
