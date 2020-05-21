const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const caixaDeTexto = document.getElementById('texto-tarefa');
const apagarTudo = document.getElementById('apaga-tudo');
const apagarItem = document.getElementById('remover-finalizados');

function addItem() {
  const li = document.createElement('li');
  li.innerHTML = caixaDeTexto.value;
  lista.appendChild(li);
  caixaDeTexto.value = null;
}
function alterarFundo(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
function removerTudo() {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    lista.removeChild(li[i]);
  }
}
function apagarItens() {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].classList.contains('completed')) {
      lista.removeChild(li[i]);
    }
  }
}
function riscado(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  }
  else {
    event.target.classList.add('completed');
  }
}

criarTarefa.addEventListener('click', addItem);
lista.addEventListener('click', alterarFundo);
lista.addEventListener('dblclick', riscado);
apagarTudo.addEventListener('click', removerTudo);
apagarItem.addEventListener('click', apagarItens);
