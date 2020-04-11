// Variables
let newTask = document.getElementById("texto-tarefa");
let button = document.getElementById("criar-tarefa");
let list = document.getElementById("lista-tarefas");
// New item is created when the user press the button
button.addEventListener("click", addItem);
function addItem() {  
  let task = document.createElement("li");
  task.innerText = newTask.value;
  list.appendChild(task)
  newTask.value = "";
}