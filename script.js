
let addTarefa = document.querySelector("#criar-tarefa");
let clearAll = document.querySelector("#apaga-tudo");
let inpText = document.querySelector("#texto-tarefa");
let ol = document.querySelector("#lista-tarefas");
let item = document.getElementsByTagName("li");
let btnClearItem = document.querySelector("remover-selecionado");


//Adicionar tarefas na lista
addTarefa.addEventListener("click", function () {
  if (inpText.value != "") {
    let li = document.createElement('li');
    let valor = document.getElementById("texto-tarefa").value;
    let text = document.createTextNode(valor);
    li.appendChild(text); //adicionar valor a li
    ol.appendChild(li); //adicionar li em ol
    li.className = "task";
    inpText.focus(); //deixar o cursor na caixa de texto apos adicionar
    inpText.value = ""; //limpar a caixa de texto
  }
});

//Limpar toda a lista de tarefas
clearAll.addEventListener("click", function () {
  ol.innerHTML = "";
});

//Adicionar cor no item selecionado
for (let i = 0; i < item.length; i += 1) {
  item[i].addEventListener("click", function () {
    item[i].classList.add("selected");
  });
};

//Remove o item selecionado
for (let i = 0; i < item.length; i += 1) {
  btnClearItem.addEventListener("click", function () {
    if (item[i].className == "selected") {
      item[i].innerHTML = "";
    }
  });
};
