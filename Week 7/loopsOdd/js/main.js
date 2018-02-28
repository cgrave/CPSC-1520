var output = document.querySelector('.output');
var list = '<ul>';
var count; // count the number of list items
var items; // access to the list items

// add list items
for (count = 0; count < 10; count = count + 1) {
	list = list + '<li>' + (count + 1) + '</li>';
}




list = list + '</ul>';

// display the list
output.innerHTML = list;

//Select the li elemts and visit each one
items = document.querySelectorAll('li');

// count += 1 ____ increment by one
for(count = 0; count < items.length; count+=2){
	// console.log(items[count]);

		items[count].classList.add("stripe");
}