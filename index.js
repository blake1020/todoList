//ADD a tod

//access button element
const button = (document.getElementById('add-todo'));

console.log(button);


//Add to do Function when button is clicked
function handleAddTodo() {
//identifying the element i want to add items to 
    const ul = document.querySelector('ul');
console.log(ul);
//create an li item to unorder list
const li = document.createElement('li'); //creating new list item
console.log("created list item", li);
//access the input element
const input = document.querySelector('input');
console.log(input.value)
//set the input text to my list items text
li.textContent = input.value;

//append my  list item to unorder list (as a child element)
ul.appendChild(li)

}






//Add an eventListener
button.addEventListener('click', handleAddTodo);

