window.onload = () => {
  const taskList = document.getElementById("lista-tarefas");
  const taskText = document.getElementById("texto-tarefa");
  const createButton = document.getElementById("criar-tarefa");
  const allRemoveButton = document.getElementById("apaga-tudo");
  const doneRemoveButton = document.getElementById("remover-finalizados")
  const selectedRemoveButton = document.getElementById("remover-selecionado")
  createButton.addEventListener("click", () => {
    if (taskText.value) {
      const tarefa = document.createElement("li");
      tarefa.innerHTML = taskText.value;
      taskList.appendChild(tarefa);
      taskText.value = "";
      tarefa.addEventListener("dblclick", () => {
        tarefa.classList.toggle("completed");
      });
      tarefa.addEventListener("click", () => {
        tarefa.classList.toggle("selected");
      });
    }
  });
  allRemoveButton.addEventListener("click", () => {
    const allTasks = document.getElementsByTagName("li");
    [...allTasks].forEach((element) => {
      taskList.removeChild(element);
    });
  });
  doneRemoveButton.addEventListener("click", () => {
    const doneTasks = document.getElementsByClassName("completed");
    [...doneTasks].forEach((element) => {
      taskList.removeChild(element);
    });
  });
  selectedRemoveButton.addEventListener("click", () => {
    const selectedTasks = document.getElementsByClassName("selected");
    [...selectedTasks].forEach((element) => {
      taskList.removeChild(element);
    });
  });
};
