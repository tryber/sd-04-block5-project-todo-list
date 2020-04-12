let botaoCriar = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');

function criarTarefa() {
  let inputTarefa = document.getElementById('texto-tarefa').value;
  let item = document.createElement('li');
  item.innerHTML = inputTarefa;
  lista.appendChild(item);
  document.getElementById('texto-tarefa').value = '';
}
function limparTarefas() {
  document.getElementById("lista-tarefas").innerHTML = '';
}
function limparTarefasConcluidas() {
  let tarefasCompletadas = document.querySelectorAll(".completed");
  for (let i = 0; i < tarefasCompletadas.length; i += 1) {
    document.getElementById("lista-tarefas").removeChild(tarefasCompletadas[i]);
  }
}

window.onload = function () {

  botaoCriar.addEventListener('click', criarTarefa);
  document.getElementById('apaga-tudo').addEventListener('click', limparTarefas);
  document.getElementById('remover-finalizados').addEventListener('click', limparTarefasConcluidas);

  document.getElementById("lista-tarefas").addEventListener("click", function (event) {
    if (event.target && event.target.nodeName == "LI") {
      event.target.style.backgroundColor = "rgb(128, 128, 128)";
    }
  });

  document.getElementById("lista-tarefas").addEventListener("dblclick", function (event) {
    if (event.target && event.target.nodeName == "LI") {
      if (event.target.className == "completed") {
        event.target.classList.remove('completed')
      } else event.target.classList.add('completed');
    }
  });

}
  // --> other ways to add cursor events <--
  // document.addEventListener("mouseover", function (event) {
  //   if (event.target && event.target.nodeName == "BUTTON") {
  //     event.target.style.cursor = 'pointer';
  //   }
  // });

  // document.getElementById("lista-tarefas").addEventListener("mouseover", function (event) {
  //   if (event.target && event.target.nodeName == "LI") {
  //     event.target.style.cursor = 'pointer';
  //   }
  // });


