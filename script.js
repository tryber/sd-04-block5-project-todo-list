const btnAdd = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const tarefa = document.querySelector('#texto-tarefa');
const btnRem = document.querySelector('#apaga-tudo');
const btnRemLined = document.querySelector('#remover-finalizados');
const btnSave = document.querySelector('#salvar-tarefas');
const btnExclud = document.querySelector('#remover-selecionado');
const btnUp = document.querySelector('#mover-cima');
const btnDown = document.querySelector('#mover-baixo');

btnAdd.addEventListener('click', function () {
  if (tarefa.value === '') {
    alert('Digite alguma tarefa!');
  } else {
    const item = document.createElement('li');
    item.innerHTML = tarefa.value;
    list.appendChild(item);
    tarefa.value = '';
  }
});

list.addEventListener('click', function (e) {
  e.target.classList.toggle('selected');
});

list.addEventListener('dblclick', function (e) {
  e.target.classList.toggle('completed');
})

btnRem.addEventListener('click', function () {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    list.removeChild(itens[i]);
    localStorage.removeItem('itens');
  }
});

btnRemLined.addEventListener('click', function () {
  const complete = document.querySelectorAll('li');
  for (let i = 0; i < complete.length; i += 1) {
    if (complete[i].className === 'completed') {
      list.removeChild(complete[i]);
    }
  }
});

btnSave.addEventListener('click', function () {
  localStorage.setItem('itens', list.innerHTML);
});

if (localStorage !== null) {
  list.innerHTML = localStorage.getItem('itens');
}

btnExclud.addEventListener('click', function () {
  document.querySelector('.selected').remove();
});

btnUp.addEventListener('click', function () {
  let itemSlctd = document.querySelector('.selected');
  if (itemSlctd == null) {
    alert('Selecione algum item!');
  }
  let prvItem = itemSlctd.previousElementSibling;
  let older = itemSlctd.innerText
  if (prvItem) {
    itemSlctd.innerText = prvItem.innerText;
    prvItem.innerText = older;
    if (itemSlctd.classList.contains('completed')) {
      prvItem.classList.add('completed');
      itemSlctd.classList.remove('completed');
    }
    if (itemSlctd.classList.contains('selected')) {
      prvItem.classList.add('selected');
      itemSlctd.classList.remove('selected');
    }
  } else {
    alert('Não existe elemento');
  }
});

btnDown.addEventListener('click', function () {
  let itemSlctd = document.querySelector('.selected');
  if (itemSlctd == null) {
    alert('Selecione algum item!');
  }
  let nextItem = itemSlctd.nextElementSibling;
  let older = itemSlctd.innerText;
  if (nextItem) {
    itemSlctd.innerText = nextItem.innerText;
    nextItem.innerText = older;

    if (itemSlctd.classList.contains('completed')) {
      nextItem.classList.add('completed');
      itemSlctd.classList.remove('completed');
    }

    if (itemSlctd.classList.contains('selected')) {
      nextItem.classList.add('selected');
      itemSlctd.classList.remove('selected');
    }
  } else {
    alert('Não existe elemento');
  }
});
