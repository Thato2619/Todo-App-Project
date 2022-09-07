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

//display the todo app in the DOM (use static method)
class display{
    static displayData(){
        let displayData = todoApp.map((todoItems) => {
            return `   
            <div class="todo">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet hic corrupti corporis unde eum itaque odio numquam aspernatur error maxime nihil nobis beatae dignissimos quisquam, officia excepturi. Iste, itaque dignissimos!</p>
            <button>Edit</button>
            <button>Delete</button>
            </div>
            `
        })
    }
}
