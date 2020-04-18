const botaoAdiciona = document.getElementById('criar-tarefa');

function adicionaCor(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.className = 'selected';
}


function tarefaFinalizada(event) {
  if (event.target.className === 'completed') {
    event.target.className = 'none';
  if (event.target.className === 'completed selected') {
    event.target.className = 'selected'
  }
  } else {
    event.target.className = 'completed selected';
  }
}

function acrescentaItem() {
  const lista = document.createElement('li');
  const textoTarefa = document.getElementById('texto-tarefa').value;
  lista.innerHTML = textoTarefa;
  lista.addEventListener('click', adicionaCor);
  lista.addEventListener('dblclick', tarefaFinalizada);
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

const botaoRemoveFinalizados = document.getElementById('remover-finalizados');

function removeFinalizados() {
  const finalizados = document.querySelectorAll('.completed');
  if (finalizados) {
    for (let i = 0; i < finalizados.length; i = 1 + i) {
      document.getElementById('lista-tarefas').removeChild(finalizados[i]);
    }
  }
}

botaoRemoveFinalizados.addEventListener('click', removeFinalizados);

// const botoes = document.querySelectorAll('button');
// for (let i = 0; i < botoes.length; i = 1 + i) {
//   botoes[i].addEventListener('mouseover', function () {
//     botoes[i].style.cursor = 'pointer';
//   });
// }
if (typeof (Storage) !== 'undefined') {
  document.getElementById('lista-tarefas').innerHTML = localStorage.list;
}

const botaoSalvar = document.getElementById('salvar-tarefas');
botaoSalvar.addEventListener('click', function () {
  if (document.getElementById('lista-tarefas').innerHTML === '') {
    alert('Não existe dados para salvar!');
  } else {
    localStorage.list = document.getElementById('lista-tarefas').innerHTML;
  }
});

const botaoApagaSelecionado = document.getElementById('remover-selecionado')
botaoApagaSelecionado.addEventListener('click', ApagaSelecionado); 
function ApagaSelecionado() {
  const tarefas = document.querySelectorAll("li");
  let elemento;
  for (let i = 0; i < tarefas.length; i += 1) {
      elemento = tarefas[i];
      if (elemento.className == "completed selected" || elemento.className == "selected") {
        document.getElementById('lista-tarefas').removeChild(elemento);
      }
  }
}