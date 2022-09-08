//Get all elements from HTML file and add querySelector
const input = document.querySelector(".dataInput");
const button = document.querySelector(".dataButton");
const list = document.querySelector(".dataList");

// add event listeners
button.addEventListener('click' , addTodo);



//function of addTodo
function addTodo(event){
    //prevents form from submiiting unwillingly
    event.preventDefault();
    //add todo(DIV)
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //add Complete button within the LI
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>'; 
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //add delete button within the LI
    const deleteButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-trash"></i>'; 
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(deleteButton);
}