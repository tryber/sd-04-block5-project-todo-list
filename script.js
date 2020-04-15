window.onload = function () {
  let taskList = document.getElementById("lista-tarefas");
  let taskText = document.getElementById("texto-tarefa");
  let createButton = document.getElementById("criar-tarefa");
  let tasks = document.querySelectorAll('li#lista-tarefas')

  createButton.addEventListener("click", function () {
    if (taskText.value) {
      const tarefa = document.createElement("li");
      tarefa.innerHTML = taskText.value;
      taskList.appendChild(tarefa);
      taskText.value = "";
      tarefa.addEventListener("dblclick", () => {tarefa.classList.toggle("marked")});
      tarefa.addEventListener("click", () => {tarefa.classList.toggle('selected')});
      
    }
  });
};
