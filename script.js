window.onload = function () {
  const textoTarefa = document.getElementById('texto-tarefa'); // Manipula a caixa de texto.
  const btnAdiciona = document.getElementById('criar-tarefa'); // Manipula o botão que adiciona na lista.
  const btnLimpa = document.getElementById('apaga-tudo'); // Manipula o botão que apaga a lista.
  const lista = document.getElementById('lista-tarefas'); // Manipula a lista de tarefas.

  function selecionaItem() {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }

  function marcaItem() {
    const indentifier = event.target.style.textDecoration;
    if (indentifier === 'line-through') {
      event.target.style.textDecoration = 'none';
      event.target.classList.remove('completed');
    } else {
      event.target.style.textDecoration = 'line-through';
      event.target.className = 'completed';
    }
  }

  function apagaLista(number) {
    for (let n = 0; n < number; n += 1) {
      lista.removeChild(lista.childNodes[0]);
    }
  }

  btnAdiciona.addEventListener('click', function () {
    const item = document.createElement('li');
    item.innerHTML = textoTarefa.value;
    item.addEventListener('click', selecionaItem);
    item.addEventListener('dblclick', marcaItem);
    lista.appendChild(item);
    textoTarefa.value = '';
  });

  btnLimpa.addEventListener('click', function () {
    let comprimentoLista = lista.childNodes.length;
    apagaLista(comprimentoLista);
  });
};
