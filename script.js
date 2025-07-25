
document.addEventListener("DOMContentLoaded", function () {

    const todoForm = document.querySelector(".todo-form");
    const todoInput = document.querySelector(".todo-input");
    const todoList = document.querySelector(".todo-list");
    const todoSubmit = document.querySelector(".todo-submit");

    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            //add todo
            addTodoItem(todoText);

            todoInput.value = "";
        } else {
            alert("Please Enter a valid task")
        }
    });

    function addTodoItem(todoText) {
        const todoItem = document.createElement("li");
        const editButton = document.createElement("li");
        const removeButton = document.createElement("li");

        todoItem.innerHTML = `<span>${todoText}</span>`;
        editButton.innerText = `Edit`;
        removeButton.innerText = `Delete`;

        todoItem.appendChild(editButton);
        todoItem.appendChild(removeButton);
        todoList.appendChild(todoItem);
    }
})