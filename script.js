const butAddTask = document.getElementById('criar-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const inptasks = document.getElementById('texto-tarefa');

function behaviors() {
  butAddTask.addEventListener('click', function () {
    const txtTask = document.getElementById('texto-tarefa').value;

    if (txtTask !== '') {
      const li = document.createElement('li');

      olTasks.appendChild(li).innerText = txtTask;

      inptasks.value = '';
    }
  });
}

window.onload = function () {
  behaviors();
};
