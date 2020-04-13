window.onload = function(){

//CAIXA DE TEXTO
    let inputTask = document.querySelector("#texto-tarefa");

//BOTÃO CRIAR
    let buttonCreate = document.querySelector("#criar-tafefa");

//VARIÁVEL DA LISTA
    let toDoList = document.querySelector('#lista-tarefas');

    buttonCreate.addEventListener('click', insertItem);

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

//FUNÇÃO DESTACA ITEM
    function pintaFundo(event){
        event.target.style.backgroundColor = 'grey';
    }

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
  

//FUNÇÃO PARA RISCAR
    function riscada(event){
        let feito = event.target;
        feito.classList.add("completed")

    }

function desmarcar(){
    let itemMarcado = document.querySelector(".completed");
    itemMarcado.classList.remove("completed");
}


//FUNÇÃO DE INSERIR ITEM
    function insertItem(){
        const listItem = document.createElement('li');
        toDoList.appendChild(listItem);
        listItem.innerText = inputTask.value;
        listItem.classList.add("item");
        inputTask.value = null;
        
        listItem.addEventListener("click", pintaFundo);
        listItem.addEventListener('dblclick', riscada);
        
        
    }

}




