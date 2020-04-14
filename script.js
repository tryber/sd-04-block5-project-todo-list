const botaoCriar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

//criando itens na lista através do input recebido:
function criarTarefa() {
  const inputTarefa = document.getElementById('texto-tarefa').value;
  const item = document.createElement('li');
  item.innerHTML = inputTarefa;
  lista.appendChild(item);
  document.getElementById('texto-tarefa').value = '';
}

//limpando a lista de tarefas e o localStorage:
function limparTarefas() {
  document.getElementById("lista-tarefas").innerHTML = '';
  localStorage.clear("items");
}

//removendo as tarefas concuidas da lista:
function limparTarefasConcluidas() {
  const tarefasCompletadas = document.querySelectorAll(".completed");
  for (let i = 0; i < tarefasCompletadas.length; i += 1) {
    document.getElementById("lista-tarefas").removeChild(tarefasCompletadas[i]);
  }
}

window.onload = function () {
  // adicionando eventos aos botões:
  botaoCriar.addEventListener('click', criarTarefa);
  document.getElementById('apaga-tudo').addEventListener('click', limparTarefas);
  document.getElementById('remover-finalizados').addEventListener('click', limparTarefasConcluidas);
  document.getElementById("salvar-tarefas").addEventListener("click", salvarLista);

  //adicionando cor ao item clicado:
  document.getElementById("lista-tarefas").addEventListener("click", function (event) {
    if (event.target && event.target.nodeName == "LI") {
      if (event.target.classList.contains("selected")) {
        event.target.classList.remove('selected');
      } else event.target.classList.add('selected')

    }
  });

  //riscando os itens concluidos da lista:
  document.getElementById("lista-tarefas").addEventListener("dblclick", function (event) {
    if (event.target && event.target.nodeName == "LI") {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else event.target.classList.add('completed');
    }
  });

  //salvando os itens ATUAIS da lista no localStorage:
  let itemsArray = []
  function salvarLista() {
    localStorage.clear("items");
    let itemsArray = [];
    let classesArray = [];
    const listaItens = document.querySelectorAll("li");

    for (let j = 0; j < listaItens.length; j += 1) {
      itemsArray.push(listaItens[j].textContent);
      classesArray.push(listaItens[j].classList.value)
    }
    localStorage.setItem("items", JSON.stringify(itemsArray))
    localStorage.setItem("classes", JSON.stringify(classesArray))
  }

  //recapitulando os itens salvos e adicionando-os novamente na lista:
  function criadorLista(text, classes) {
    const item = document.createElement('li');
    item.textContent = text;
    lista.appendChild(item);
    if (classes != '') item.className += classes;
  };
  const data = JSON.parse(localStorage.getItem('items'))
  const classes = JSON.parse(localStorage.getItem('classes'))
  if (data != null) {
    for (let item = 0; item < data.length; item += 1) {
      criadorLista(data[item], classes[item]);
    };
  };

  //
  document.getElementById("mover-cima").addEventListener("click", moverCima);
  function moverCima() {
    const listaItens2 = document.querySelectorAll("li");
    for (let k = 0; k < listaItens2.length; k += 1) {
      if (listaItens2[k].classList.contains('selected')) {
        let indexSelected = k;
        let elementoCima = listaItens2[indexSelected].previousSibling;
        if (indexSelected != 0 && indexSelected != -1) {
          lista.insertBefore(listaItens2[indexSelected], elementoCima);
        }
      }
    }
  }
  
  //
  document.getElementById("mover-baixo").addEventListener("click", moverBaixo);
  function moverBaixo() {
    const listaItens3 = document.querySelectorAll("li");
    for (let k = 0; k < listaItens3.length; k += 1) {
      if (listaItens3[k].classList.contains('selected')) {
        let indexSelected = k;
        let elementoBaixo = listaItens3[indexSelected].nextSibling.nextSibling;
        if (elementoBaixo != null) {
          lista.insertBefore(listaItens3[indexSelected], elementoBaixo);
        }else {
          elementoBaixo = listaItens3[indexSelected].nextSibling;
          lista.insertBefore(elementoBaixo, listaItens3[indexSelected])
          break
        }
      }
    }
  }
};

  // --> other ways to add cursor events <--
  // document.addEventListener("mouseover", function (event) {
  //   if (event.target && event.target.nodeName == "BUTTON") {
  //     event.target.style.cursor = 'pointer';
  //   }
  // });

  // document.getElementById("lista-tarefas").addEventListener("mouseover", function (event) {
  //   if (event.target && event.target.nodeName == "LI") {
  //     event.target.style.cursor = 'pointer';
  //   }
  // });


