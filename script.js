// Declarando os campos necessários
let tarefa = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');
let btnAdd = document.querySelector('#criar-tarefa');
let btnDel = document.querySelector('#apaga-tudo');

// Adiciona uma tarefa a lista
function addTarefa(){
  let toDo = document.createElement('li');
  if(tarefa.value != ""){
    toDo.innerHTML = tarefa.value;
    lista.appendChild(toDo);
    tarefa.value = null;
  }else{
    alert('Você precisa digitar uma tarefa antes!');
  }
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
// Apagar lista
function deleteTarefas(){
  let todasTarefas = document.querySelectorAll('li');
  for (let i = 0; i < todasTarefas.length; i += 1){
    lista.removeChild(todasTarefas[i]);
  }
}

// Chamando o Evento aos botões
btnAdd.addEventListener('click', addTarefa);
lista.addEventListener('dblclick', tarefaOk);
btnDel.addEventListener('click', deleteTarefas);

