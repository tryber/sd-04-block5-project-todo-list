let addTarefa = document.querySelector('#criar-tarefa');
let clearAll = document.querySelector('#apaga-tudo');
let inpText = document.querySelector('#texto-tarefa');
let ol = document.querySelector('#lista-tarefas');
let btnFinalizados = document.querySelector('#remover-finalizados');
let btnSelecionados = document.querySelector('#remover-selecionado');
let btnSalvar = document.querySelector('#salvar-tarefas');
let btnMoverCima = document.querySelector('#mover-cima');
let btnMoverBaixo = document.querySelector('#mover-baixo');

if (typeof (Storage) !== "undefined") {
  ol.innerHTML = localStorage.lista;
}

btnSalvar.addEventListener('click', function () {
  if (ol.innerHTML == '') {
    alert('Não existe tarefas para salvar');
  } else {
    localStorage.setItem('lista', ol.innerHTML);
  }
});


//Adicionar tarefas na lista
addTarefa.addEventListener('click', function () {
  if (inpText.value != '') {
    let li = document.createElement('li');
    let valor = document.getElementById('texto-tarefa').value;
    let text = document.createTextNode(valor);
    li.appendChild(text); //adicionar valor a li
    ol.appendChild(li); //adicionar li em ol
    li.className = 'task';
    inpText.focus(); //deixar o cursor na caixa de texto apos adicionar
    inpText.value = ''; //limpar a caixa de texto

  }
});

ol.addEventListener("click", function (e) {
  trocaClass(e, 'selected');
})
ol.addEventListener("dblclick", function (e) {
  trocaClass(e, 'completed');
})

function trocaClass(elemento, classe) {
  if (elemento.target.classList.contains(classe) == true) {
    elemento.target.classList.remove(classe);
  } else {
    elemento.target.classList.add(classe);
  }
}

//Limpar toda a lista de tarefas
clearAll.addEventListener('click', function () {
  ol.innerHTML = '';
});


btnFinalizados.addEventListener('click', function () {
  clearFimSele('completed');

})


btnSelecionados.addEventListener('click', function () {
  clearFimSele('selected');

})
// COLOCANDO TUDO NUMA FUNÇAO:
function clearFimSele(classe) {
  let li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].classList.contains(classe) == true) {
      li[i].remove();
    }
  }

}
