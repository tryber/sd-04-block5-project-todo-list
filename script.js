// Variables
let newTask = document.getElementById("texto-tarefa");
let button = document.getElementById("criar-tarefa");


// New item is created when the user press the button
button.addEventListener("click", addItem);
function addItem() {
  if(newTask.value !== "") { //Do not accept an empty taks
    let task = document.createElement("li");
    let list = document.getElementById("lista-tarefas")
    task.innerText = newTask.value;
    list.appendChild(task)
    task.style.cursor = "pointer";//change cursor type
    newTask.value = "";
  }
  selectTask();
}
// Select task and change color background
function selectTask() {
  let task = document.getElementsByTagName("li");
  for( i = 0; i < task.length; i+=1) {
    task[i].addEventListener("click", function(event) {
    event.target.classList.add("selected");
    event.target.style.backgroundColor = "rgb(128,128,128)"
    })
  }
}
// Change buttons cursor type
let buttons = document.querySelectorAll("button");
for( i = 0; i < buttons.length; i+=1) {
  buttons[i].style.cursor = "pointer";
};

