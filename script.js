var ol = document.getElementById("lista-tarefas");
var li;
var itemId;
var item;

addTask = function () {
    if(document.getElementById("texto-tarefa").value != ""){
    item = document.getElementById("texto-tarefa");
    itemId = ol.childElementCount;
    li = createItemEl(item.value, itemId);
    li.appendChild(createRemoveBtn(itemId));
    ol.appendChild(li);
    item.value = "";
    }
}

removeTask = function (itemId) {
    for (i = 0; i < ol.children.length; i++){
        if (ol.children[i].getAttribute ("index") == itemId) {
            ol.children[i].remove();
        }
    }
}

createItemEl = function (itemValue, itemId) {
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

createRemoveBtn = function (itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeTask("+itemId+")");
    btn.innerHTML = "X";
    return btn;
}