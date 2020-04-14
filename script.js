const criarTarefa = document.getElementById("criar-tarefa");
const tarefa = document.getElementById("texto-tarefa")
const ol = document.getElementById("lista-tarefas")
const deleteTarefas = document.getElementById('apaga-tudo');
const li = document.querySelectorAll("li");
const item = document.getElementsByClassName("item")
const buttons = document.getElementsByTagName('button');

// Cursor em forma de mãozinha
for (let i = 0; i < buttons.length; i+=1){
buttons[i].addEventListener('mouseover', function(){
event.target.style.cursor = 'pointer';
})
}

// criar e adicionar li's ao OL.
criarTarefa.addEventListener("click", addLi);
function addLi() {
    let li = document.createElement('li');
    li.innerHTML = tarefa.value;
    li.className = "item";
    ol.appendChild(li);
    tarefa.value = '';
}
// Deleta tudo de OL. *Apaga todas LI*//
deleteTarefas.addEventListener('click', deleteAll);
function deleteAll() {
    ol.innerHTML = "";
}

//Seleciona e em breve, Duplo click.
ol.addEventListener('click', start);
function start() {
for( let i = 0; i < item.length; i+= 1) {

    item[i].addEventListener('dblclick', function() {
        item[i].classList.add('completed');

    })

    item[i].addEventListener('click', function() {
        for(let i = 0; i < item.length; i += 1) {
            item[i].classList.remove('selected');
        }
        item[i].classList.add('selected');
    })
}}
