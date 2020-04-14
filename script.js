let botao = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let texto = document.getElementById('texto-tarefa');
botao.addEventListener( 'click' ,  function() {
  let criar = document.createElement('LI');
  criar.innerHTML = texto.value;
  criar.className = 'cursor';
  texto.value ='';
  lista.appendChild(criar);
}); 
lista.addEventListener('click', function(event) {
  event.target.classList.add('point');
});
lista.addEventListener('dblclick', function(event) {
    event.target.classList.toggle('completed');
  })
  let apagar = document.getElementById('apaga-tudo');
  let apagados = document.getElementsByTagName('li');
  apagar.addEventListener('click',function() {
    var j = apagados.length;
    var i = 0 ;
      for ( i = 1; i <= j ; i++ ){
        lista.removeChild(apagados[j - i]);
        console.log(apagados.length);
      }
  })