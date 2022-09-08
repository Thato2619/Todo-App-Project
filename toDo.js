//Get all elements from HTML file and add querySelector
const input = document.querySelector(".dataInput");
const button = document.querySelector(".dataButton");
const list = document.querySelector(".dataList");

// add event listeners
button.addEventListener('click' , addTodo);