let btnAdd = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let tarefa = document.querySelector('#texto-tarefa');
let btnRem = document.querySelector('#apaga-tudo');
let btnRemLined = document.querySelector('#remover-finalizados');
let btnSave = document.querySelector('#salvar-tarefas');
let btnExclud = document.querySelector('#remover-selecionado');


btnAdd.addEventListener('click', function () {
  if (tarefa.value === '') {
    alert('Digite alguma tarefa!');
  } else {
    let item = document.createElement('li');
    item.innerHTML = tarefa.value;
    list.appendChild(item);
    tarefa.value = '';
  }
});

list.addEventListener('click', function (e) {
  e.target.classList.toggle('selected');

});

list.addEventListener('dblclick', function (e) {
  e.target.classList.toggle('completed')
})

btnRem.addEventListener('click', function () {
  let itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    list.removeChild(itens[i]);
    localStorage.removeItem('itens')
  }

});

btnRemLined.addEventListener('click', function () {
  let complete = document.querySelectorAll('li');
  for (let i = 0; i < complete.length; i += 1) {
    if (complete[i].className == 'completed') {
      list.removeChild(complete[i]);
    }
  }
});

btnSave.addEventListener('click', function () {
  localStorage.setItem('itens', list.innerHTML);
});

if (localStorage !== null) {
  list.innerHTML = localStorage.getItem('itens')
}

btnExclud.addEventListener('click', function(){
  document.querySelector('.selected').remove();
});
