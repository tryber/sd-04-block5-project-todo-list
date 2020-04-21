//  tarefas
const lista = document.getElementById('lista-tarefas');
//  verificar se há alguma lista salva anteriormente no local.
//  e se houver, gerar a lista salva
if (typeof Storage !== 'undefined') {
  lista.innerHTML = localStorage.lista;
}
//  botoes
const btnCriar = document.getElementById('criar-tarefa');
const btnApagaSel = document.getElementById('remover-selecionado');
const btnApagaFin = document.getElementById('remover-finalizados');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnCima = document.getElementById('mover-cima');
const btnBaixo = document.getElementById('mover-baixo');
const btnSalvarTarefas = document.getElementById('salvar-tarefas');
//  eventos relacionados a lista
//  selecionar tarefa
lista.addEventListener('click', function () {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
});
//  concluir tarefa
lista.addEventListener('dblclick', function () {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
//  criar tarefa
btnCriar.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa');
  const item = document.createElement('li');
  item.innerHTML = tarefa.value;
  lista.appendChild(item);
  tarefa.value = '';
});
//  apagar selecionado
btnApagaSel.addEventListener('click', () => {
  const tarefaSel = document.querySelector('.selected');
  lista.removeChild(tarefaSel);
});
//  apagar concluidos
btnApagaFin.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('completed')) {
      lista.removeChild(tarefas[i]);
    }
  }
});
//  apagar tudo
btnApagaTudo.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    lista.removeChild(tarefas[i]);
  }
});
//  mover tarefa para cima
btnCima.addEventListener('click', function () {
  const tarefaSel = document.querySelector('.selected');
  const acima = tarefaSel.innerHTML;
  const abaixo = tarefaSel.previousElementSibling.innerHTML;
  tarefaSel.previousElementSibling.innerHTML = acima;
  tarefaSel.previousElementSibling.className = 'selected';
  tarefaSel.innerHTML = abaixo;
  tarefaSel.classList.remove('selected');
});
//  mover tarefa para baixo
btnBaixo.addEventListener('click', function () {
  const tarefaSel = document.querySelector('.selected');
  const acima = tarefaSel.nextElementSibling.innerHTML;
  const abaixo = tarefaSel.innerHTML;
  tarefaSel.nextElementSibling.innerHTML = abaixo;
  tarefaSel.nextElementSibling.className = 'selected';
  tarefaSel.innerHTML = acima;
  tarefaSel.classList.remove('selected');
});
//  salvar lista localmente
btnSalvarTarefas.addEventListener('click', function () {
  localStorage.lista = document.getElementById('lista-tarefas').innerHTML;
});
