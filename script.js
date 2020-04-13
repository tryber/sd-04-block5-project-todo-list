let addTarefa = document.getElementById("#texto-tarefa");
let createOrdenada = document.createElement("li");
let listaOrdenada = document.querySelector("ol");
let lista = document.querySelectorAll("li");


function createLi(){
    listaOrdenada.appendChild(createOrdenada);
    for( let i = 0; i < listaOrdenada.length; i++ ) {
        addTarefa = addEventListener('input', function(){
        lista[lista.length].innerHTML = 'addTarefa.value';
    }
)}
}
