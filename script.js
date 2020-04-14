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
    event.target.classList.toggle('clicked');
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
    if(liNode[i].classList.contains('clicked')){
      document.getElementById('lista-tarefas').removeChild(liNode[i]);
    }
  }
})

const btnMoverPraCima = document.querySelector('#mover-cima')

btnMoverPraCima.addEventListener('click', function(){
  const liSelected = document.querySelector('.clicked');
  const liBefore = liSelected.previousElementSibling;
  const gate = liBefore.innerText;
  if(liBefore){
  liBefore.innerText = liSelected.innerText;
  liBefore.style.backgroundColor = 'rgb(128,128,128)';
  liBefore.classList.add('clicked');
  liSelected.innerText = gate;
  liSelected.style.backgroundColor = 'white';
  liSelected.classList.remove('clicked');
  }
})

const btnMoveParaBaixo = document.querySelector('#mover-baixo')
btnMoveParaBaixo.addEventListener('click', function () {
  const liSelected = document.querySelector('.clicked');
  const liNext= liSelected.nextElementSibling;
  const gate = liNext.innerText;
  if (liNext) {
    liNext.innerText = liSelected.innerText;
    liSelected.innerText = gate;
    liNext.style.backgroundColor = 'rgb(128,128,128)';
    liSelected.style.backgroundColor = 'white';
    liNext.classList.add('clicked');
    liSelected.classList.remove('clicked');
  }
})

ol.addEventListener('click', function(event) {
  let liNode = document.querySelectorAll('li');
  for ( let i = 0; i < liNode.length; i += 1){ 
    if (liNode[i].style.backgroundColor) {
      liNode[i].style.backgroundColor = '';
    }
  }

}, false);


