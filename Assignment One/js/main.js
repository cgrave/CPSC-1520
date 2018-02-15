document.querySelector('form').addEventListener( 'submit', function (evt) {
	var form = evt.target;
	var tag = form.elements.tag;
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
		document.querySelector('p.tags ').innerHTML += ' #' + tag.value;
		// the dataset of tasg is being changed by the innerHTML plus continueing adding the tag.value
		// while the tags are being submitted, add to the selected image tags
			// var s = document.querySelector('img ').addEventListener("click", function(evt){
			// s.dataset.tags += '' + tag.value;
			// evt.preventDefault();
			// })
		// how do i know which image has been selcted?
		error.classList.add('hidden');
		error.innerHTML = '';
	}

 	 evt.preventDefault();
});




document.querySelector("ul.thumbnails").addEventListener("click", function(evt){
	var image = evt.target; // this is what selects the image that has been clicked on
	var textme = image.alt;
	
// ABOVE	 changes the i
	if(textme === image.alt){
		console.log("if")
		textme = image.alt + ".png"
		var titlevar = image.title;
		document.querySelector(".editor img").src = "img/" + textme;
		document.querySelector("h2.title").innerHTML = titlevar;

	}
	else{
		console.log("Else")
		
	}

	evt.preventDefault();

})
