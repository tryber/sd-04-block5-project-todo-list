var btnAdicionaLI = document.getElementById("criar-tarefa");
var textAdiciona = document.getElementById("texto-tarefa");
var listaAdiciona = document.getElementById("lista-tarefas");

btnAdicionaLI.addEventListener('click', () => {
  if (textAdiciona.value) {
    var nodeLi = document.createElement("li");
    var nodeText = document.createTextNode(textAdiciona.value);
    nodeLi.appendChild(nodeText);
    nodeLi.setAttribute("id","lista-li");
    listaAdiciona.appendChild(nodeLi);
    textAdiciona.value = "";s
  }
});

listaAdiciona.addEventListener('click', (event) => {
    if (document.querySelector('.selected') !== null) {
        document.querySelector('.selected').classList.remove('selected');
      }
      event.target.classList.add('selected');
  });

  listaAdiciona.addEventListener('ondblclick', (event) => {
    if (document.querySelector('.selected') !== null) {
        document.querySelector('.selected').classList.remove('selected');
      }
      event.target.classList.add('selected');
  });


listaAdiciona.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });