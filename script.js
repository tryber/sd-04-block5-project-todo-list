function criarTarefa(){
  let orderedList = document.getElementById("lista-tarefas");
  let textField = document.getElementById("texto-tarefa");
  let newItem = document.createElement("li");
  newItem.innerHTML = textField.value;
  orderedList.appendChild(newItem);
  textField.value = "";
}

let addItem = document.getElementById("criar-tarefa");
addItem.addEventListener("click", criarTarefa);

let buttons = document.getElementsByTagName("button");
console.log(buttons);
for(let i = 0; i < buttons.length; i+=1){
  buttons[i].style.cursor = "pointer";
}