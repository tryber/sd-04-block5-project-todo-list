let i;
const butAddTask = document.getElementById('criar-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const inptasks = document.getElementById('texto-tarefa');
const butDelTasks = document.getElementById('apaga-tudo');
const butDelFinish = document.getElementById('remover-finalizados');
const butSaveTasks = document.getElementById('salvar-tarefas');

function checkStorage() {
  if (localStorage.length === 0) {
    for (i = 0; i < localStorage.length; i += 1) {
      const li = document.createElement('li');

      li.style.cursor = 'pointer';
      li.addEventListener('mouseover', function (e) { e.target.style.backgroundColor = 'rgb(128 , 128 , 128)'; });
      li.addEventListener('mouseout', function (e) { e.target.style.backgroundColor = 'rgb(103 , 230 , 141)'; });
      li.addEventListener('dblclick', function (e) {
        if (e.target.className === '') {
          e.target.className = 'completed';
        } else {
          e.target.className = '';
        }
      });

      li.innerText = localStorage.getItem(`key${i}`);
      olTasks.appendChild(li);
    }
  }
}

butAddTask.addEventListener('click', function () {
  const txtTask = document.getElementById('texto-tarefa').value;

  if (txtTask !== '') {
    const li = document.createElement('li');

    li.style.cursor = 'pointer';
    li.addEventListener('mouseover', function (e) { e.target.style.backgroundColor = 'rgb(128 , 128 , 128)'; });
    li.addEventListener('mouseout', function (e) { e.target.style.backgroundColor = 'rgb(103 , 230 , 141)'; });
    li.addEventListener('dblclick', function (e) {
      if (e.target.className === '') {
        e.target.className = 'completed';
      } else {
        e.target.className = '';
      }
    });

    li.innerText = txtTask;
    olTasks.appendChild(li);
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
  for (i = 0; i < olTasks.children.length; i += 1) {
    const value = olTasks.children[i].innerText;
    const key = `key${i}`;
    localStorage.setItem(key, value);
  }
});

window.onload = function () {
  checkStorage();
};
