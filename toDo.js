//Get all elements from HTML file and add querySelector
const input = document.querySelector(".dataInput");
const button = document.querySelector(".dataButton");
const list = document.querySelector(".dataList");

//Add event listners
button.addEventListener("click" , addTodo);

//Functions
function addTodo(event){
    //prevent form form submitting unwillingly
    event.preventDefault();  
    // add Todo (DIV)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //add complete button within the LI
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //add delete button within the LI
    const deleteButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-trash"></i>'
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(deleteButton);
    //append to list
    list.appendChild(todoDiv);
}