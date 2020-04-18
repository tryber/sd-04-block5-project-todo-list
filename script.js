let text = document.getElementById("texto-tarefa");
// let buttonAdd = document.getElementById("criar-tarefa");

function recovery() {}


document.addEventListener("mouseover", mao);

function mao() {
  let x = document.getElementsByClassName("buttonSend");
  for (let i = 0; i < x.length; i++) {
    x[i].style.cursor = "pointer";
  }
}
