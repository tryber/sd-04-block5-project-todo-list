window.onload = function(){
  let botao1 = document.getElementById('criar-tarefa');
      botao1.addEventListener('click', function() {
        let item = document.createElement('li');
        let lista = document.getElementById('texto-tarefa');
        item.innerHTML = lista.value;
        document.getElementById('lista-tarefas').appendChild(item);
        lista.value = '';
        // item.classList.add('mao');
      });

      let botao2 = document.getElementById('lista-tarefas')
      botao2.addEventListener('click', function(e) {        
       if(e.target.style.backgroundColor == 'rgb(128, 128, 128)') {
         e.target.style.backgroundColor = "";
       }else {
         e.target.style.backgroundColor = 'rgb(128, 128, 128)'
       }
      });

      let botao3 = document.getElementById('lista-tarefas')
      botao3.addEventListener('dblclick', function(e) {
        if(e.target.className == 'completed'){
          e.target.classList.remove('completed')
        }else {
          e.target.classList.add('completed')
        }        
      });

      let botao4 = document.getElementById('apaga-tudo')
      botao4.addEventListener('click', function(e) {
        let lista = document.querySelector('#lista-tarefas')
        for(let i in lista) {
          lista.removeChild(lista.firstChild)
        }
      });

      let botao5 = document.getElementById('remover-finalizados');
      botao5.addEventListener('click',function(e) {
        let lista = document.querySelector('#lista-tarefas')
        for(let i in lista) {
          document.querySelector('.completed').remove()
        }
      });
}