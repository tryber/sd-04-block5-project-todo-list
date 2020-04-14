let add = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');
let item = document.getElementById('texto-tarefa');
add.addEventListener('click', function(){
    let li = document.createElement('LI');
    li.innerHTML = item.value;
    li.className = 'back';
    item.value ='';
    list.appendChild(li);
});

