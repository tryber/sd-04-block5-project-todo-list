let text = document.getElementById("texto-tarefa");
let buttonAdd = document.getElementById("criar-tarefa");

function recovery() {}
// buttonAdd.style.cursor = "pointer"

document.addEventListener("mouseover", mao);

function mao() {
  document.getElementById("criar-tarefa").style.cursor = "pointer";
}

document.addEventListener("mouseover", mao);

function mao() {
  let x = document.getElementsByClassName("buttonSend");
  for (let i = 0; i < x.length; i++) {
    x[i].style.cursor = "pointer";
  }
}
