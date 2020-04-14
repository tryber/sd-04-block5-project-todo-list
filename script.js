const lista = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");
const inputText = document.getElementById("texto-tarefa");
const apagarG = document.getElementById('apaga-tudo');
const apagarC = document.getElementById('remover-finalizados');
let ultimoMarcado;

function Seleciona(event)
{
    if(event.target.className != "selected" && event.target.className != "selected completed" && event.target.className != "completed")
    {
        event.target.className = "selected";
        if(ultimoMarcado)
        {
            ultimoMarcado.classList.remove('selected');
            ultimoMarcado = event.target;
        }
        else
        {
            ultimoMarcado = event.target;
        }
    }
    else if(event.target.className == "selected completed")
    {
        if(ultimoMarcado.className != event.target.className)
        {
            ultimoMarcado.classList.remove('selected');
            ultimoMarcado = event.target;
        }
    }
    else if(event.target.className == "completed")
    {
        event.target.className = "selected completed"
        if(ultimoMarcado.className == "selected completed" || ultimoMarcado.className == "selected")
        {
            ultimoMarcado.classList.remove('selected');
            ultimoMarcado = event.target;
        }
    }
}

function Completou(event)
{
    if(event.target.className != "selected completed" && event.target.className != "completed")
    {
        event.target.className = "selected completed";
        Seleciona(event);
    }
    else if(event.target.className == "selected completed" || event.target.className == "completed")
    {
        event.target.className = "selected";
        Seleciona(event);
    }
}

function AddElemento()
{
    const elemento = document.createElement('li');
    const informacao = inputText.value;
    elemento.innerHTML = informacao;
    elemento.addEventListener('dblclick', function (event) { Completou(event); });
    elemento.addEventListener('click', function (event) { Seleciona(event); });
    lista.appendChild(elemento);
    inputText.value = '';
}

function ApagaGeral()
{
    const tamanho = document.querySelectorAll("li");
    for (let i = 0; i < tamanho.length + 1 ; i += 1)
    {
        lista.removeChild(lista.firstChild);
    }
} 

function ApagaCompletas()
{
    const elementos = document.querySelectorAll("li");
    let elemento;
    for (let i = 0; i < elementos.length; i += 1)
    {
        elemento = elementos[i];
        if(elemento.className == "selected completed" || elemento.className == "completed")
        {
            lista.removeChild(elemento);
        }
    }
} 

function Iniciar()
{
    buttonAdd.addEventListener("click", function() 
    {
        AddElemento();
    });
    apagarG.addEventListener("click", function () { ApagaGeral(); });
    apagarC.addEventListener("click", function () { ApagaCompletas(); });
}

window.onload = function () 
{
    Iniciar();
};
