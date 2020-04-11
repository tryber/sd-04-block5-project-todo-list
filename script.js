let ol, item, createdLi, textValue, btnTarefa, inpText, paragraph;

ol = document.querySelector("#lista-tarefas");
btnTarefa = document.getElementById("criar-tarefa");
inpText = document.getElementById("texto-tarefa");
textValue = document.createTextNode(inpText.value);
createdLi = document.createElement("li");
item = document.getElementsByTagName("li");
paragraph = document.createElement("p");
clearAll = document.getElementById("apaga-tudo");

btnTarefa.addEventListener("click", function () {
  if (inpText.value === "") {
    alert("Nenhuma tarefa adicionada");
  } else {
    for (let i = 0; i < 10; i += 1) {
      createdLi.className = "task";
      ol.appendChild(createdLi);
      item[i] = createdLi.appendChild(paragraph);
      paragraph.insertAdjacentHTML("afterbegin", inpText.value);
      inpText.focus();//deixar o cursor na caixa de texto apos adicionar
      inpText.value = "";
    }
  }
});

 for (let i = 0; i < item.length; i += 1) {
 item[i].addEventListener("click", function () {
   item[i].style.backgroundColor = "rgb(128, 128, 128)";
  })
 };

clearAll.addEventListener("click", function () {
  for (let i = 0; i < number; i +=1){
    item.innerHTML = "";
  }
});
