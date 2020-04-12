let lista = document.querySelector('#lista-tarefas'); 
// colocando a lista ol numa variável = let lista = doc.querySelector('ol').
let valorInput = document.querySelector('#texto-tarefa');
// colocando o texto que o usuário digitar numa variável
let botao = document.querySelector('#criar-tarefa');

let btnremover = document.querySelector('#apaga-tudo');


// passo 1: colocar o evento no botão

window.onload = function(){
   /*  
   // passo 1 = AO CLICAR NO BOTAO, PEGAR O VALOR DO INPUT
   botao.addEventListener('click',function(){
        // 1 - pegar o valor do input:
        // let itemLista = valorInput.Value;  essa linha de código só pega o valor do input mas 
        //não adiciona à lista. Então seria: 

        let itemLista = '<li>' +valorInput.value +'</li>';  //e depois a soma 
        lista.innerHTML += ('<li>' +valorInput.value +'</li>'); = lista.appendChild(itemLista);
        // pego o valor html de 'ol' e 'somo'o texto inserido para o itemLista ser criado ao final da lista
        valorInput.value=' '; //limpa o texto do input
        valorInput.focus(); // mantem o cursor no input
    }) 

   */
    
    // passo 2: COLOCANDO TUDO DENTRO DE UMA FUNÇÃO
   
    function addtarefa(){
        let itemLista = document.createElement('li'); 
        itemLista.innerHTML=valorInput.value 
        itemLista.className = "completed";
        lista.appendChild(itemLista);
        valorInput.value =' '; 
        valorInput.focus(); 

        // alterando a cor de fundo pra cinza
        itemLista.addEventListener('click', function(){
        itemLista.style.backgroundColor = " rgb(128, 128, 128)";
       
       // itemLista[i].document.querySelector('.completed.selected').classList.remove('selected');
       // itemLista[i].classList.add('selected');

        })

        /*for(i=0;i<itemLista.length;i=+1){
            itemLista[i].addEventListener('dblclick', function(){

           itemLista[i].style.textDecoration = "line-through";
           itemLista[i].document.querySelector('.completed.selected').classList.remove('selected');
           itemLista[i].classList.add('selected');
            })  
        }*/
        itemLista.addEventListener("dblclick", function () {
            itemLista.style.textDecoration = "line-through";
          })
        
    }

    botao.addEventListener('click',addtarefa);

    // REMOVENDO ITENS DA LISTA
    function limpaLista(){
        lista.childNodes;
        lista.remove();
        // resumindo em uma linha de código => ( lista.innerHTML="";).
     }
     btnremover.addEventListener('click', limpaLista)



    // adicionar tarefa com tecla enter
    valorInput.addEventListener('keyup', function(e){
        //console.log(e.keyCode)// para cada tecla mostra um código
        if(e.keyCode === 13){ // código do enter é 13
            addtarefa();
        }

    })




}




















