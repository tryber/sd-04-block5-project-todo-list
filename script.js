//CAIXA DE TEXTO
const inputTask = document.querySelector("#texto-tarefa");

//BOTÃO CRIAR
const buttonCreate = document.querySelector("#criar-tarefa");
const buttonErase = this.document.querySelector("#apaga-tudo");
const removeCompleted = this.document.querySelector("#remover-finalizados");
const moverCima = this.document.querySelector("#mover-cima"); //mover para cima
const moverBaixo = this.document.querySelector("#mover-baixo"); //mover para baixo
const lista = this.document.querySelector("#lista-tarefas");
const toDoList = document.querySelector("#lista-tarefas");

moverCima.addEventListener("click", moverParaCima);
moverBaixo.addEventListener("click", moverParaBaixo);

function moverParaCima() {
  const item = document.querySelector(".selected");
  const itemBefore = item.previousElementSibling;
  lista.insertBefore(item, itemBefore);
}

function moverParaBaixo() {
  const item = document.querySelector(".selected");
  const itemNext = item.nextElementSibling;
  lista.insertBefore(itemNext, item);
}

//VARIÁVEL DA LISTA

buttonCreate.addEventListener("click", insertItem);
buttonErase.addEventListener("click", apagaTudo);
removeCompleted.addEventListener("click", apagaCompletos);

//FUNÇÃO REMOVE COMPLETOS
function apagaCompletos() {
  let completos = document.querySelectorAll(".completed");
  for (i = 0; i < completos.length; i++) {
    lista.removeChild(completos[i]);
  }
}

//FUNÇÃO DESTACA ITEM
function pintaFundo(event) {
  const selecionado = event.target;
  selecionado.classList.add("selected");
}

//FUNÇÃO PARA RISCAR
function riscada(event) {
  const classes = document.querySelector("li").classList;
  const risco = event.target;
  risco.classList.add("completed");
  risco.addEventListener("dblclick", function () {
    risco.classList.toggle("completed");
  });
}

//FUNÇÃO DE INSERIR ITEM
function insertItem() {
  const listItem = document.createElement("li");
  toDoList.appendChild(listItem);
  listItem.innerText = inputTask.value;
  listItem.classList.add("item");
  inputTask.value = null;

  listItem.addEventListener("click", pintaFundo);
  listItem.addEventListener("dblclick", riscada);
}

//FUNÇÃO APAGA TUDO
function apagaTudo() {
  let lista = document.getElementById("lista-tarefas");
  let itens = document.querySelectorAll("li");
  for (let i = 0; i < itens.length; i++) {
    lista.removeChild(itens[i]);
  }
}

//

//FUNÇÃO DE DESTAQUE CINZA
/*    function highlightItem(){
        const fundoLista = this.document.querySelectorAll("#fundo-lista");

        for (let i = 0; i < fundoLista.length; i++) {
            fundoLista[i].addEventListener('click', function(event){
                let selectedItem = event.target;
                pintaFundo(selectedItem);
            });
        }
    }
*/

//   function pintaFundo(a){
//       a.classList.add('selected');
//       a.addEventListener("click", apagaFundo);
//       let selecionado = document.querySelector(".selected");
//       selecionado.classList.remove("selected");
//   }

//   highlightItem()

//    function apagaFundo(){
//    document.querySelector(".selected").classList.remove("selected");
//   }
