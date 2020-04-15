const lista = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");
const inputText = document.getElementById("texto-tarefa");
const apagarG = document.getElementById('apaga-tudo');
const apagarC = document.getElementById('remover-finalizados');
const apagarS = document.getElementById('remover-selecionado');
const up = document.getElementById('mover-cima');
const down = document.getElementById('mover-baixo');
const sarvar = document.getElementById('salvar-tarefas');
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
        if(ultimoMarcado)
        {
            if(ultimoMarcado.className == "selected completed" || ultimoMarcado.className == "selected")
            {
                ultimoMarcado.classList.remove('selected');
                ultimoMarcado = event.target;
            }
        }
        else if(!ultimoMarcado)
        {
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
    localStorage.clear();
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

function ApagaSelect()
{
    const elementos = document.querySelectorAll("li");
    let elemento;
    for (let i = 0; i < elementos.length; i += 1)
    {
        elemento = elementos[i];
        if(elemento.className == "selected completed" || elemento.className == "selected")
        {
            lista.removeChild(elemento);
        }
    }
}

function Move(direcao)
{
    if(direcao === 0)
    {
        const elementos = document.querySelectorAll("li");
        let elemento;
        for (let i = 0; i < elementos.length; i += 1)
        {
            elemento = elementos[i];
            if(elemento.className == "selected completed" && i != 0 || elemento.className == "selected" && i != 0)
            {
                let elementoAnterior = elementos[i - 1];
                let intermediario = elemento.innerHTML;
                elemento.innerHTML = elementoAnterior.innerHTML;
                elementoAnterior.innerHTML = intermediario;
                ultimoMarcado = elementoAnterior;
                if(elemento.className == "selected completed")
                {
                    intermediario = elementoAnterior.className;
                    elementoAnterior.className = "selected completed";
                }
                else
                {
                    intermediario = elementoAnterior.className;
                    elementoAnterior.className = "selected";
                }
                if(intermediario == "completed")
                {
                    elemento.className = "completed";
                }
                else
                {
                    elemento.className = "";
                }
            }
        }
    }
    else
    {
        const elementos = document.querySelectorAll("li");
        let elemento;
        for (let i = 0; i < elementos.length - 1; i += 1)
        {
            elemento = elementos[i];
            if(elemento.className == "selected completed" || elemento.className == "selected" && i < elementos.length - 1)
            {
                let elementoPosterior = elementos[i + 1];
                let intermediario = elemento.innerHTML;
                elemento.innerHTML = elementoPosterior.innerHTML;
                elementoPosterior.innerHTML = intermediario;
                ultimoMarcado = elementoPosterior;
                if(elemento.className == "selected completed")
                {
                    intermediario = elementoPosterior.className;
                    elementoPosterior.className = "selected completed";
                }
                else
                {
                    intermediario = elementoPosterior.className;
                    elementoPosterior.className = "selected";
                }
                if(intermediario == "completed")
                {
                    elemento.className = "completed";
                }
                else
                {
                    elemento.className = "";
                }
                break;
            }
        }
    }
}

function Save()
{
    localStorage.clear();
    let item = "";
    let completas = "";
    const elementos = document.querySelectorAll("li");
    let elemento;
    for (let i = 0; i < elementos.length; i += 1)
    {
        item = "";
        elemento = elementos[i];
        if(elemento.className == "selected completed" || elemento.className == "completed")
        {
            completas += i;
        }
        item += "lista" + i;
        localStorage.setItem("Indice", i)
        localStorage.setItem(item, elemento.innerHTML);
    }
    localStorage.setItem("Completas", completas);
}

function Load ()
{
    let voltas = localStorage.getItem("Indice");
    let completo = localStorage.getItem("Completas");
    if(voltas)
    {
        for (let i = 0; i <= voltas; i += 1)
        {
            let item = "lista" + i;
            let valor = localStorage.getItem(item);
            const elemento = document.createElement('li');
            elemento.innerHTML = valor;
            elemento.addEventListener('dblclick', function (event) { Completou(event); });
            elemento.addEventListener('click', function (event) { Seleciona(event); });
            lista.appendChild(elemento);
        }
        if(completo)
        {
            let y = 0;
            const elementos = document.querySelectorAll("li");
            for (let i = 0; i < elementos.length; i += 1)
            {
                if(completo[y] == i)
                {
                    lista.childNodes[i+1].className = "completed";
                    y++;
                }
            }
        }
    }
}

function Iniciar()
{
    Load();
    buttonAdd.addEventListener("click", function() 
    {
        AddElemento();
    });
    apagarG.addEventListener("click", function () { ApagaGeral(); });
    apagarC.addEventListener("click", function () { ApagaCompletas(); });
    apagarS.addEventListener("click", function () { ApagaSelect(); });
    sarvar.addEventListener("click", function () { Save(); });
    up.addEventListener("click", function () { Move(0); });
    down.addEventListener("click", function () { Move(1); });
}

window.onload = function () 
{
    Iniciar();
};
