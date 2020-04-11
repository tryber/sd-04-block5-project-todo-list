// 5) Botão Criar tarefa

let botaoCriarTarefa = document.getElementById('criar-tarefa');

function criarTarefa() {
  let li = document.createElement("li");
  //li.className = 'taskItem';
  let nomeTarefa = document.getElementById("texto-tarefa").value;
  let texto = document.createTextNode(nomeTarefa);
  li.appendChild(texto);
  if (nomeTarefa === '') {
    alert("Você se esqueceu de digitar a tarefa!");
    } else {
      document.getElementById("lista-tarefas").appendChild(li);
  }
  document.getElementById("texto-tarefa").value = "";
}

botaoCriarTarefa.addEventListener('click', criarTarefa);

//

