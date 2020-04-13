const btnTarefa = document.querySelector('#criar-tarefa');
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

const btnApagaTudo = document.querySelector('#apaga-tudo');
btnApagaTudo.addEventListener('click', function(){
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i = 1 + i) {
    document.getElementById('lista-tarefas').removeChild(li[i]);
  }
})
