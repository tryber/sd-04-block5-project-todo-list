// Variables
let newTask = document.getElementById("texto-tarefa");
let createTask = document.getElementById("criar-tarefa");
let deleteAll = document.getElementById("apaga-tudo");
let deleteCompletedTasks = document.getElementById("remover-finalizados");
let list = document.getElementById("lista-tarefas")
let saveTasks =document.getElementById("salvar-tarefas")

// New item is created when the user press the button
createTask.addEventListener("click", addItem);
function addItem() {
  if(newTask.value !== "") { //Do not accept an empty taks
    let task = document.createElement("li");
    let list = document.getElementById("lista-tarefas")
    task.innerText = newTask.value;
    list.appendChild(task)
    task.style.cursor = "pointer";//change cursor type
    newTask.value = "";
  }
  selectTask();//one click
  completedTask()//double click
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
// Setting a completed task
function completedTask() {
  let task = document.getElementsByTagName("li");
  
  for(i = 0; i < task.length; i+=1) {
    task[i].addEventListener("dblclick", function(event) {
      event.target.classList.add("completed");
      event.target.style.textDecoration = "line-through"
      undoCompletedTask()
    })
  }
}
// Undo completed task    
function undoCompletedTask() {
  let completed = document.querySelectorAll(".completed");
  for(i = 0; i < completed.length; i+=1) {
    if(completed) {
      completed[i].addEventListener("dblclick", function(event) {
        event.target.classList.remove("completed");
        event.target.style.textDecoration = "none"
      })
    }
  }
}
// Delete completed tasks
deleteCompletedTasks.addEventListener("click", deleteCompleted);
function deleteCompleted() {
  let items = document.querySelectorAll(".completed");
  for(i = 0; i < items.length; i+=1) {
    items[i].parentNode.removeChild(items[i]); 
  }
  selectTask();//one click
  completedTask()//double click
}
// Delete all tasks
deleteAll.addEventListener("click", deleteAllTasks)
function deleteAllTasks() {
  let items = document.querySelector("ol")
  items.innerHTML = "";
  selectTask();//one click
  completedTask()//double click
}
// Set Local storage
saveTasks.addEventListener("click", setLocalStorage);
function setLocalStorage() {
  localStorage.clear();
  let taskList = document.querySelectorAll("li");
    for (i = 0; i < taskList.length; i+=1) {
      let className = taskList[i].className;
      let task = taskList[i].innerHTML;
      let taskIndex = `Task ${i}`;
      let classIndex = `Class ${i}`;
      localStorage.setItem(taskIndex, task)
      localStorage.setItem(classIndex, className)
    }
    localStorage.setItem("numberOfItems", taskList.length)
  }
// Get local storage when load page
window.onload = function() {
  let index = localStorage.getItem("numberOfItems");
  for( let i = 0; i < index; i+=1) {
    let item = document.createElement("li")
    item.className = localStorage.getItem(`Class ${i}`)
    list.appendChild(item).innerHTML = localStorage.getItem(`Task ${i}`)//load list content
  }  
  addItem()
}