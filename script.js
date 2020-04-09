//  BOTÃO LIMPAR TUDO
const clearListButton = document.getElementById('apaga-tudo');

//  LISTA DAS TAREFAS
const taskList = document.getElementById('lista-tarefas');

//  TAREFA A SER INCLUIDA NA LISTA
const taskToInput = document.getElementById('texto-tarefa');

//
const addTaskButton = document.getElementById('criar-tarefa');


//  FUNÇÃO ADICIONAR TASk-----------------------------------------------
function newTask() {
    let li = document.createElement('li');
    li.className = "taskItem";
    let inputValue = document.getElementById('texto-tarefa').value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert ('You must especify a task!')
    }
    else {
        document.getElementById('lista-tarefas').appendChild(li);
    }
    document.getElementById('texto-tarefa').value = '';
}
addTaskButton.addEventListener('click', newTask);
//  ----------------------------------------------------------------------

