// Enter your JavaScript for the solution here...
var ImgArray = document.querySelectorAll('.thumb-display');
var counter = 0;
//number one is 'selected'
//ImgArray[0].lastElementChild.innerText = '#image';
//the above changes the text of the tag

// function FUNCTIONNAME(argument) {
// 	// body...
// }

//once filter is activated
//find the filter input and check if anything 
//from the nodelists are similar
//for loop


for(counter = 0; counter < ImgArray.length; counter++){
var str = 'moun';
var pho = ImgArray[counter].lastElementChild.innerText;
var indexWord = pho.indexOf(str);
pho.substring(indexWord,(indexWord+str.length))
//indexWord = 
if(indexWord == -1){
	console.log('Does not contain');
	//ImgArray[counter].style.display = 'hidden';
}
else{
	//ImgArray[counter].style.display = 'block';
}
var meee = pho.substring(indexWord,(indexWord+str.length));
}
// the word in substring
