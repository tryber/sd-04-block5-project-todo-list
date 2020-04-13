const lista = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");
const inputText = document.getElementById("texto-tarefa");

function Seleciona(event)
{
    event.target.className = "selected";
}

function AddElemento()
{
    const elemento = document.createElement('li');
    const informacao = inputText.value;
    elemento.innerHTML = informacao;
    //elemento.setAttribute('class', 'textos');
    elemento.addEventListener('click', function (event) { Seleciona(event); });
    lista.appendChild(elemento);
    inputText.value = '';
}

function Iniciar()
{
    buttonAdd.addEventListener("click", function() 
    {
        AddElemento();
    });
}

window.onload = function () 
{
    Iniciar();
};
