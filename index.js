let ulVariable = document.querySelector('ul');
let inputVariable = document.querySelector('input');
let buttonVariable = document.querySelector('button');

function clickButton() {
    let inputValue = inputVariable.value;
    inputVariable.value = "";
    let listItem = document.createElement('li');
    let spanElement = document.createElement('span');
    let newButton = document.createElement('button');
    listItem.appendChild(spanElement);
    listItem.appendChild(newButton);
    spanElement.innerHTML = inputValue;
    newButton.innerHTML = "Delete";
    ulVariable.appendChild(listItem);
    newButton.addEventListener("click", function () {
        listItem.remove()
    })
    inputVariable.focus()
}
buttonVariable.addEventListener("click", clickButton)