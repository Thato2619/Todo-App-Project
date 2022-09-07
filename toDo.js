//Get all elements from HTML file and add querySelector
const form = document.querySelector("[data-form]");
const list = document.querySelector("[data-list]");
const input = document.querySelector("[data-input]");

//Create an empty object that contains empty array and constructor
class todoApp {
    todoItems = [];
    constructor(){} 
    
}

//in new class, add constructor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
class toDo{
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }
}

//add event-Listener in the form 
//add variable that is id that contains math.random()
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    let id = Math.random() * 10000;

})

