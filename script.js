const elTexto = document.getElementById("texto-tarefa")
const btnTarefa = document.getElementById("criar-tarefa")
const elLista = document.getElementsByTagName("li")
const btnClear = document.getElementById("apaga-tudo")
const btnRemoveCompleted = document.getElementById("remover-finalizados")
const btnsalvarTarefa = document.getElementById("salvar-tarefas")


// Funcao parar criar uma nova tarefa
function createTask() {
    let insertList = document.getElementsByTagName("ol")[0]
    let valor = elTexto.value;
    let tarefa = document.createElement("li")
    tarefa.innerHTML = valor
    tarefa.addEventListener("click", checkItem)
    tarefa.addEventListener("dblclick", checkComplete)
    insertList.appendChild(tarefa)
    elTexto.value = "";
}

btnTarefa.addEventListener("click", createTask); //cria uma nova tarefa
btnClear.addEventListener("click", clearAll); //limpa os itens da lista
btnRemoveCompleted.addEventListener("click", removeCompleted); //remove finalizados
btnsalvarTarefa.addEventListener("click", saveTasks); //salva as tarefas no localstorage


// remover selecao dos outros itens
// Aplicar selecao do item clicado
function checkItem(event) {
    // identifica o item
    let item = event.target;
    // verifica se ele ja esta selecionado
    let isActive = item.classList.contains('active');
    // aplica selecao caso ele nao estiver ja selecionado
    if (isActive === false) {
        item.classList.add("active")
    } else {
        item.classList.remove("active")
    }
}


function checkComplete(event) {
    let item = event.target;
    let isComplete = item.classList.contains("completed")
    if (isComplete === false) {
        item.classList.add("completed")
    } else {
        item.classList.remove("completed")
    }
}

function clearAll(event) {
    let item = document.getElementsByTagName("ol")
    for (let i = 0; i < item.length; i++) {
        item[i].innerHTML = "";
    }
}

function removeCompleted(event) {
    let list = document.getElementsByTagName("li")
    for (let i = 0; i < list.length; i++) {
        if (list[i].className == "completed") {
            list[i].remove("li")
        }
    }
}    

function saveTasks (event) {
    // let item = document.getElementsByClassName("order-list")
    // console.log(item.innerHTML)
    // localStorage.setItem('list', )

    var conteudo = document.querySelectorAll(".order-list li").map(function(){
        return {
           classes: this.className,
           html: this.innerHTML
        } 
    }).get();
    console.log(conteude)
    localStorage.setItem('tasks', JSON.stringify(conteudo));
}

