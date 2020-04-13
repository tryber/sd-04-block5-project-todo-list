const botaoAdiciona = document.getElementById('criar-tarefa');

function adicionaCor(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function acrescentaItem() {
  const lista = document.createElement('li');
  const textoTarefa = document.getElementById('texto-tarefa').value;
  lista.innerHTML = textoTarefa;
  lista.addEventListener('click', adicionaCor);
  document.getElementById('lista-tarefas').appendChild(lista);
  document.getElementById('texto-tarefa').value = '';
}

botaoAdiciona.addEventListener('click', acrescentaItem);

const botaoApaga = document.getElementById('apaga-tudo');

function apagaItens() {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i = 1 + i) {
    document.getElementById('lista-tarefas').removeChild(li[i]);
  }
}

botaoApaga.addEventListener('click', apagaItens);

// const botoes = document.querySelectorAll('button');
// for (let i = 0; i < botoes.length; i = 1 + i) {
//   botoes[i].addEventListener('mouseover', function () {
//     botoes[i].style.cursor = 'pointer';
//   });
// }
