let textoDigitado = document.getElementById('texto-tarefa');
let btn_criar_tarefa = document.getElementById('criar-tarefa');
let olNode = document.getElementById('lista-tarefas');
let btn_remove_lista = document.getElementById('apaga-tudo');



window.onload = function(){

    if (typeof (Storage) !== "undefined") {  // *** load 
        olNode.innerHTML = localStorage.lista; // ol recebe itens salvos 'lista'
    }

      // PARA SALVAR LISTA ***
    let btn_salva_tarefa = document.getElementById('salvar-tarefas');
    if (olNode.innerHTML == '') {
        alert('Não existe tarefas para salvar');
    }else{ // se tiver algo para salvar chama o evento
        btn_salva_tarefa.addEventListener('click',function(){
            localStorage.setItem('lista', olNode.innerHTML); // salvando os itens dentro da 'lista'
        })
    }

    
    // CRIAR TAREFA
    function addTarefa(){
        let liNode = document.createElement('li'); 
        // sem a var aqui, a li não é criada na sequência
        liNode.innerHTML = textoDigitado.value 
        olNode.appendChild(liNode);
        textoDigitado.value = '';
        textoDigitado.focus();
    
        // ADICIONAR e REMOVE CLASSE SELECTED e COMPLETED#
   // liNode.addEventListener('click', function(){//#
        // 1-liNode.classList.add('selected');// li recebe a classe selected do css, PRECISA função
       // trocarClasse(liNode,'selected');  
   // })
   // liNode.addEventListener('dblclick', function(){//#
       // liNode.classList.add('completed');// li recebe a classe completed do css PRECISA função
      // trocarClasse(liNode,'completed');
   // })

   // function trocarClasse(element, classe){ //#  parâmetros = o que as linhas 17/25 tem em comum.
        //if( element.classList.contains(classe)== false){ //1-qnd elem não contem a classe
             //sintax = node.contains() e retorna true ou false     
           // element.classList.add(classe);//2- classe adicionada ao elem.
       // }else{
           // element.classList.remove(classe);//3-senão, classe removida do elem.
       // }
   // }


    // REMOVER FINALIZADOS E SELECIONADOS ##
    let btn_remove_finaliz = document.getElementById('remover-finalizados');
    let btn_remove_selec = document.getElementById('remover-selecionado');

    btn_remove_finaliz.addEventListener('click',function(){ // ##
        // event dentro da funçao addTarefa pq li está declarada aqui dentro.
            //if(liNode.classList.contains('completed')== true){ // aqui dentro não precisou do FOR
           // liNode.remove();
           // }
           remove_fin_selec(liNode,'completed');
    })
    btn_remove_selec.addEventListener('click', function(){// ##
          // event dentro da funçao addTarefa pq li está declarada aqui dentro.
         // if(liNode.classList.contains('selected')== true){ // aqui dentro não precisou do FOR
           // liNode.remove();
           // }
           remove_fin_selec(liNode, 'selected');
    })
    // FUNÇAO REMOMOVE FINALIZADOS E SELECIONADOS ##
    function remove_fin_selec(element,classe){
        if(element.classList.contains(classe)==true){
            element.remove();
        }
    }

    }// fim addTarefa

    // ADICIONAR CLASSE SELECTED
    // Ao clicar uma vez sobre a li add a classe
    olNode.addEventListener('click', function (el) {
    // verifica se a classe ja está no elemento clicado
        if (document.querySelector('.selected') == null) {
        el.target.classList.add('selected');
        //console.log(el);
        // console.log(el.target);
        }   
    });
      // Ao clicar duas vezes sobre a li a classe é add ou removida
    olNode.addEventListener('dblclick', function (el) {
    if (el.target.classList.contains('completed') === true) {
      el.target.classList.remove('completed');
    } else {
      el.target.classList.add('completed');
    }
  });
    

    // APAGA-TUDO ou REMOVENDO ITENS DA LISTA
     function limpaLista(){
        olNode.innerHTML=''; 
    }

    

    // adicionar tarefa com tecla enter
    textoDigitado.addEventListener('keyup', function(e){
        //console.log(e.keyCode)// para cada tecla mostra um código
        if(e.keyCode === 13){ // código do enter é 13
            addTarefa();
        }
    })

    btn_criar_tarefa.addEventListener('click', addTarefa);
    btn_remove_lista.addEventListener('click', limpaLista)

}















