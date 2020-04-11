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
// Change buttons cursor type
let buttons = document.querySelectorAll("button")
for( i = 0; i < buttons.length; i+=1) {
  buttons[i].style.cursor = "pointer"
};
