window.onload = function () {
  let btnAdd = document.querySelector('#criar-tarefa');
  let list = document.querySelector('#lista-tarefas');
  let tarefa = document.querySelector('#texto-tarefa')


  btnAdd.addEventListener('click', function () {
    if (tarefa.value === '') {
      alert('Digite alguma tarefa!');
    } else {
      let item = document.createElement('li');
      item.innerHTML = tarefa.value;
      list.appendChild(item);
      tarefa.value = ''

    }
  });
}
