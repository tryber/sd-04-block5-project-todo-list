window.onload = function(){

    let inputTask = document.querySelector("#texto-tarefa");

    let buttonCreate = document.querySelector("#criar-tafefa");
    toDoList = document.querySelector('#lista-tarefas');

    function insertItem(){
        const listItem = document.createElement('li');
        toDoList.appendChild(listItem);
        listItem.innerText = inputTask.value;
        inputTask.value = null;
    
    }
    
    buttonCreate.addEventListener('click', insertItem);
    const body = document.querySelector('body');
    
}









