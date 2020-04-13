window.onload = function(){

//CAIXA DE TEXTO
    const inputTask = document.querySelector("#texto-tarefa");
//BOTÃO CRIAR
    const buttonCreate = document.querySelector("#criar-tarefa");
//VARIÁVEL DA LISTA
    const toDoList = document.querySelector('#lista-tarefas');

    buttonCreate.addEventListener('click', insertItem);

//FUNÇÃO DESTACA ITEM
    function pintaFundo(event){
        const selecionado = event.target;
        selecionado.classList.add("selected");
    }

//FUNÇÃO PARA RISCAR
    function riscada(event){
        const completo = event.target;
        completo.classList.add('completed');
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
  
