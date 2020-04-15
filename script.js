window.onload = function () {
  let taskList = document.getElementById("lista-tarefas");
  let taskText = document.getElementById("texto-tarefa");
  let createButton = document.getElementById("criar-tarefa");
  let tasks = document.querySelectorAll('li#lista-tarefas')

  createButton.addEventListener("click", function () {
    if (taskText.value) {
      let tarefa = document.createElement("li");
      let checkBox = document.createElement("imput");
      checkBox.type = "checkbox";
      tarefa.innerHTML = taskText.value;
      taskList.appendChild(tarefa);
      tarefa.appendChild(checkBox)
      tarefa.width = tarefa.innerHTML.length;
      taskText.value = "";
      let bkgcolor = tarefa.style.backgroundColor
      tarefa.addEventListener("click", () => {
      bkgcolor = "rgb(128,128,128)";
      });
      tarefa.addEventListener("click", () => {
        bkgcolor = "white";
        return color
    })
      tarefa.addEventListener("dblclick", () => {
        tarefa.style.textDecoration = "line-through";
      });
      tarefa.previousElementSibling(tasks[0]);

    }
  });
};
