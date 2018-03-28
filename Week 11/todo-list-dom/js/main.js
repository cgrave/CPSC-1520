

// // required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;
var dn = '\u21e9';
var up = '\u21e7';
var removeArr = ' \u2192';

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	
	var removeArrow;
	var spanDown, spanUp;
	var div,
		checkbox,
		label,
		labelText,
		todoText;

	todoText = evt.target.elements['todo-item'].value;

	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}

	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);

	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');

	// updown
	var upText = document.createTextNode(up);
	var dnText = document.createTextNode(dn);
	var reText = document.createTextNode(removeArr);
	
	removeArrow = document.createElement('span');
	removeArrow.classList.add('arrow');
	removeArrow.classList.add('delete');
	removeArrow.appendChild(reText);
	div.appendChild(removeArrow);


	//spans
	spanUp = document.createElement('span');
	spanUp.classList.add('arrow');
	spanUp.classList.add('up');
	spanUp.appendChild(upText);

	//down
	spanDown = document.createElement('span');
	spanDown.classList.add('arrow');
	spanDown.classList.add('dn');
	spanDown.appendChild(dnText);

	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	div.appendChild(spanUp);
	div.appendChild(spanDown);

	// add the document fragment to the document for rendering
	todos.appendChild(div);

	// clear the form
	evt.target.reset();

	evt.preventDefault();
});

document.querySelector('.todo-list').addEventListener('click', function (evt) {
 // check for click on an arrow
 var targetTodo = evt.target.parentNode;
 var todoList = targetTodo.parentNode;
 var siblingTodo;
 var conf;

 if (evt.target.classList.contains('arrow')) {
	 // identify the type of arrow (i.e. down or up)
	 if (evt.target.classList.contains('dn')) {
	 	siblingTodo = targetTodo.nextElementSibling;

	 // insert the sibling before the target
	 	todoList.insertBefore(siblingTodo, targetTodo);
	 } else if (evt.target.classList.contains('up')) {
	 	siblingTodo = targetTodo.previousElementSibling;

	 // insert the sibling before the target
	 	todoList.insertBefore(targetTodo, siblingTodo);
	 } else if(evt.target.classList.contains('delete')){
	 	conf = confirm('Would you Like to Rmeove?');
	 	if(conf == true){
	 		todoList.removeChild(targetTodo);
	 	} else{
	 		console.log('OK Thanks');
	 	}
	 	
	 }
 }
});