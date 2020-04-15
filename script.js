window.onload = function () {
  const btnAdd = document.getElementById('criar-tarefa');
  const olTodo = document.getElementById('lista-tarefas');
  const txtTodo = document.getElementById('texto-tarefa');
  const btnRemoveAll = document.getElementById('apaga-tudo');
  const btnRemoveDone = document.getElementById('remover-finalizados');

  btnAdd.addEventListener('click', function () {
    const liNew = document.createElement('li');
    liNew.innerText = txtTodo.value;
    olTodo.appendChild(liNew);
    txtTodo.value = '';
    liNew.addEventListener('click', function () {
      this.style.background = 'rgb(128, 128, 128)';
    });
    liNew.addEventListener('dblclick', function () {
      this.classList.toggle('completed');
    });
  });

  btnRemoveAll.addEventListener('click', function () {
    const liAll = document.getElementsByTagName('li');
    [...liAll].forEach((element) => {
      olTodo.removeChild(element);
    });
  });

  btnRemoveDone.addEventListener('click', function () {
    const liDone = document.getElementsByClassName('completed');
    [...liDone].forEach((element) => {
      olTodo.removeChild(element);
    });
  });
};
