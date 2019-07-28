let btn = document.getElementById('btn');
let input = document.getElementById('input');

btn.addEventListener('click', addTask);

// add task function
function addTask() {
    var list = document.getElementById("list");
    var task = document.createElement("li");
    var node = document.createTextNode(input.value);

    task.setAttribute('id', "task");
    task.addEventListener('click', removeTask);

    task.appendChild(node);
    list.appendChild(task);

    input.value = " ";
}


//The removeTask function is removing tasks at random. Need to fix that...

// remove task function
function removeTask() {
    var element = document.getElementById("task");
    element.parentNode.removeChild(element);
}

// FUTURE FEATURE LIST:
/*
    saved lists (local storage)
    complete item
    edit item
    move item
    group items
    title groups (create new groups)
*/
