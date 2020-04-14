const lista = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");
const inputText = document.getElementById("texto-tarefa");
let ultimoMarcado;

function Seleciona(event)
{
    if(event.target.className != "selected" && event.target.className != "selected completed" && event.target.className != "completed")
    {
        event.target.className = "selected";
        if(ultimoMarcado)
        {
            console.log("pas 3");
            ultimoMarcado.classList.remove('selected');
            ultimoMarcado = event.target;
        }
        else
        {
            console.log("pas 2");
            ultimoMarcado = event.target;
        }
    }
    else if(event.target.className == "selected completed")
    {
        console.log("pas 4");
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
            console.log("pas 5");
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
    //elemento.setAttribute('class', 'textos');
    elemento.addEventListener('dblclick', function (event) { Completou(event); });
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
