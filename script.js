window.onload = function () {
  let textoTarefa = document.getElementById('texto-tarefa'); // Manipula a caixa de texto.
  let btnAdiciona = document.getElementById('criar-tarefa'); // Manipula o botão que adiciona na lista.
  let lista = document.getElementById('lista-tarefas'); // Manipula a lista de tarefas.

  btnAdiciona.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerHTML = textoTarefa.value;
    lista.appendChild(item);
    textoTarefa.value = '';
  });
}