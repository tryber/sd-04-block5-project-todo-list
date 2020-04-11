window.onload = function () {

  let botaoCriar = document.getElementById('criar-tarefa');
  let lista = document.getElementById('lista-tarefas');

  botaoCriar.addEventListener('click', criarTarefa);


  function criarTarefa() {
    let inputTarefa = document.getElementById('texto-tarefa').value;
    let item = document.createElement('li');
    item.innerHTML = inputTarefa;
    lista.appendChild(item);
    document.getElementById('texto-tarefa').value = '';
  }

  document.addEventListener("mouseover", function (event) {
    if (event.target && event.target.nodeName == "BUTTON") {
      event.target.style.cursor = 'pointer';
    }
  });

  document.getElementById("lista-tarefas").addEventListener("mouseover", function (event) {
    if (event.target && event.target.nodeName == "LI") {
      event.target.style.cursor = 'pointer';
    }
  });

  document.getElementById("lista-tarefas").addEventListener("click", function (event) {
    if (event.target && event.target.nodeName == "LI") {
      event.target.style.backgroundColor = "rgb(128, 128, 128)";
    }
  });


}


