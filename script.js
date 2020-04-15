//botão adcicionar tarefa
let criartarefa = document.querySelector("#criar-tarefa");
console.log(criartarefa);

const listaDeTarefas = document.querySelector("#lista-tarefas");
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

 //Remove todos os itens da lista
let apagaLista = document.querySelector("#apaga-tudo");
apagaLista.addEventListener("click", function(e){
    var li = document.getElementsByTagName("li");    
    // for(var i = 0; i < li.length; ++i)
    //  {
    //     listaDeTarefas.removeChild(li[i]);    
    //  } 
    var i=0;
    while(i < li.length)
    {
        listaDeTarefas.removeChild(li[i]);
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

//Remove itens finalizados
let removeFinaliado = document.querySelector("#remover-finalizados");
removeFinaliado.addEventListener("click", function(e){
    //Obtêm todas as tarefas - li
   let tarefasSelecionadas = document.getElementsByTagName("li");  
   for(var i =0; i < tarefasSelecionadas.length; i++)
     //Verifica se a tarefa está selecionada
     if( tarefasSelecionadas[i].classList.contains("completed")){
         //Remove tarefa selecionada
        listaDeTarefas.removeChild(tarefasSelecionadas[i]);
   }
});


//Grava a lista localStorage
let gravaTarefas = document.querySelector("#salvar-tarefas");
gravaTarefas.addEventListener("click", function(e){
   var li = document.getElementsByTagName("ol");
   
    //verifica se há tarefas
    if(li.length == 0)
    {
        alert("Não há tarefas para serem salvas");
        return;
    }

    var tarefas =""; //acumula tarefas
    
    //percorre lista de tarefas
    for(var i= 0; i < li.length; i++)
    {
        tarefas+= li[i].textContent + ";"; //acumula conteúdo de cada li
    }

    //grava tarefas localStorage
    localStorage.setItem("tarefasDia", tarefas.substr(0, tarefas.length -1));
    //confere se todas as tarefas foram salvas
    if(localStorage.getItem("tarefasDia"))
    {
        alert("Ok! Tarefas Salvas...");
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
