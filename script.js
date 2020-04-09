const btnAdicionaLI = document.getElementById('criar-tarefa');
const textAdiciona = document.getElementById('texto-tarefa');
const listaAdiciona = document.getElementById('lista-tarefas');
const apagaLista = document.getElementById('apaga-tudo');
const apagaCompleto = document.getElementById('remover-finalizados');
const listaCompleta = document.getElementsByClassName('completed');
const salvarTarefas = document.getElementById('salvar-tarefas');

if (typeof Storage !== 'undefined') {
  listaAdiciona.innerHTML = localStorage.listaAdiciona;
}

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

apagaLista.addEventListener('click', () => {
  while (listaAdiciona.firstChild) {
    listaAdiciona.removeChild(listaAdiciona.firstChild);
  }
});

apagaCompleto.addEventListener('click', () => {
    while (listaCompleta.length > 0){
      listaCompleta[0].remove();
    }
});

salvarTarefas.addEventListener('click', () => {
  localStorage.listaAdiciona = document.getElementById('lista-tarefas').innerHTML;
});