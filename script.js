const ol = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');
const button1 = document.querySelector('#criar-tarefa');
const button2 = document.querySelector('#apaga-tudo');

// Adicionando função de add tarefas no button1
function addTask() {
  if(input.value != ""){
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = ""
  }
}
button1.addEventListener('click', addTask)

// Função apaga tudo no button2
function clear (){
  while (ol.firstChild) {
    ol.firstChild.remove();
  }
}
button2.addEventListener('click', clear)

// Funda cinza para as tarefas selecionadas
ol.addEventListener('click', function (e) {
  e.target.classList.toggle('gray');
})

// Adicionanda a classe para as tarifas completadas que riscam
ol.addEventListener('dblclick', function (e) {
  e.target.classList.toggle('completadas');
});
