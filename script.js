window.onload = function(){

let inputTask = document.querySelector("#texto-tarefa");
let buttonCreate = document.querySelector("#criar-tafefa");

toDoList = document.querySelector('#lista-tarefas')

buttonCreate.addEventListener('click', function(){
    const listItem = document.createElement('li');
    toDoList.appendChild(listItem);
    listItem.innerText = inputTask.value;
    inputTask.value = "";
});


const body = document.querySelector('body');

}






