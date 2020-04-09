const ol = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');
const button1 = document.querySelector('#criar-tarefa');
const button2 = document.querySelector('#apaga-tudo');


// Adicionando função de add tarefas no button
function addTask() {
  if(input.value != ""){
    let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = ""
  }
}
button1.addEventListener('click', addTask)

// Função apaga tudo
function clear (){
  while (ol.firstChild) {
    ol.firstChild.remove();
}
}
button2.addEventListener('click', clear)
