window.onload = function () {
  const taskBox = document.querySelector('#texto-tarefa');
  const buttonevent = document.querySelector('#criar-tarefa');
  const list = document.querySelector('#lista-tarefas');
//  function to modify items of the list: put rgb(128,128,128)
  document.body.addEventListener('click', function (event) {
      var classname = event.target.className;
      if (classname.includes('list')){
        const listItem = document.querySelectorAll('.list');
        for (let i = 0; i < listItem.length; i += 1) {
          if (listItem[i].className.includes('selected')) {
            listItem[i].classList.remove("selected");
            }
      }
      event.target.classList.add("selected");
    }
  });
//  end window.onload
};
  //function remove selected task
const taskBox = document.querySelector('#texto-tarefa');
const buttonevent = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const buttondeleteselected = document.querySelector('#remover-selecionado');
buttondeleteselected.addEventListener ('click', function(){
   let listItem = document.querySelectorAll('.list');
        for (let i = 0; i < listItem.length; i += 1){
        let listItembackgroundColor = listItem[i].style.backgroundColor;
        if (listItembackgroundColor == 'rgb(128, 128, 128)'){
          list.removeChild(listItem[i]);
        }
       }

      
    });

 //function remove completed task  
 const buttondeletefinished = document.querySelector('#remover-finalizados');
 buttondeletefinished.addEventListener('click',function(event){
 let listItem = document.querySelectorAll('.list');
 for (let i=0; i<listItem.length; i+=1){
  if( listItem[i].className == 'list completed') {list.removeChild(listItem[i]);
    }
   }
})

   //function on click button delete all items of the list
   const buttondeletevent = document.querySelector('#apaga-tudo');
   buttondeletevent.addEventListener('click',function(event){
   let listItem = document.querySelectorAll('.list');
   for (let i=0; i<listItem.length; i+=1){
     list.removeChild(listItem[i]);
     }
 })
   //function on double click add and remove '.completed' 
   document.body.addEventListener( 'dblclick', function ( event ) {
    if( event.target.className == 'list' && event.target.className !== 'completed') {
      event.target.classList.add("completed");
      }
    else if( event.target.className == 'list completed') {
         event.target.classList.remove("completed");
        }
  });
     //function on click button create a new item to list
     buttonevent.addEventListener('click',function(event){
      let taskText = taskBox.value;
      let li = document.createElement('li');
      li.classList.add("list");
      list.appendChild(li).innerHTML = taskText;
      taskBox.value = "";
    })

     //function on click button up item go up to list
     const buttonup = document.querySelector("#mover-cima");
     buttonup.addEventListener('click',function(event){
      let liselected = document.querySelector('.selected');
      console.log("liselected.previousElementSibling",liselected.previousElementSibling);
      let previous = liselected.previousElementSibling;
      if (previous != null) next = liselected.previousElementSibling;
      list.insertBefore(liselected, previous);
    })
     //function on click button down item go down to list
     const buttondown = document.querySelector("#mover-baixo");
     buttondown.addEventListener('click',function(event){
      let liselected = document.querySelector('.selected');
      let next = liselected.nextElementSibling;
      if (next != null) next = liselected.nextElementSibling.nextElementSibling;
      list.insertBefore(liselected, next);
      //list.insertBefore(liselected, liselected.nextElementSibling.nextElementSibling);
    })


    // list.insertBefore(list.childNodes[1], list.childNodes[0]);
    // list.children[3]
    // list.insertBefore(list.children[2], list.children[2].previousElementSibling);
    // list.insertBefore(list.children[0], list.children[0].nextElementSibling.nextElementSibling);
    //list.insertBefore(test, test.previousElementSibling);