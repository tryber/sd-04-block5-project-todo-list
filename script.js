window.onload = function(){

//CAIXA DE TEXTO
    let inputTask = document.querySelector("#texto-tarefa");

//BOTÃO CRIAR
    let buttonCreate = document.querySelector("#criar-tafefa");

//VARIÁVEL DA LISTA
    let toDoList = document.querySelector('#lista-tarefas');

    buttonCreate.addEventListener('click', insertItem);

//FUNÇÃO DE DESTAQUE CINZA
    function highlightItem(){
        const fundoLista = this.document.querySelectorAll("#fundo-lista");

        for (let i = 0; i < fundoLista.length; i++) {
            fundoLista[i].addEventListener('click', function(event){
                let selectedItem = event.target;
                selectedItem.classList.add('selected');
                selectedItem.addEventListener('click', function(){
                    console.log(true);
                    selectedItem.classList.remove('selected');
                })

            });
        }
    }

    highlightItem();

//FUNÇÃO DE INSERIR ITEM
    function insertItem(){
        const listItem = document.createElement('li');
        toDoList.appendChild(listItem);
        listItem.innerText = inputTask.value;
        listItem.classList.add("item");
        inputTask.value = null;
    }
    
}











