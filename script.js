const elTexto = document.getElementById('texto-tarefa');
const btnTarefa = document.getElementById('criar-tarefa');
const btnClear = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnRemoveSelected = document.getElementById("remover-selecionado")
const backgroundItem = document.getElementById("lista-tarefas");
const checkCompletedItem = document.querySelectorAll("li");
const button = document.querySelectorAll("button")


// criar tarefa
btnTarefa.addEventListener('click', () => {
 const insertList = document.getElementsByTagName('ol')[0];
 const valor = elTexto.value;
 const tarefa = document.createElement('li');
 tarefa.innerHTML = valor;
 insertList.appendChild(tarefa);
 elTexto.value = '';
});

// alterar fundo pra cinza 
backgroundItem.addEventListener("click", (event) => {
 const item = event.target;
 const isActive = item.classList.contains('active');
 if (isActive === false) {
  item.classList.add('active');
 } else {
  item.classList.remove('active');
 }
});

// cursos pointer
for (let i = 0; i < button.length; i += 1) {
 button[i].style.cursor = 'pointer';
}

// riscar tarefa completa
backgroundItem.addEventListener(`dblclick`, (event) => {
 if (event.target.classList.contains('completed')) {
  event.target.classList.remove('completed');
 } else {
  event.target.classList.add('completed');
 }
});

// limpar itens
btnClear.addEventListener('click', () => {
 const item = document.getElementsByTagName('ol');
 for (let i = 0; i < item.length; i += 1) {
  item[i].innerHTML = '';
 }
});

// remover tarefas finalizadas
btnRemoveCompleted.addEventListener("click", () => {
 const list = document.querySelectorAll('.completed')
 for (let i = 0; i < list.length; i += 1) {
  list[i].parentNode.removeChild(list[i])
 }
});

// remover selecionado
btnRemoveSelected.addEventListener("click", (event) => {
 const a = document.querySelector(".active")
 a.parentNode.removeChild(a)
})
