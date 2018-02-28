var todolist = document.querySelector('.todo-list');
var list = "<ul>";
var numofItems;
var c;
numofItems = prompt("How many tasks?");

// create the list items
// list += "<li>" + 
// 			'<input type="checkbox">' +
// 			'<label contenteditable>Todo Item ' + 1 + '</label>'
// 		"</li>";
// list += "</ul>";

for(c = 0; c < numofItems; c++){

	list += "<li>" + 
			'<input type="checkbox">' +
			'<label contenteditable>Todo Item ' + (c + 1) + '</label>'
		"</li>";

}
// display the list
	list += "</ul>";
	todolist.innerHTML += list;