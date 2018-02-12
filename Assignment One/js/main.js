// Enter your JavaScript for the solution here...
document.querySelector('form').addEventListener( 'submit', function (evt) {
	var form = evt.target;
	var tag = form.elements.tag;
	console.log("Hello");
var error = document.querySelector('p.error');

	if(tag.value.trim() == ''){
		error.classList.remove('hidden');
	 	error.innerHTML = '<p>Tags cannot be empty</p>';
	}
	else if(tag.value.split(" ").length >= 2){
		error.classList.remove('hidden');
		error.innerHTML = '<p>Tags cannot contain spaces</p>';
	}
	else{
		document.querySelector('p.feature.tags ').innerHTML += ' #' + tag.value;
		tag.value = '';
		error.classList.add('hidden');
		error.innerHTML = '';
	}

 	 evt.preventDefault();
});



