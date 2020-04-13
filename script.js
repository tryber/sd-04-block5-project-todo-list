const btnTarefa = document.querySelector('#criar-tarefa');

// btnTarefa.addEventListener('click', function(){
//     let inputTarefa = document.querySelector('#texto-tarefa').value;
//     var liTarefa = document.createElement("LI");         
//     var textnode = document.createTextNode(inputTarefa);        
//     liTarefa.appendChild(textnode);                              
//     document.getElementById("lista-tarefas").appendChild(liTarefa); 
//     inputTarefa = ' ';
//     console.log(inputTarefa.value)
// })


btnTarefa.addEventListener('click', function(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("texto-tarefa").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Você deve escrever algo");
    } else {
      document.getElementById("lista-tarefas").appendChild(li);
    }
    document.getElementById("texto-tarefa").value = "";
})