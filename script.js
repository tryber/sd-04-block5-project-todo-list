const lista = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");
const inputText = document.getElementById("texto-tarefa");

function AddElemento()
{
    const elemento = document.createElement('li');
    const informacao = inputText.value;
    elemento.innerHTML = informacao;
    //elemento.setAttribute('class', 'textos');
    lista.appendChild(elemento);
    inputText.value = "";
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
