const addTarefa = document.querySelector('#criar-tarefa');
const clearAll = document.querySelector('#apaga-tudo');
const inpText = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const btnFinalizados = document.querySelector('#remover-finalizados');
const btnSelecionados = document.querySelector('#remover-selecionado');
const btnSalvar = document.querySelector('#salvar-tarefas');
const btnMoverCima = document.querySelector('#mover-cima');
const btnMoverBaixo = document.querySelector('#mover-baixo');

if (typeof (Storage) !== 'undefined') {
  ol.innerHTML = localStorage.lista;
}
// Salva a lista de tarefas
btnSalvar.addEventListener('click', function () {
  if (ol.innerHTML === '') {
    alert('Não existe tarefas para salvar');
  } else {
    localStorage.setItem('lista', ol.innerHTML);
  }
});
// Adicionar tarefas na lista
addTarefa.addEventListener('click', function () {
  if (inpText.value !== '') {
    const li = document.createElement('li');
    const valor = document.getElementById('texto-tarefa').value;
    const text = document.createTextNode(valor);
    li.appendChild(text);// adicionar valor a li
    ol.appendChild(li);// adicionar li em ol
    li.className = 'task';
    inpText.focus();// deixar o cursor na caixa de texto apos adicionar
    inpText.value = '';// limpar a caixa de texto
  }
});
// Ao clicar uma vez sobre a li add a classe
ol.addEventListener('click', function (elemento) {
  // verifica se a classe ja está no elemento clicado
  if (document.querySelector('.selected') == null) {
    elemento.target.classList.add('selected');
  }
});
// Ao clicar duas vezes sobre a li a classe é add ou removida
ol.addEventListener('dblclick', function (elemento) {
  if (elemento.target.classList.contains('completed') === true) {
    elemento.target.classList.remove('completed');
  } else {
    elemento.target.classList.add('completed');
  }
});
// Limpar toda a lista de tarefas
clearAll.addEventListener('click', function () {
  ol.innerHTML = '';
});

// Função que funciona tanto para limpar finalizados tanto selecionados
function clearFimSele(classe) {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    // Verifica se dentro da lista de classes da li contem ou não a classe
    // o metodo contains() chama um resultado em boolean
    if (li[i].classList.contains(classe) === true) {
      li[i].remove();
    }
  }
}
// Botão para limpar finalizados
btnFinalizados.addEventListener('click', function () {
  clearFimSele('completed');
});
// Botão para limpar selecionados
btnSelecionados.addEventListener('click', function () {
  clearFimSele('selected');
});
// Botão de mover para cima o selecionado
btnMoverCima.addEventListener('click', function () {
  const selecionado = document.querySelector('.selected');
  // encontra o primeiro filho da lista e verifica a classe
  if (ol.children[0] === selecionado) {
    alert('Limite alcançado');
  } else {
    // guarda o conteudo do anterior ao selecionado
    const valorAcima = selecionado.previousElementSibling.innerHTML;
    const valorQSobe = selecionado.innerHTML;
    // o conteudo do valor anterior do selecionado recebe o valor do selecionado
    selecionado.previousElementSibling.innerHTML = valorQSobe;
    // o conteudo selecionado recebe o valor do conteudo anterior
    selecionado.innerHTML = valorAcima;
    selecionado.classList.remove('selected');
  }
});
// Botão mover para baixo o selecionado
btnMoverBaixo.addEventListener('click', function () {
  const selecionado = document.querySelector('.selected');
  // encontra o ultimo filho da lista e verifica a classe
  if (ol.children[ol.children.length - 1] === selecionado) {
    alert('Limite alcançado');
  } else {
    // guarda o conteudo do proximo ao selecionado
    const valorAbaixo = selecionado.nextElementSibling.innerHTML;
    const valorQDesce = selecionado.innerHTML;
    // o conteudo do valor do proximo ao selecionado recebe o valor do selecionado
    selecionado.nextElementSibling.innerHTML = valorQDesce;
    // o conteudo selecionado recebe o valor do proximo conteudo
    selecionado.innerHTML = valorAbaixo;
    selecionado.classList.remove('selected');
  }
});
