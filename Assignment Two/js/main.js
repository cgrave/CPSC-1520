// Enter your JavaScript for the solution here...
var ImgArray = document.querySelectorAll('.thumb-display');
var counter = 0;
var textarea = document.querySelector('.frm-control');
var str = textarea;
var aReset = document.querySelector('.reset');

textarea.addEventListener('input', changeSearch);

function changeSearch(){
	str = textarea.value; //this works to get the values as its being typed

	//var str is string that is entered that then goes into for loop to check all p
	for(counter = 0; counter < ImgArray.length; counter++){
		var pho = ImgArray[counter].lastElementChild.innerText;
		if(pho.includes(str.trim())){
			ImgArray[counter].classList.remove('hidden');
		}
		else{
			ImgArray[counter].classList.add('hidden');
		}
	//TODO: THIS NEEDS TO ONLY SHOW UP IF THERE IS ANY REAL TEXT PRESENT. NOT
	//JUST IMMEDIATELY AFTER IT EVERY TIME!!
	aReset.classList.remove('hidden');
	}


aReset.addEventListener('click', resetbuttons);
}

function resetbuttons() {
	aReset.classList.add('hidden');
	textarea.value = '';
	for(counter = 0; counter < ImgArray.length; counter++){
		ImgArray[counter].classList.remove('hidden');
	}
}
