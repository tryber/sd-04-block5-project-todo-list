let i;
let j;
let indClass = [];
const butAddTask = document.getElementById('criar-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const inptasks = document.getElementById('texto-tarefa');
const butDelTasks = document.getElementById('apaga-tudo');
const butDelFinish = document.getElementById('remover-finalizados');
const butSaveTasks = document.getElementById('salvar-tarefas');
const butUp = document.getElementById('mover-cima');
const butDown = document.getElementById('mover-baixo');
const butDelTask = document.getElementById('remover-selecionado');

function captureSelected() {
  let selected;

  for (i = 0; i < olTasks.children.length; i += 1) {
    if (olTasks.children[i].className === 'slct' || olTasks.children[i].className === 'slct completed' || olTasks.children[i].className === 'completed slct') {
      selected = olTasks.children[i];
    }
  }

  return selected;
}

function liMouseOver(e) {
  e.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

function liMouseOut(e) {
  e.target.style.backgroundColor = 'rgb(103 , 230 , 141)';
}

function liDbclick(e) {
  if (e.target.className === 'completed' || e.target.className === 'slct completed' || e.target.className === 'completed slct') {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function removeSelectedDifferent() {
  for (i = 0; i < olTasks.children.length; i += 1) {
    if (olTasks.children[i].className === 'slct' || olTasks.children[i].className === 'slct completed' || olTasks.children[i].className === 'completed slct') {
      olTasks.children[i].classList.remove('slct');
      olTasks.children[i].style.backgroundColor = 'rgb(103 , 230 , 141)';
      olTasks.children[i].addEventListener('mouseout', liMouseOut);
    }
  }
}

function liClick(e) {
  if (e.target.className === 'slct') {
    e.target.removeEventListener('mouseout', liMouseOut);
  } else {
    e.target.removeEventListener('mouseout', liMouseOut);

    removeSelectedDifferent();

    e.target.classList.add('slct');
  }
}

function addEvents(elm) {
  elm.style.cursor = 'pointer';

  elm.addEventListener('mouseover', liMouseOver);
  elm.addEventListener('mouseout', liMouseOut);
  elm.addEventListener('dblclick', liDbclick);
  elm.addEventListener('click', liClick);
}

function addClass(elm, idc) {
  const arrStg = JSON.parse(localStorage.getItem('indClass'));

  for (j = 0; j < arrStg.length; j += 1) {
    if (arrStg[j] === idc) {
      elm.className = 'completed';
    }
  }
}

function checkStorage() {
  if (localStorage.length > 0) {
    for (i = 0; i < localStorage.length - 1; i += 1) {
      const li = document.createElement('li');

      addClass(li, i);
      addEvents(li);

      olTasks.appendChild(li).innerText = localStorage.getItem(`task${i}`);
    }
  }
}

checkStorage();

butAddTask.addEventListener('click', function () {
  const txtTask = document.getElementById('texto-tarefa').value;

  if (txtTask !== '') {
    const li = document.createElement('li');

    addEvents(li);

    olTasks.appendChild(li).innerText = txtTask;
    inptasks.value = '';
  }
});

butDelTasks.addEventListener('click', function () {
  while (olTasks.firstChild) {
    olTasks.removeChild(olTasks.firstChild);
  }

  localStorage.clear();
});

butDelFinish.addEventListener('click', function () {
  for (i = 0; i < olTasks.children.length; i += 1) {
    if (olTasks.children[i].className === 'completed' || olTasks.children[i].className === 'slct completed' || olTasks.children[i].className === 'completed slct') {
      olTasks.removeChild(olTasks.children[i]);
      i -= 1;
    }
  }
});

butSaveTasks.addEventListener('click', function () {
  localStorage.clear();

  indClass = [];

  for (i = 0; i < olTasks.children.length; i += 1) {
    if (olTasks.children[i].className === 'completed' || olTasks.children[i].className === 'slct completed' || olTasks.children[i].className === 'completed slct') {
      indClass.push(i);
    }

    const key = `task${i}`;
    const value = olTasks.children[i].innerText;

    localStorage.setItem(key, value);
  }

  localStorage.setItem('indClass', JSON.stringify(indClass));
});

butUp.addEventListener('click', function () {
  if (captureSelected()) {
    const elm = captureSelected();
    const elmDad = elm.parentNode;

    if (elm !== elmDad.firstChild) {
      elmDad.insertBefore(elm, elm.previousSibling);
    }
  }
});

butDown.addEventListener('click', function () {
  if (captureSelected()) {
    let elm = captureSelected();
    const elmDad = elm.parentNode;

    if (elm !== elmDad.lastChild) {
      elm = captureSelected().nextSibling;

      elmDad.insertBefore(elm, elm.previousSibling);
    }
  }
});

butDelTask.addEventListener('click', function () {
  const itemSel = document.querySelector('.slct');
  
  if (itemSel) {
    itemSel.parentNode.removeChild(itemSel);
  }
});
