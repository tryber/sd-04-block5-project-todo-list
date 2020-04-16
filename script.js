const textoTarefa = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
let tarefa = "";


btn.addEventListener('click', function (){
  const criarTarefa = document.createElement("LI");
  criarTarefa.className = 'item-lista';
  tarefa = document.createTextNode(textoTarefa.value);
  criarTarefa.appendChild(tarefa);
  lista.appendChild(criarTarefa);
  tarefa = "";
});
lista.addEventListener('click', function (event){
  console.log(event.target);
  if(event.target.className=='item-lista'){
    event.target.className = 'item-lista selected';
  }else if(event.target.className == 'item-lista selected'){
    event.target.className = 'item-lista completed';
  }
});
