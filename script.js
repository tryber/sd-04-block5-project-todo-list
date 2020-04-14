const btnTarefa = document.querySelector('#criar-tarefa');
const btnApagaTudo = document.querySelector('#apaga-tudo');
const btnApagaFinalizado = document.querySelector('#remover-finalizados');
const btnApagaSelecionado = document.querySelector('#remover-selecionado');
const listaAdiciona = document.getElementById('lista-tarefas');
let ol = document.querySelector('ol');

btnTarefa.addEventListener('click', function(){
    let li = document.createElement('li');
    let inputValue = document.getElementById('texto-tarefa').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert('Você deve escrever algo');
    } else {
      document.getElementById('lista-tarefas').appendChild(li);
    }
    document.getElementById('texto-tarefa').value = "";
})

ol.addEventListener('dblclick', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
}, false);

ol.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('selected');
  }
}, false);

btnApagaTudo.addEventListener('click', function(){
  const liNode = document.querySelectorAll('li');
  for (let i = 0; i < liNode.length; i = 1 + i) {
    document.getElementById('lista-tarefas').removeChild(liNode[i]);
  }
})

btnApagaFinalizado.addEventListener('click', function(){
  let liNode = document.querySelectorAll('li');
  for ( let i = 0; i < liNode.length; i += 1){
    if(liNode[i].classList.contains('completed')){
      document.getElementById('lista-tarefas').removeChild(liNode[i]);
    }
  }
})

btnApagaSelecionado.addEventListener('click', function(){
  let liNode = document.querySelectorAll('li');
  for ( let i = 0; i < liNode.length; i += 1){
    if(liNode[i].classList.contains('selected')){
      document.getElementById('lista-tarefas').removeChild(liNode[i]);
    }
  }
})

const btnMoverPraCima = document.querySelector('#mover-cima');
const btnMoveBaixo = document.querySelector('#mover-baixo');

btnMoverPraCima.addEventListener('click', function () {
  const itemSelecionado = document.querySelector('.selected');
  const itemAnterior = itemSelecionado.previousElementSibling;
  const backup = itemAnterior.innerText;
  if (itemAnterior) {
    itemAnterior.innerText = itemSelecionado.innerText;
    itemSelecionado.innerText = backup;
    itemAnterior.style.backgroundColor = 'rgb(128,128,128)';
    itemSelecionado.style.backgroundColor = 'white';
    itemAnterior.classList.add('selected');
    itemSelecionado.classList.remove('selected');
  }
});

btnMoveBaixo.addEventListener('click', function () {
  const itemSelecionado = document.querySelector('.selected');
  const itemPosterior = itemSelecionado.nextElementSibling;
  const backup = itemPosterior.innerText;
  if (itemPosterior) {
    itemPosterior.innerText = itemSelecionado.innerText;
    itemSelecionado.innerText = backup;
    itemPosterior.style.backgroundColor = 'rgb(128,128,128)';
    itemSelecionado.style.backgroundColor = 'white';
    itemPosterior.classList.add('selected');
    itemSelecionado.classList.remove('selected');
  }
});