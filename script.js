const butAddTask = document.getElementById('criar-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const inptasks = document.getElementById('texto-tarefa');

function behaviors() {
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

      olTasks.appendChild(li).innerText = txtTask;
      inptasks.value = '';
    }
  });
}

window.onload = function () {
  behaviors();
};
