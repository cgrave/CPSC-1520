// for(){

// }
// document.querySelector('div.output').innerHTML = '<ol>' + TheLoops + '</ol>';


// Create a list for output
var output = document.querySelector('.output');
var list;
var numItems;
var count;// = 0; //havent added any yet

numItems = 10;//prompt('How many items?');
list = '<ol>'; // open the list

// while(count < numItems){
// 	list = list + '<li></li>';
// 	count++;
// }

// do{
// 	list = list + '<li></li>';
// 	count++;
// } while(count < numItems);

for(count = 0;count < numItems; count++){
	list = list + '<li></li>';
}


list = list + '</ol>'; // close the list

output.innerHTML = list;