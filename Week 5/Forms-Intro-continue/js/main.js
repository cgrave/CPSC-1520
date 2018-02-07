function validateField(field){
	var isValid = true;

	field.classList.forEach(function(value){
	//console.log(value);
	switch(value){
		case 'validate-not-empty':
			if(field.value.trim() == ""){
			isValid = false;
			}
			break;
		case 'validate-password':
			if(field.value.trim().length < 8){
			isValid = false;
			}
			break;
		default:
			console.log(value + " is not a validate class")
			break;
	}
		// if(value == "validate-not-empty"){
		// 	//isValid = !(field.value.trim() == "");
		// 	if(field.value.trim() == ""){
		// 		isValid = false;
		// 	}
		// }
		// if(value == "validate-password"){
		// 	if(field.value.trim().length < 8){
		// 		isValid = false;
		// 	}
		// }
	})
	return isValid;
}


document.querySelector('.login-form').addEventListener('submit', function (evt) {
	var username = evt.target.elements.username;
	var handle =  evt.target.elements.handle;
	var passsword = evt.target.elements.passsword;
	var valid = true;

	if(!validateField(username)) {
		valid = false;
		username.classList.add('error');
	} else {
		username.classList.remove('error');
	}
	if(!validateField(handle)) {
		valid = false;
		handle.classList.add('error');
	} else {
		handle.classList.remove('error');
	}
	if(!validateField(password)) {
		valid = false;
		password.classList.add('error');
	} else {
		password.classList.remove('error');
	}

	if(valid == false) { // if(!valid) {
		evt.preventDefault();
	}

});