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

  for (let i = 0; i < document.querySelectorAll("button").length; i += 1) {
    document.querySelectorAll("button")[i].addEventListener("mouseover", function (e) {
      if (e.target && e.target.nodeName == "BUTTON") {
        document.querySelectorAll("button")[i].style.cursor = 'pointer';
      }
    });
  }

  

}


