//  LISTA DAS TAREFAS
const taskList = document.getElementById('lista-tarefas');

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

//  mudando o backGround--------------------------------------------------
taskList.addEventListener('click', (event) => {
    if (document.querySelector('.selected') !== null) {
        document.querySelector('.selected').style.backgroundColor = 'white';
        document.querySelector('.selected').classList.remove('selected');
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    event.target.classList.add('selected');
});