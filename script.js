const taskText = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
let listItem = '';
let elem = null;
let txt = null;

function removeClass() {
    for (let i = 0; i < listItem.length; i += 1) {
      listItem[i].classList.remove('selected');
    }
}

function addClickEvent(elem) {
    elem.addEventListener('click', () => {  
      removeClass();
      elem.classList.add('selected');
    });
}

function addDblClickEvent(elem) {
    elem.addEventListener('dblclick', () => {  
      if (elem.classList.contains('linethrough'))
        elem.classList.remove('linethrough');
      else
        elem.classList.add('linethrough')
    });
}

btnAdd.addEventListener('click', () => {
  elem = document.createElement('li');
  txt = document.createTextNode(taskText.value);
  elem.appendChild(txt);
  taskList.appendChild(elem);
  taskText.value = '';
  listItem = document.querySelectorAll('ol li');
  addClickEvent(elem);
  addDblClickEvent(elem);
});
