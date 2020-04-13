//botão adcicionar tarefa
let criartarefa = document.querySelector("#criar-tarefa");
console.log(criartarefa);

let listaDeTarefas = document.querySelector(".lista-tarefas");

criartarefa.addEventListener("click", function(event){
    let form = document.querySelector("#texto-tarefa");  
    if(form.value == "")
    {
        return;
    } 
    let tarefaLista = form.value;
    montaLista(tarefaLista);
    document.querySelector("#texto-tarefa").value="";
});

listaDeTarefas.addEventListener("dblclick", function(e){
    e.target.classList.toggle("completed");
});

listaDeTarefas.addEventListener("click", function(e){
   e.target.classList.toggle("alteracor");
});

listaDeTarefas.addEventListener("mouseover", function(e){
    e.target.classList.toggle("pointer");
 });

//Adiciona a tarefa na lista com a classe (lista-tarefas)
function montaLista(tarefaLista){
    let Tarefas = document.querySelector("#lista-tarefas");
    let lista = document.createElement("li");
    lista.textContent = tarefaLista;
    lista.classList.add("lista-tarefas");
    Tarefas.appendChild(lista);
}
