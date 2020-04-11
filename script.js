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

// 8) Mudando o Backgoung
const tarefa = document.getElementById('lista-tarefas');
tarefa.addEventListener('click', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
});

// 9) Riscar tarefas completadas
tarefa.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

