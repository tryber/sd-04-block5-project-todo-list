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
});
  //function on double click add and remove  .completed 
  document.body.addEventListener( 'dblclick', function ( event ) {
    if( event.target.className == 'list' && event.target.className !== 'completed') {
      event.target.classList.add("completed");
      }
    else if( event.target.className == 'list completed') {
         event.target.classList.remove("completed");
        }
  });
    //function on click button delete all items of the list
    const buttondeletevent = document.querySelector('#apaga-tudo');
    buttondeletevent.addEventListener('click',function(event){
    let listItem = document.querySelectorAll('.list');
    for (let i=0; i<listItem.length; i+=1){
      list.removeChild(listItem[i]);
      }
  })

 //function remove completed task  
 const buttondeletefinished = document.querySelector('#remover-finalizados');
 buttondeletefinished.addEventListener('click',function(event){
 let listItem = document.querySelectorAll('.list');
 for (let i=0; i<listItem.length; i+=1){
  if( listItem[i].className == 'list completed') {list.removeChild(listItem[i]);
    }
   }
})
 //function remove selected task  
 const buttondeleteselected= document.querySelector('#remover-selecionado');
 buttondeleteselected.addEventListener('click',function(event){

      let listItem = document.querySelectorAll('.list');
       for (let i=0; i<listItem.length; i+=1){
        let listItembackgroundColor = listItem[i].style.backgroundColor;
        if ( listItembackgroundColor !== 'white'){list.removeChild(listItem[i]);
          }
         }
      
    });
 
  



//temp 

//temp end
}





