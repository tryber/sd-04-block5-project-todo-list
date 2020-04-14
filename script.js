const btnTarefa = document.querySelector('#criar-tarefa');
const btnApagaTudo = document.querySelector('#apaga-tudo');
const btnApagaFinalizado = document.querySelector('#remover-finalizados');
const btnApagaSelecionado = document.querySelector('#remover-selecionado')
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

btnMoveBaixo.addEventListener('click', () => {
  const itemMVBaixo = document.querySelector('.selected');
  const paraBaixo = itemMVBaixo.innerHTML;
  const paraCima = itemMVBaixo.nextElementSibling.innerHTML;
  itemMVBaixo.nextElementSibling.innerHTML = paraBaixo;
  itemMVBaixo.nextElementSibling.className = 'selected';
  itemMVBaixo.innerHTML = paraCima;
  itemMVBaixo.classList.remove('selected');
});

btnMoverPraCima.addEventListener('click', () => {
  const itemMVCima = document.querySelector('.selected');
  const paraCima = itemMVCima.innerHTML;
  const paraBaixo = itemMVCima.previousElementSibling.innerHTML;
  itemMVCima.previousElementSibling.innerHTML = paraCima;
  itemMVCima.previousElementSibling.className = 'selected';
  itemMVCima.innerHTML = paraBaixo;
  itemMVCima.classList.remove('selected');
});


ol.addEventListener('click', function(event) {
  let liNode = document.querySelectorAll('li');
  for ( let i = 0; i < liNode.length; i += 1){ 
    if (liNode[i].style.backgroundColor) {
      liNode[i].style.backgroundColor = '';
    }
  }

}, false);