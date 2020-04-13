const btnTarefa = document.querySelector('#criar-tarefa');

btnTarefa.addEventListener('click', function(){
    const inputTarefa = document.querySelector('#texto-tarefa').value;
    var liTarefa = document.createElement("LI");         
    var textnode = document.createTextNode(inputTarefa);        
    liTarefa.appendChild(textnode);                              
    document.getElementById("lista-tarefas").appendChild(liTarefa); 
})