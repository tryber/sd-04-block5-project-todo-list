const buttonCriarTarefa = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
function criarTarefa() {
  const li = document.createElement('li');
  const inputTarefa = document.getElementById('texto-tarefa');
  li.innerHTML = inputTarefa.value;
  ol.appendChild(li);
  inputTarefa.value = '';
}
buttonCriarTarefa.addEventListener('click', function () {
  criarTarefa();
});
