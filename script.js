const taskText = document.getElementById('texto-tarefa');
const buttonCreateTask = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas')
const buttonDeleteList = document.getElementById('apaga-tudo');

buttonCreateTask.addEventListener('click', function(){
  let valueTaskText = taskText.value;
  let li = document.createElement('li');
  li.classList.add('listTask');
  listTask.appendChild(li).innerHTML = valueTaskText;
  taskText.value = ''
})

buttonDeleteList.addEventListener('click', function(){
  let listItems = document.querySelectorAll('.listTask');
  for (i = 0; i < listItems.length; i += 1){
    listTask.removeChild(listItems[i]);
  }
})