let textoDigitado = document.getElementById('texto-tarefa');
let btn_criar_tarefa = document.getElementById('criar-tarefa');
let olNode = document.getElementById('lista-tarefas');




btn_criar_tarefa.addEventListener('click', function(){
    let liNode = document.createElement('li'); 
    // sem a var aqui, a li não é criada na sequência
    liNode.innerHTML = textoDigitado.value 
    olNode.appendChild(liNode);
    textoDigitado.value = '';
    textoDigitado.focus();
  
})










/* 
<h1>Minha Lista de Tarefas</h1>
    <p id="funcionamento">Clique duas vezes em um item para marcá-lo como completo</p>
  </header>
  <input  id="texto-tarefa" type="text" placeholder="To do List">
  <button id="criar-tarefa">criar Tarefa</button>
  <ol id="lista-tarefas" ></ol>
  <hr>

  <script src="script.js"></script>
</body>
</html>
*/





