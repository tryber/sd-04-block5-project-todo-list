const ol = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');

console.log(button)

function addTask() {
  if(input.value != ""){
    let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = ""
  }
}
button.addEventListener('click', addTask)
