const elTexto = document.getElementById("texto-tarefa")
const btnTarefa = document.getElementById("criar-tarefa")
const elLista = document.getElementsByTagName("li")
const btnClear = document.getElementById("apaga-tudo")
const btnRemoveCompleted = document.getElementById("remover-finalizados")
const btnsalvarTarefa = document.getElementById("salvar-tarefas")


//  funcao criar uma nova tarefa
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

// funcao selecionar item e alterar cor de fundo 
function checkItem(event) {
	let item = event.target;
	let isActive = item.classList.contains('active');
	if (isActive === false) {
		item.classList.add("active")
	} else {
		item.classList.remove("active")
	}
}

// funcao riscar tarefa completa
function checkComplete(event) {
	let item = event.target;
	let isComplete = item.classList.contains("completed")
	if (isComplete === false) {
		item.classList.add("completed")
	} else {
		item.classList.remove("completed")
	}
}

// funcao para limpar todos os itens
function clearAll(event) {
	let item = document.getElementsByTagName("ol")
	for (let i = 0; i < item.length; i++) {
		item[i].innerHTML = "";
	}
}

// funcao remover apenas itens marcados como completo
function removeCompleted(event) {
	let list = document.getElementsByTagName("li")
	for (let i = 0; i < list.length; i++) {
		if (list[i].className == "completed") {
			list[i].remove("li")
		}
	}
}


btnTarefa.addEventListener("click", createTask); //cria uma nova tarefa
btnClear.addEventListener("click", clearAll); //limpa os itens da lista
btnRemoveCompleted.addEventListener("click", removeCompleted); //remove finalizados
btnsalvarTarefa.addEventListener("click", saveTasks); //salva as tarefas no localstorage