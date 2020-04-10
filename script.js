window.onload = function () {
  const textoTarefa = document.getElementById('texto-tarefa'); // Manipula a caixa de texto.
  const btnAdiciona = document.getElementById('criar-tarefa'); // Manipula o botão que adiciona na lista.
  const lista = document.getElementById('lista-tarefas'); // Manipula a lista de tarefas.

  function alteraFundoItem() {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }

  function marcaItem() {
    let indentifier = event.target.style.textDecoration;
    if(indentifier === 'line-through') {
      event.target.style.textDecoration = 'none';
    } else {
      event.target.style.textDecoration = 'line-through';
    }
  }

  btnAdiciona.addEventListener('click', function () {
    const item = document.createElement('li');
    item.innerHTML = textoTarefa.value;
    item.addEventListener('click', alteraFundoItem);
    item.addEventListener('dblclick', marcaItem);
    lista.appendChild(item);
    textoTarefa.value = '';
  });
};
