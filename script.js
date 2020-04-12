const adicionar = document.querySelector('#criar-tarefa');

adicionar.addEventListener('click', function () {
  const item = document.querySelector('#texto-tarefa');
  const lista = document.createElement('li');
  lista.innerText = item.value;

  document.querySelector('#lista-tarefas').appendChild(lista);

  lista.addEventListener('mouseover', function () {
    lista.style.backgroundColor = 'rgb(128,128,128)';
  });

  lista.addEventListener('mouseleave', function () {
    lista.style.backgroundColor = 'white';
  });
});
