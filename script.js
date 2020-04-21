let taskList = document.getElementById('lista-tarefas')
let btnAdd = document.getElementById('criar-tarefa')
let btnClearAll = document.getElementById('apaga-tudo')
let btnClearSelected = document.getElementById('remover-selecionados')
let btnClearCompleted = document.getElementById('remover-finalizados')
let input = document.getElementById('texto-tarefa')

const btnSave = document.getElementById('salvar-tarefas')
if (typeof Storage !== 'undefined') {
  taskList.innerHTML = localStorage.taskList;
}

const addTask = () => {
  let newEl = document.createElement('li')
  newEl.classList.add('task')

  if (input.value === '') {
    alert('Please insert some text')
  } else {
    newEl.innerText = input.value
    taskList.appendChild(newEl)
    input.value = ''
  }
  input.focus()
}
  taskList.addEventListener('click', function (elemento) {
    if (document.querySelector('.selected') == null) {
      elemento.target.classList.add('selected');
    } else {
      elemento.target.classList.remove('selected');

    }
  });
  taskList.addEventListener('dblclick', function (elemento) {
    if (elemento.target.classList.contains('completed') === true) {
      elemento.target.classList.remove('completed');
    } else {
      elemento.target.classList.add('completed');
    }
  });


const clearAll = () => {
  taskList.innerHTML = ''
}

const changeClass = (el, className) => {
  el.classList.contains(className) === false ? el.classList.add(className) : el.classList.remove(className)
}

const specificRemove = (type) => {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i++) {
  
    if (items[i].classList.contains(type) == true) {items[i].remove()}
  }
}

btnAdd.addEventListener('click', addTask)

btnClearAll.addEventListener('click', clearAll)

btnClearCompleted.addEventListener('click', () => {
  specificRemove('completed')
})

btnClearSelected.addEventListener('click', () => {
  specificRemove('selected')
})

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) addTask()
})

btnSave.addEventListener('click', function() {
  localStorage.setItem('taskList', taskList.innerHTML)
})
