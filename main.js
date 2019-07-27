let btn = document.getElementById('button');
let input = document.getElementById('item');

btn.addEventListener('click', addItem);

function addItem() {
    var item = document.createElement("li");
    var node = document.createTextNode(input.value);
    item.appendChild(node);

    var element = document.getElementById("items");
    element.appendChild(item);

    input.value = " ";
}
