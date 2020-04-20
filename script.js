const text = document.getElementById("texto-tarefa");
const buttonAdd = document.getElementById("criar-tarefa");
const buttonClearAll = document.getElementById("apaga-tudo");
const list = document.createElement("li");
const addList = document.querySelector("#lista-tarefas");
// const listCreate = document.querySelectorAll(".list");

const selectItem = document.querySelector("ol");

//FUNÇÃO MÃOZINHA
function hand() {
  let x = document.getElementsByClassName("buttonSend");
  for (let i = 0; i < x.length; i++) {
    x[i].style.cursor = "pointer";
  }
}
document.addEventListener("mouseover", hand);

// BOTÃO ADD ITENS NA LISTA
buttonAdd.addEventListener("click", function () {
  const addList = document.querySelector("#lista-tarefas");
  const text = document.getElementById("texto-tarefa");
  const list = document.createElement("li");
  console.log(list);
  list.innerHTML = text.value;
  addList.appendChild(list);
  list.classList.add("list");
  text.value = null;

  list.addEventListener("click",pintaFundo);
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

//BOTÃO APAGA TODA A LISTA
function clearList() {
  let listClear = document.querySelectorAll(".list");
  for (let i = 0; i < listClear.length; i++) {
    addList.removeChild(listClear[i]);
  }
}
buttonClearAll.addEventListener("click", clearList);

//   var paintListn = document.getElementsByClassName("list");
//  list.addEventListener("click", function () {
//    for (let i = 0; i < paintListn.length; i++) {
//     paintListn[i].style.backgroundColor = rgb(180 , 10 , 220 );
//    console.log(paintListn);
//    }
//  })

// function pintaLista() {
//   console.log(true);

// }
// selectItem.addEventListener("click", pintaLista);
// const addList = document.querySelector("#lista-tarefas");
 const listCreate = document.querySelectorAll(".list");

// const selectItem = document.querySelector("ol");

function pintaFundo(event) {
  const selecionado = event.target;
  selecionado.classList.add("mystyle");
  } 

