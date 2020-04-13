// Declarando os campos necessários
let tarefa = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');
let btnAdd = document.querySelector('#criar-tarefa');

// Adiciona uma tarefa a lista
function addTarefa(){
  let toDo = document.createElement('li');
  toDo.innerHTML = tarefa.value;
  lista.appendChild(toDo);
  tarefa.value = null;
};

lista.addEventListener('click', function(event){
  let teste = event.target;
  teste.classList.add('fundoli');
  console.log(teste);
})

// Chamando o Evento no Botão Adicionar tarefa
btnAdd.addEventListener('click', addTarefa);
