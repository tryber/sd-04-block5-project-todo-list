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
        while (lista.firstChild) {
          lista.removeChild(lista.lastChild)
        }});

      let botao5 = document.getElementById('remover-finalizados');
      botao5.addEventListener('click',function(e) {
        let items = document.querySelectorAll('.completed');
        for(i = 0; i < items.length; i+=1) {
        items[i].parentNode.removeChild(items[i])}});

      let botao6 = document.getElementById('salvar-tarefas');
      botao6.addEventListener('click', function(e) {
        let lista1 = document.querySelectorAll('li')
        if(localStorage != undefined){
          localStorage.clear()
        for(i = 0; i < lista1.length; i+=1) {
          localStorage.setItem([i], lista1[i].textContent)
        }}else {
          for(i = 0; i < lista1.length; i+=1) {
            localStorage.setItem([i], lista1[i].textContent)
        }}
      });
      
      if(this.localStorage != undefined) {
        let savedList = localStorage
        for(i = 0; i < savedList.length; i+=1) {
          let key = savedList.key(i);
          let value = savedList[key];
          let item = document.createElement('li')
          item.innerHTML = value
          document.getElementById('lista-tarefas').appendChild(item)
        }
      }
}