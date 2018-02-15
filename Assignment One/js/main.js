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
		
		//three choices
		if(document.querySelector(".editor img").alt == "Athens"){
			document.querySelectorAll(".thumbnails img")[0].dataset.tags += " #" + tag.value;
		}
		else if(document.querySelector(".editor img").alt == "Barcelona"){
			document.querySelectorAll(".thumbnails img")[1].dataset.tags += " #" + tag.value;
		}
		else{
			document.querySelectorAll(".thumbnails img")[2].dataset.tags += " #" + tag.value;
		}// gets the correct image 

		error.classList.add('hidden');
		error.innerHTML = '';
	}
	tag.value = "";
 	 evt.preventDefault();
});



document.querySelector("ul.thumbnails").addEventListener("click", function(evt){
	var image = evt.target; // this is what selects the image that has been clicked on
	var textme = image.alt;

	

	document.querySelector('p.tags ').innerHTML = image.dataset.tags;
// ABOVE	 changes the i
	if(textme === image.alt){
		console.log("if")
		document.querySelector(".editor img").alt = textme;
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


//TODO: DIsplay tags again when change