// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
function handleFeatureClick() {
	var desc = document.querySelector('p.feature.description');

	// remove the hidden class IF it is present,
	// otherwise, add it back!

	// solve with class List
	if(dec.ClassList.contains("hidden") /* == true */ ){
		console.log("Off - Hidden");
		desc.classList.remove('hidden');
	}
	else{
		console.log("On - Hidden");
		desc.classList.add('hidden');
	}
	
	// achieve the same result using using string functions
	/*	if(desc.className.indexOf("hidden") != -1) { 
		console.log("Off - Hidden");
		desc.classList.remove('hidden');
	}
	else{
		console.log("On - Hidden");
		desc.classList.add('hidden');
		
	}*/

	if(desc.className.indexOf("hidden") > -1) { 
		console.log("Off - Hidden");
		desc.classList.remove('hidden');
	}
	else{
		console.log("On - Hidden");
		desc.classList.add('hidden');

	}


}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);