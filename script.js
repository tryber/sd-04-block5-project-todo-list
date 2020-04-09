const btnAdicionaLI = document.getElementById('criar-tarefa');
const textAdiciona = document.getElementById('texto-tarefa');
const listaAdiciona = document.getElementById('lista-tarefas');

btnAdicionaLI.addEventListener('click', () => {
  if (textAdiciona.value) {
    const nodeLi = document.createElement('li');
    const nodeText = document.createTextNode(textAdiciona.value);
    nodeLi.appendChild(nodeText);
    nodeLi.setAttribute('id', 'lista-li');
    listaAdiciona.appendChild(nodeLi);
    textAdiciona.value = '';
  }
});

listaAdiciona.addEventListener('click', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
});

listaAdiciona.addEventListener('ondblclick', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
});


listaAdiciona.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
