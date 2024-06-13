//ADD a tod

//access button element
const button = (document.getElementById('add-todo'));

console.log(button);


//Add to do Function when button is clicked
function handleAddTodo() {
console.log("button is clicked")
}
//Add an eventListener
button.addEventListener('click', handleAddTodo);
