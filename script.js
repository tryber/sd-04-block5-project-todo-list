const criarTarefa = document.getElementById("criar-tarefa");
const tarefa = document.getElementById("texto-tarefa")
const ol = document.getElementById("lista-tarefas")
const deleteTarefas = document.getElementById('apaga-tudo');
const li = document.querySelectorAll("li");


criarTarefa.addEventListener("click", addLi);
function addLi() {
    let li = document.createElement('li');
    li.innerHTML = tarefa.value;
    li.className = "pointer";
    ol.appendChild(li);
    tarefa.value = '';
}

deleteTarefas.addEventListener('click', deleteAll);
function deleteAll() {
    ol.innerHTML = "";
}













// let addTarefa = document.getElementById("#texto-tarefa");
// let listaOrdenada = document.querySelector("ol");
// let lista = document.querySelectorAll("li");
// const buttonInsert = document.getElementById("criar-tarefa");


// function createLi(tarefa){
//     let li = document.createElement("li");
//     li.innerHTML = tarefa;
//     listaOrdenada.appendChild(li);   
// }

// buttonInsert.addEventListener('click', function() {
//     createLi(addTarefa.value);
// })