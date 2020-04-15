// Variables
let newTask = document.getElementById("texto-tarefa");
let createTask = document.getElementById("criar-tarefa");
let deleteAll = document.getElementById("apaga-tudo");
let deleteCompletedTasks = document.getElementById("remover-finalizados");
let list = document.getElementById("lista-tarefas")
let saveTasks = document.getElementById("salvar-tarefas")
let buttons = document.querySelectorAll("button");
let deleteSelectedTask = document.getElementById("remover-selecionado");
let moveUp = document.getElementById("mover-cima");
let moveDown = document.getElementById("mover-baixo");

// New item is created when the user press the button
createTask.addEventListener("click", addItem);
function addItem() {
  if(newTask.value !== "") { //Do not accept an empty taks
    let task = document.createElement("li");
    task.innerText = newTask.value;
    list.appendChild(task)
    newTask.value = "";
  }
}
// Select task and change color background
list.addEventListener('click', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
});
// Change buttons cursor type
for( i = 0; i < buttons.length; i+=1) {
  buttons[i].style.cursor = "pointer";
};
// Setting a completed task
list.addEventListener("dblclick", (event) => {
  if(event.target.classList.contains("completed")) {
    event.target.classList.remove("completed")
  } else {
    event.target.classList.add("completed")
  }
})
// Delete completed tasks
deleteCompletedTasks.addEventListener("click", deleteCompleted);
function deleteCompleted() {
  let items = document.querySelectorAll(".completed");
  for(i = 0; i < items.length; i+=1) {
    items[i].parentNode.removeChild(items[i]); 
  }
}
// Delete all tasks
deleteAll.addEventListener("click", deleteAllTasks)
function deleteAllTasks() {
  let items = document.querySelector("ol")
  items.innerHTML = "";
}
// Delete selected item
deleteSelectedTask.addEventListener("click", function() {
  let item = document.querySelector(".selected");
  item.parentNode.removeChild(item)
})
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
}
// Move item up
moveUp.addEventListener("click", function() {
  let selectedTask = document.querySelector(".selected");
  let tasks = document.querySelectorAll("li");// Alert that is not possible to move up more
  if(selectedTask !== tasks[0]) {
    let previousTask = selectedTask.previousElementSibling;
    let previousTaskInnerHTML = previousTask.innerHTML;
  
    previousTask.innerText = selectedTask.innerHTML;// Set selected task to previous position
    previousTask.classList.add("selected")// Keep style on selected task 
    previousTask.style.backgroundColor = "rgb(128,128,128)"
  
    if(selectedTask.classList.contains("completed")) {// Bring style when move 
      if(!previousTask.classList.contains("completed")) {
        previousTask.classList.add("completed");
        selectedTask.classList.remove("completed");
      } else {
        previousTask.classList.add("completed");
        selectedTask.classList.add("completed");
      }
    } else {
      if(previousTask.classList.contains("completed")) {
        previousTask.classList.remove("completed");
        selectedTask.classList.add("completed");
      }
    }
    selectedTask.classList.remove("selected");// Take out style from previous task 
    selectedTask.style.backgroundColor = "";
  
    selectedTask.innerHTML = previousTaskInnerHTML;//Set previous task to next position
  } else {
    alert("A tarefa já está na primeira posição.")
  }
})
// Move item down
moveDown.addEventListener("click", function() {
  let selectedTask = document.querySelector(".selected");

  let tasks = document.querySelectorAll("li");// Alert that is not possible to move down more
  if(selectedTask !== tasks[tasks.length - 1]) {
    let nextTask = selectedTask.nextElementSibling;
    let nextTaskInnerHTML = nextTask.innerHTML;
  
    nextTask.innerText = selectedTask.innerHTML;// Set selected task to next position
    nextTask.classList.add("selected")// Keep style on selected task 
    nextTask.style.backgroundColor = "rgb(128,128,128)"
  
    if(selectedTask.classList.contains("completed")) {// Bring style when move 
      if(!nextTask.classList.contains("completed")) {
        nextTask.classList.add("completed");
        selectedTask.classList.remove("completed");
      } else {
        nextTask.classList.add("completed");
        nextTask.classList.add("completed");
      }
    } else {
      if(nextTask.classList.contains("completed")) {
        nextTask.classList.remove("completed");
        selectedTask.classList.add("completed");
      }
    }
    selectedTask.classList.remove("selected");// Take out style from previous task 
    selectedTask.style.backgroundColor = "";
  
    selectedTask.innerHTML = nextTaskInnerHTML;//Set previous task to next position
  } else {
    alert("A tarefa já está na última posição.")
  }  
})