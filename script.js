window.onload = function () {
  const text = document.getElementById("texto-tarefa");
  const buttonAdd = document.getElementById("criar-tarefa");

  function recovery() {}

  document.addEventListener("mouseover", hand);

  function hand() {
    let x = document.getElementsByClassName("buttonSend");
    for (let i = 0; i < x.length; i++) {
      x[i].style.cursor = "pointer";
    }
  }

  buttonAdd.addEventListener("click", function () {
    const addList = document.querySelector("#lista-tarefas");
    const text = document.getElementById("texto-tarefa");
    const list = document.createElement("li");
    console.log(list);
    list.innerHTML = text.value;
    addList.appendChild(list);
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
};
