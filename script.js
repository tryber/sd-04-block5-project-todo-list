let btnAdicionaLI = document.getElementById("criar-tarefa");
let textAdiciona = document.getElementById("texto-tarefa");
let listaAdiciona = document.getElementById("lista-tarefas");
let listaClickColor = document.getElementsByClassName("lista-li");



btnAdicionaLI.addEventListener('click', () => {
  if (textAdiciona.value) {
    var nodeLi = document.createElement("li");
    let nodeText = document.createTextNode(textAdiciona.value);
    nodeLi.appendChild(nodeText);
    nodeLi.classList.add("lista-li");
    listaAdiciona.appendChild(nodeLi);
    textAdiciona.value = "";
  }
});

listaClickColor.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.lista-li');
    listaClickColor.innerText = listaClickColor[1].innerText;
    listaClickColor.style.color = "red";
  });