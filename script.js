// Declarando os campos necessários
let tarefa = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');
let btnAdd = document.querySelector('#criar-tarefa');

function addTarefa(){
  let toDo = document.createElement('li');
  toDo.innerHTML = tarefa.value;
  lista.appendChild(toDo);
};

btnAdd.addEventListener('click', addTarefa);
