window.onload = function () {
  const text = document.getElementById("texto-tarefa");
  const buttonAdd = document.getElementById("criar-tarefa");
  const buttonClearAll = document.getElementById("apaga-tudo");
  // const list = document.createElement("li");
  const addList = document.querySelector("#lista-tarefas");

  function recovery() {}

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

  // let paintList = function panitList() {};
};
