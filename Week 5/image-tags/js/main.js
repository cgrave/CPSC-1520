document.querySelector('.feature.frm ').addEventListener( 'submit', function (evt) {
var frm = evt.target;
var tag = frm.elements.tags;
var error = document.querySelector('p.feature.error');

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



