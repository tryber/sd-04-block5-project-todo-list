window.onload = function(){
   
    const taskBox = document.querySelector('#texto-tarefa');
    const buttonevent = document.querySelector('#criar-tarefa');
    const list = document.querySelector('#lista-tarefas');
     //function on click button create a new item to list
    buttonevent.addEventListener('click',function(event){
        let taskText = taskBox.value;
        console.log("click done!");
        console.log("taskText :", taskText);
        let li = document.createElement('li');
        list.appendChild(li).innerHTML = taskText;
      })
}