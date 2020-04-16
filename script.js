const criarTarefa = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
const deleteTarefas = document.getElementById('apaga-tudo');
const item = document.getElementsByClassName('item');
const buttons = document.getElementsByTagName('button');


// Cursor em forma de mãozinha
for (let i = 0; i < buttons.length; i +=1 ) {
  buttons[i].addEventListener('mouseover', function () {
  event.target.style.cursor = 'pointer';
});
}

// criar e adicionar li's ao OL.
criarTarefa.addEventListener('click', addLi);
function addLi() {
  const li = document.createElement('li');
  li.innerHTML = tarefa.value;
  li.className = 'item';
  ol.appendChild(li);
  tarefa.value = '';
}

// Deleta tudo de OL. *Apaga todas LI*//

function deleteAll() {
  ol.innerHTML = '';
}
deleteTarefas.addEventListener('click', deleteAll);


// add tag selecionado e add tag com Duplo click completed.
function start() {
  for (let i = 0; i < item.length; i += 1) { 
    item[i].addEventListener('dblclick', function () {
      event.target.classList.toggle('completed');

    });

    item[i].addEventListener('click', oneClick());

  }
}

function oneClick(){
    for(let i = 0; i < item.length; i += 1) {
        item[i].classList.remove('selected');
        item[i].style.backgroundColor = '';
    }
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb( 128,128, 128)';
}


ol.addEventListener('click', start);
