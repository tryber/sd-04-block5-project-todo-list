let textoDigitado = document.getElementById('texto-tarefa');
let btn_criar_tarefa = document.getElementById('criar-tarefa');
let olNode = document.getElementById('lista-tarefas');
let btn_remove_lista = document.getElementById('apaga-tudo');



window.onload = function(){
    // CRIAR TAREFA
    function addTarefa(){
        let liNode = document.createElement('li'); 
        // sem a var aqui, a li não é criada na sequência
        liNode.innerHTML = textoDigitado.value 
        olNode.appendChild(liNode);
        textoDigitado.value = '';
        textoDigitado.focus();
    
        // ADICIONAR CLASSE
    liNode.addEventListener('click', function(){
        //liNode.classList.add('selected');// li recebe a classe selected do css, PRECISA função
        trocarClasse(liNode,'selected');
    })

    liNode.addEventListener('dblclick', function(){
       // liNode.classList.add('completed');// li recebe a classe completed do css PRECISA função
       trocarClasse(liNode,'completed');
    })

    }
    btn_criar_tarefa.addEventListener('click', addTarefa);


    function trocarClasse(element, classe){ // parâmetros = o que as linhas 17/25 tem em comum.
        if( element.classList.contains(classe)== false){ //1-qnd elem não contem a classe
             //sintax = node.contains() e retorna true ou false     
            element.classList.add(classe);//2- classe adicionada ao elem.
        }else{
            element.classList.remove(classe);//3-senão, classe removida do elem.
        }
       
    }

    // APAGA-TUDO ou REMOVENDO ITENS DA LISTA
     function limpaLista(){
        //olNode.innerHTML="";
        olNode.children.remove(document.querySelectorAll('li'));
    }
    btn_remove_lista.addEventListener('click', limpaLista)

}















