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
  buttondeleteselected.addEventListener('click',function(event){
   let listItem = document.querySelectorAll('.list');
   for (let i=0; i<listItem.length; i+=1){
   var classname = listItem[i].className;
    if( classname.includes('selected')) {
     list.removeChild(listItem[i]);
     }
    }
 })
 //function remove completed task  
 const buttondeletefinished = document.querySelector('#remover-finalizados');
 buttondeletefinished.addEventListener('click',function(event){
  let listItem = document.querySelectorAll('.list');
  for (let i=0; i<listItem.length; i+=1){
  var classname = listItem[i].className;
   if( classname.includes('completed')) {
    list.removeChild(listItem[i]);
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
   //PARA MELHORAR
   document.body.addEventListener( 'dblclick', function ( event ) {
    var classname = event.target.className;
    if (classname.includes('list')) {
      if (classname.includes('completed')) {
      event.target.classList.remove("completed");
        }
      else {
        event.target.classList.add("completed");
      }
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
    list.insertBefore(liselected, previous);
    })
    //function on click button down item go down to list
    const buttondown = document.querySelector("#mover-baixo");
    buttondown.addEventListener('click',function(event){
    let liselected = document.querySelector('.selected');
    let next = liselected.nextElementSibling;
    if (next != null) next = liselected.nextElementSibling.nextElementSibling;
    list.insertBefore(liselected, next);
      })
     //     function load the list when broswer load the page
    let taskNumber = "class0";
    var listItem = localStorage.getItem("taskQuantity");
    console.log("taskQuantity",listItem);
    //let listItem = document.querySelectorAll('.list');
    for (let i=0; i<listItem; i+=1){
      let taskNumberText = localStorage.getItem('task'+i);
      let taskNumberClass = localStorage.getItem('class'+i);
      console.log('taskNumberClass:',taskNumberClass);
        let li = document.createElement('li');
        //li.classList.add(taskNumberClass);
        list.appendChild(li).innerHTML = taskNumberText;
    //    taskBox.value = "";
        }
     
     //function save the list
    const buttonsave = document.querySelector("#salvar-tarefas");
    buttonsave.addEventListener('click',function(event){
    localStorage.clear();
    let listItem = document.querySelectorAll('.list');
    localStorage.setItem("taskQuantity",listItem.length);
    for (let i=0; i<listItem.length; i+=1){
      console.log("item[i]_text",listItem[i].innerHTML);
      let classname = listItem[i].className;
      let textOfTask = listItem[i].innerHTML;
      let taskNumberText = 'task'+i;
      let taskNumberClass = 'class'+i;
      localStorage.setItem(taskNumberText,textOfTask);
      localStorage.setItem(taskNumberClass,classname);
      }
    })
