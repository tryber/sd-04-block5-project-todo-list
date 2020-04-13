let i;
let p;
const butAddTask = document.getElementById('criar-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const inptasks = document.getElementById('texto-tarefa');
const butDelTasks = document.getElementById('apaga-tudo');
const butDelFinish = document.getElementById('remover-finalizados');
const butSaveTasks = document.getElementById('salvar-tarefas');
let indClass = [];

function addEvents(elm) {
  elm.style.cursor = 'pointer';
  elm.addEventListener('mouseover', function (e) { e.target.style.backgroundColor = 'rgb(128 , 128 , 128)'; });
  elm.addEventListener('mouseout', function (e) { e.target.style.backgroundColor = 'rgb(103 , 230 , 141)'; });
  elm.addEventListener('dblclick', function (e) {
    if (e.target.className) {
      e.target.className = '';
    } else {
      e.target.className = 'completed';
    }
  });
}

function checkStorage() {
  if (localStorage.length > 0) {
    for (i = 0; i < localStorage.length - 1; i += 1) {
      const li = document.createElement('li');

      let arrStg = JSON.parse(localStorage.getItem('indClass'));

      for (p in arrStg) {
        if (arrStg[p] === i) {
          li.className = 'completed';
        }
      }

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
    if (olTasks.children[i].className === 'completed') {
      olTasks.removeChild(olTasks.children[i]);
      i -= 1;
    }
  }
});

butSaveTasks.addEventListener('click', function () {
  localStorage.clear();

  indClass = [];

  for (i = 0; i < olTasks.children.length; i += 1) {
    if (olTasks.children[i].className === 'completed') {
      indClass.push(i);
    }

    const key = `task${i}`;
    const value = olTasks.children[i].innerText;

    localStorage.setItem(key, value);
  }

  localStorage.setItem('indClass', JSON.stringify(indClass));
});
