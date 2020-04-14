

window.onload = function() {

let orderedList = document.getElementById("lista-tarefas");
let textField = document.getElementById("texto-tarefa");
let addItem = document.getElementById("criar-tarefa");
let buttons = document.getElementsByTagName("button");


addItem.addEventListener("click", criarTarefa);

for(let i = 0; i < buttons.length; i+=1){
  buttons[i].style.cursor = "pointer";
}

function criarTarefa(){
  let newItem = document.createElement("li");
  newItem.classList.add("listItem");
  newItem.addEventListener("click", function(evt){ select(evt); });
  newItem.innerHTML = textField.value;
  orderedList.appendChild(newItem);
  let items = document.getElementsByClassName("listItem");
  for(let i = 0; i < items.length; i+=1){
    items[i].style.cursor = "pointer";
    items[i].addEventListener("dblclick", complete);
  }
  textField.value = "";
}

function select(evt){
  let items = document.getElementsByClassName("listItem");
  for(let i = 0; i < items.length; i+=1){
  items[i].classList.remove("selected");
  }
  evt.target.classList.add("selected");
}

function complete(evt){
  if(evt.target.classList.contains("completed")){
    evt.target.classList.remove("completed");
  } else {
  evt.target.classList.add("completed");
  }
}



};
