const btnAdicionaLI = document.getElementById('criar-tarefa');
const textAdiciona = document.getElementById('texto-tarefa');
const listaAdiciona = document.getElementById('lista-tarefas');
const apagaLista = document.getElementById('apaga-tudo');
const apagaCompleto = document.getElementById('remover-finalizados');
const listaCompleta = document.getElementsByClassName('completed');
const salvarTarefas = document.getElementById('salvar-tarefas');
const moverBaixo = document.getElementById('mover-baixo');
const moverCima = document.getElementById('mover-cima');

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
  while (listaCompleta.length > 0) {
    listaCompleta[0].remove();
  }
});

salvarTarefas.addEventListener('click', () => {
  localStorage.listaAdiciona = document.getElementById('lista-tarefas').innerHTML;
});

moverBaixo.addEventListener('click', () => {
  const itemMVBaixo = document.querySelector('.selected');
  const paraBaixo = itemMVBaixo.innerHTML;
  const paraCima = itemMVBaixo.nextElementSibling.innerHTML;
  itemMVBaixo.nextElementSibling.innerHTML = paraBaixo;
  itemMVBaixo.nextElementSibling.className = 'selected';
  itemMVBaixo.innerHTML = paraCima;
  itemMVBaixo.classList.remove('selected');
});

moverCima.addEventListener('click', () => {
  const itemMVCima = document.querySelector('.selected');
  const paraCima = itemMVCima.innerHTML;
  const paraBaixo = itemMVCima.previousElementSibling.innerHTML;
  itemMVCima.previousElementSibling.innerHTML = paraCima;
  itemMVCima.previousElementSibling.className = 'selected';
  itemMVCima.innerHTML = paraBaixo;
  itemMVCima.classList.remove('selected');
});
