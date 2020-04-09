window.onload = function(){
     
    const taskBox = document.querySelector('#texto-tarefa');
    const buttonevent = document.querySelector('#criar-tarefa');
    const list = document.querySelector('#lista-tarefas');
     //function on click button create a new item to list
    buttonevent.addEventListener('click',function(event){
        let taskText = taskBox.value;
        let li = document.createElement('li');
        li.classList.add("list");
        list.appendChild(li).innerHTML = taskText;
        taskBox.value = "";
      })
//function to modify items of the list: put rgb(128,128,128)
  document.body.addEventListener( 'click', function ( event ) {
  if( event.target.className == 'list') {
    let listItem = document.querySelectorAll('.list');
     for (let i=0; i<listItem.length; i+=1){
      listItem[i].style.backgroundColor = 'white';
      }
    event.target.style.backgroundColor = 'rgb(128 ,128 ,128)';
  };
} );



//temp 

//temp end
}





