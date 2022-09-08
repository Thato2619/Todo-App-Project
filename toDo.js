//Get all elements from HTML file and add querySelector
const form = document.querySelector("[data-form]");
const list = document.querySelector("[data-list]");
const input = document.querySelector("[data-input]");

//Create an empty object that contains empty array and constructor
//class todoApp {
   //let todoItems = [];
    //constructor(){} 
    
//}

//add storage for todoItems 
class storage{
    static addStorage(todoItems){
        let storage = localStorage.setItem("todo" , JSON.stringify(todoItems))
        return storage;
    }
    //get storage from todoItems
    static getStorage(){
        let storage = localStorage.getItem("todo") === null ? []: 
        JSON.parse(localStorage.getItem());
        return storage;
    } 
}



//empty array
let todoItems = storage.getStorage();


//add event-Listener in the form 
//add variable that is id that contains math.random()
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    let id = Math.random() * 1000000;
    const todo = Todo(id, input.value);
    todoItems = [...todoItems, todo ];
    display.displayData();
    display.clearInput();
    //remove from the dom
    display.removeTodo();
    //add storage
    storage.addStorage(todoItems);
});


//in new class, add constructor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
class toDo{
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }
}

//display the todo app in the DOM (use static method)
class display{
    static displayData(){
        let displayData = todoItems.map((item) => {
            return `   
                <div class="todo">
                <p>${item.todo}</p>
                <button>Edit</button>
                <button class="remove" data-id = ${item.id}>Delete</button>
                </div>
            `
        })  
        list.innerHTML= (displayData).join(" ");
    }
    //Create object that clears out input add by user
    static clearInput(){
        input.value = "";
    }

    //add static object that removes todo
    static removeTodo(){
        list.addEventListener("click", (e) => {
            if(e.target.classList.contains("remove")){
                e.target.parentElement.remove();
            }
            let buttonId = e.target.dataset.id;
            //remove from array.
            display.removeArrayTodo(buttonId);
        });
    }
    //create object that removes array 
    static removeArrayTodo(id){
        todoItems = todoItems.filter((item) => item.id !==+id)
    }
}
