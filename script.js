//botão adcicionar tarefa
let criartarefa = document.querySelector("#criar-tarefa");
console.log(criartarefa);

let listaDeTarefas = document.querySelector("#lista-tarefas");
console.log(listaDeTarefas);

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

 //Apaga toda a lista
let apagaLista = document.querySelector("#apaga-tudo");
apagaLista.addEventListener("click", function(e){
    
    for(var i =0; i < listaDeTarefas.length; i++);
    {
        listaDeTarefas.innerHTML="";
    }
});

//Remove itens selecionados   
let removeSelecionado = document.querySelector("#remover-selecionado");
removeSelecionado.addEventListener("click", function(e){
    //Obtêm todas as tarefas - li
   let tarefasSelecionadas = document.getElementsByTagName("li");  
   for(var i =0; i < tarefasSelecionadas.length; i++)
     //Verifica se a tarefa está selecionada
     if( tarefasSelecionadas[i].classList.contains("alteracor")){
         //Remove tarefa selecionada
        listaDeTarefas.removeChild(tarefasSelecionadas[i]);
   }
});

//Adiciona a tarefa na lista com a classe (lista-tarefas)
function montaLista(tarefaLista){
    let Tarefas = document.querySelector("#lista-tarefas");
    let lista = document.createElement("li");
    lista.textContent = tarefaLista;
    lista.classList.add("lista-tarefas");
    Tarefas.appendChild(lista);
}
