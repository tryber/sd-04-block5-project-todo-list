let ol, list, tarefa, textValue, listOl, btnTarefa;

ol = document.querySelector("ol")
btnTarefa = document.getElementById("criar-tarefa");
inpText = document.getElementById("texto-tarefa");
listOl = document.getElementById("lista-tarefas");
textValue = document.createTextNode(inpText.value);
tarefa = document.createElement("li");

btnTarefa.addEventListener("click", function newElement() {
  tarefa.className = "task";
  ol.appendChild(tarefa);
  tarefa.innerHTML = inpText.value;
  inpText.value = "";
});

list.addEventListener("click", function backgroundList() {
  list.style.backgroundColor = "rgb(128,128,128)";
});
