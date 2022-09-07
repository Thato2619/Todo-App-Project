//Get all elements from HTML file and add querySelector
const form = document.querySelector("[data-form]");
const list = document.querySelector("[data-list]");
const input = document.querySelector("[data-input]");

//Create an empty object that contains empty array and constructor
class todoApp {
    todoItems = [];
    constructor(){}

}

//add event-Listener in the form 
form.addEventListener("submit" , (e) => {
    e.preventDefault(' ');

})