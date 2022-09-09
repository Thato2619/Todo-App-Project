//Get all elements from HTML file and add querySelector
const input = document.querySelector(".todoInput");
const button = document.querySelector(".todoButton");
const list = document.querySelector(".todoList");

//Add event listners
button.addEventListener("click" , addTodo);
list.addEventListener("click", deleteItems);

//Function on adding todo items
function addTodo(event){
    //prevent form form submitting unwillingly
    event.preventDefault();  
    // add Todo (DIV)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //add complete button within the LI
    const completeButton = document.createElement('button');
    completeButton.innerHTML =  '<i class="fa-sharp fa-solid fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //add delete button within the LI
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //append to list
    list.appendChild(todoDiv);
    //clear input value
    input.value = "";
}

//Function on adding todo items
function deleteItems(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
}