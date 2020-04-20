var text = document.getElementById("texto-tarefa");
var buttonAdd = document.getElementById("criar-tarefa");
var buttonClearAll = document.getElementById("apaga-tudo");
var list = document.createElement("li");
var addList = document.querySelector("#lista-tarefas");

var selectItem = document.querySelector("ol");

// FUNÇÃO MÃOZINHA
function hand() {
  let x = document.getElementsByClassName("buttonSend");
  for (let i = 0; i < x.length; i++) {
    x[i].style.cursor = "pointer";
  }
}
document.addEventListener("mouseover", hand);

// BOTÃO ADD ITENS NA LISTA
buttonAdd.addEventListener("click", function () {
  var addList = document.querySelector("#lista-tarefas");
  var text = document.getElementById("texto-tarefa");
  var list = document.createElement("li");
  console.log(list);
  list.innerHTML = text.value;
  addList.appendChild(list);
  list.classList.add("list");
  text.value = null;

  list.addEventListener("click", pintaFundo);
  list.addEventListener("dblclick", riscaLista);
});

// function addItem() {
//   const addList = document.querySelector("#lista-tarefas");
//   const text = document.getElementById("texto-tarefa");
//   const list = document.createElement("li");
//   console.log(list);
//   list.innerHTML = text.value;
//   addList.appendChild(list);
//   text.value = "";
// }

// buttonAdd.addEventListener("click",addItem);

// BOTÃO APAGA TODA A LISTA
function clearList() {
  let listClear = document.querySelectorAll(".list");
  for (let i = 0; i < listClear.length; i++) {
    addList.removeChild(listClear[i]);
  }
}
buttonClearAll.addEventListener("click", clearList);

// FUNÇÃO PINTA A LISTA
function pintaFundo(event) {
  const selecionado = event.target;
  selecionado.classList.add("mystyle");
}

// FUNÇÃO RISCA A LISTA E DESMARCA A LISTA
function riscaLista(event) {
  var risca = event.target;
  risca.classList.add("completed");

  risca.addEventListener("dblclick", function (event) {
    var desmarca = event.target;
    desmarca.classList.toggle("completed");
  });
}

