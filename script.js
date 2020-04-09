const ol = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
console.log(button)

function addTask() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
}
button.addEventListener('click', addTask)
