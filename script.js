window.onload = function () {
  const textoTarefa = document.getElementById('texto-tarefa'); // Manipula a caixa de texto.
  const btnAdiciona = document.getElementById('criar-tarefa'); // Manipula o botão que adiciona na lista.
  const lista = document.getElementById('lista-tarefas'); // Manipula a lista de tarefas.

  function alteraFundoItem(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }

  btnAdiciona.addEventListener('click', function () {
    const item = document.createElement('li');
    item.innerHTML = textoTarefa.value;
    item.addEventListener('click', alteraFundoItem)
    lista.appendChild(item);
    textoTarefa.value = '';
  });
};
