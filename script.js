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
  let addClass = event.target;
  addClass.classList.add('fundoli');
})

// Tarefa concluida
function tarefaOk(){
  let unicaTarefa = event.target;
  if (unicaTarefa.className == 'completed'){
    unicaTarefa.classList.remove('completed');
  }else{
    unicaTarefa.classList.add('completed');
  }
}

// Chamando o Evento aos botões
btnAdd.addEventListener('click', addTarefa);
lista.addEventListener('dblclick', tarefaOk);
