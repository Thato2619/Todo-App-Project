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
            <p>${item.todo}</p>
            <button>Edit</button>
            <button class="remove" data-id = ${item.id}>Delete</button>
            </div>
            `
        })
        list.innerHTML= displayData.join(" ");
    }
    //Create object that clears out input add by user
    static clearInput(){
        input.value = "";
    }

    //add static object that removes todo
    static removeTodo(){
        lists.addEventListener("click", (e) => {
            if(e.target.classlist.contains("remove")){
                e.target.parentElement.remove();
            }
            let buttonId = e.target.dataset.id;
            //remove from array.
            display.removeArrayTodo(buttonId);
        });
    }
}


