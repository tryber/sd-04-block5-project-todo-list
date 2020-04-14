const textoTarefa = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
let tarefa = "";




btn.addEventListener('click', function (){
  const criarTarefa = document.createElement("LI")
  tarefa = document.createTextNode(textoTarefa.value);
  criarTarefa.appendChild(tarefa);
  lista.appendChild(criarTarefa);
});