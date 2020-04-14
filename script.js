window.onload = function () {
    let textTask = document.getElementById("texto-tarefa");
    let btnCreateTask = document.getElementById("criar-tarefa");
    let taskList = document.getElementById("lista-tarefas");

    function createTask() {
        let newTask = document.createElement("li");
        //newTask.innerText = textTask.value;
        newTask.innerHTML = textTask.value;
        taskList.appendChild(newTask);
        textTask.value = "";
    }

    btnCreateTask.addEventListener("click", createTask);

    console.log(taskList);
    console.log(textTask);
    console.log(btnCreateTask);
};
