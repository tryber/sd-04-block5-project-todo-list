const elTexto = document.getElementById('texto-tarefa');
const btnTarefa = document.getElementById('criar-tarefa');
const btnClear = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const backgroundItem = document.getElementById("lista-tarefas");
const checkCompletedItem = document.querySelectorAll("li");

// >>>>>>>>>>>>
const handleDblClick = () => {
 const item = event.target;
 const isComplete = item.classList.contains('completed');
 if (isComplete === false) {
  item.classList.add('completed');
 } else {
  item.classList.remove('completed');
 }
};
// <<<<<<<<<<<<<<

btnTarefa.addEventListener('click', () => {
 const insertList = document.getElementsByTagName('ol')[0];
 const valor = elTexto.value;
 const tarefa = document.createElement('li');
 // >>>>>>
 tarefa.addEventListener(`dblclick`, handleDblClick);
 // <<<<<<
 tarefa.innerHTML = valor;
 insertList.appendChild(tarefa);
 elTexto.value = '';
});

backgroundItem.addEventListener("click", (event) => {
 const item = event.target;
 const isActive = item.classList.contains('active');
 if (isActive === false) {
  item.classList.add('active');
 } else {
  item.classList.remove('active');
 }
})

// checkCompletedItem.addEventListener('dblclick', (event) => {
//    const item = event.target;
//    const isComplete = item.classList.contains('completed');
//    if (isComplete === false) {
//     item.classList.add('completed');
//    } else {
//     item.classList.remove('completed');
//    }
//   });

btnClear.addEventListener('click', () => {
 const item = document.getElementsByTagName('ol');
 for (let i = 0; i < item.length; i += 1) {
  item[i].innerHTML = '';
 }
});

btnRemoveCompleted.addEventListener("click", () => {
 const list = document.getElementsByTagName('li')
 for (let i = 0; i < list.length; i += 1) {
  if (list[i].className == 'completed') {
   list[i].remove('li')
  }
 }
})
