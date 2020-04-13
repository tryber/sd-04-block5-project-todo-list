
  let btnAdd = document.querySelector('#criar-tarefa');
  let list = document.querySelector('#lista-tarefas');
  let tarefa = document.querySelector('#texto-tarefa');
  let btnRem = document.querySelector('#apaga-tudo');

  btnAdd.addEventListener('click', function () {
    if (tarefa.value === '') {
      alert('Digite alguma tarefa!');
    } else {
      let item = document.createElement('li');
      item.innerHTML = tarefa.value;
      list.appendChild(item);
      tarefa.value = '' 
    }
  });
  
  list.addEventListener('click', function(e){
    
    if (e.target.style.backgroundColor == 'rgb(128, 128, 128)') {
        e.target.style.backgroundColor = ''; 
    } else {
        e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
      
  });

  list.addEventListener('dblclick', function(e) {
    e.target.classList.toggle('completed')
  })

  btnRem.addEventListener('click',function(){
    
  });


if (localStorage.item) {
    list.appendChild(document.createElement('li')).innerHTML = localStorage.getItem('item')

}

