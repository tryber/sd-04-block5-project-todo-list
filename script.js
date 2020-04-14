// 5) Botão Criar tarefa
const botaoCriarTarefa = document.getElementById("criar-tarefa");

function criarTarefa() {
  const li = document.createElement("li");
  // li.className = 'taskItem';
  const nomeTarefa = document.getElementById("texto-tarefa").value;
  const texto = document.createTextNode(nomeTarefa);
  li.appendChild(texto);
  if (nomeTarefa === "") {
    alert("Você se esqueceu de digitar a tarefa!");
  } else {
    document.getElementById("lista-tarefas").appendChild(li);
  }
  document.getElementById("texto-tarefa").value = "";
}

botaoCriarTarefa.addEventListener("click", criarTarefa);

// 8) Mudando o Backgound
const tarefa = document.getElementById("lista-tarefas");
tarefa.addEventListener("click", (event) => {
  if (document.querySelector(".selected") !== null) {
    document.querySelector(".selected").classList.remove("selected");
    event.target.classList.add("selected");
  } else {
  event.target.classList.add("selected");
}});

// 9) Riscar tarefas completadas
const tarefaListada = document.getElementById("lista-tarefas");
tarefaListada.addEventListener("dblclick", (event) => {
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed");
  } else {
    event.target.classList.add("completed");
  }
});

// 10) botão apaga tudo
const apagaTudo = document.getElementById("apaga-tudo");
apagaTudo.addEventListener("click", function () {
  const tarefas = document.querySelectorAll("li");
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefaListada.removeChild(tarefas[i]);
  }
});

// 11) Botão Remover Finalizados
const removerFinalizadas = document.getElementById("remover-finalizados");
removerFinalizadas.addEventListener("click", function () {
  const tarefas = document.querySelectorAll("li");
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains("completed")) {
      tarefaListada.removeChild(tarefas[i]);
    }
  }
});

// Bônus) Botão Remover Selecionado
const removerSelecionado = document.getElementById("remover-selecionado");
removerSelecionado.addEventListener("click", function () {
  const tarefas = document.querySelectorAll("li");
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains("selected")) {
      tarefaListada.removeChild(tarefas[i]);
    }
  }
});

// Bônus) Move up
const moverCima = document.querySelector('.mover-cima');

moverCima.addEventListener("click", function() {
  const valorAnterior = document.querySelector('.selected').previousElementSibling.innerHTML;
  const valorSelected = document.querySelector('.selected').innerHTML;
  document.querySelector('.selected').innerHTML = valorAnterior;
  document.querySelector('.selected').previousElementSibling.innerHTML = valorSelected;
  document.querySelector('.selected').classList.remove('selected');
});



// Bônus) Move down
const moverBaixo = document.querySelector('.mover-baixo');

moverBaixo.addEventListener("click", function() {
  const valorPosterior = document.querySelector('.selected').nextElementSibling.innerHTML;
  const valorSelected = document.querySelector('.selected').innerHTML;
  document.querySelector('.selected').innerHTML = valorPosterior;
  document.querySelector('.selected').nextElementSibling.innerHTML = valorSelected;
  document.querySelector('.selected').classList.remove('selected');
});
