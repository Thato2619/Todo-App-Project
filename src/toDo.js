//Get all elements from HTML file and add querySelector
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const todoFilter = document.querySelector(".todoFilter");

//Add event listners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItems);
todoFilter.addEventListener("click", filterTodo);

//Function on adding todo items
function addTodo(event) {
  //prevent form form submitting unwillingly
  event.preventDefault();
  // add Todo (DIV)
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //add TODO to localstorage
  saveLocalTodos(todoInput.value);

  //add complete button within the LI
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  //add delete button within the LI
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  //append to list
  todoList.appendChild(todoDiv);
  //clear input value
  todoInput.value = "";
}

//Function on adding todo items
function deleteItems(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //this is responsible for completed task done ~ focuses on the check button
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("complete");
  }
}

//create a function that enables filters throughout todo app
//display all items as the user clicks
//display all completed todo task
//display all the incomplete todo task
function filterTodo(e) {
  const todos = todoList.chi;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("complete")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
//this function stores and saves local storage
function saveLocalTodos(todo) {
  //check if you have items of todo list
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//this function helps get storage from task items
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    // add Todo (DIV)
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //add complete button within the LI
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
  });
}
