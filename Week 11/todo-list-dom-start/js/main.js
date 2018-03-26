/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/
var todoList = document.querySelector('.todo-list');
var todoCount = 0;
var up = '\u21e9';
var dn = '\u21e7';

document.querySelector('.todo-form').addEventListener('submit', function(evt){
	//vars for create the DOM fragment (i.e. todo div)
	var div, checkbox, label, todoText, labelText;
	var spanDown, spanUp;
	// determind the text

	if(evt.target.elements['todo-item'].value.trim() == ''){
		todoText = 'Todo ' + (todoCount + 1);

	} else {
		todoText = evt.target.elements['todo-item'].value.trim();
	}

	//create the elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);

	// updown
	up = document.createTextNode(up);
	dn = document.createTextNode(dn);
	
	//spans
	spanUp = document.createElement('span');
	spanUp.classList.add('arrow');
	spanUp.classList.add('up');
	spanUp.appendChild(up);

	//down
	spanDown = document.createElement('span');
	spanDown.classList.add('arrow');
	spanDown.classList.add('dn');
	spanDown.appendChild(dn);


	// set required attributes
	checkbox.setAttribute('type', 'checkbox');
	label.setAttribute('contenteditable', '');


	// build the fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	div.appendChild(spanUp);
	div.appendChild(spanDown);
	//span


	//append fragment to the .todo-list
	todoList.appendChild(div); // this is when it will be displayed

	//added a todo item
	todoCount +=1;

	//clear
	evt.target.reset();

	evt.preventDefault();
});