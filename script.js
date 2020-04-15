window.onload = function () {
    let taskList = document.getElementById('lista-tarefas')
    let taskText = document.getElementById('texto-tarefa')
    let createButton = document.getElementById('criar-tarefa')

    createButton.addEventListener('click', function() {
        let tarefa = document.createElement('li')
        tarefa.innerHTML = taskText.value
        taskList.appendChild(tarefa)
    })
}