// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

//

// select the links
// change active to the one clicked on
// when that active is clicked on then change the image sizes

var activeLink = document.querySelector("ul.thumbnail-sizes");
var imgActive = document.querySelector("div.thumbnails");

//s.split("-") [1]

function handleFeatureClick(evt) {
	var size;
	if(evt.target.nodeName == "LI"){
		// get size for the list item

		size = evt.target.className.split("-")[1];
		// couldnt also use replace, or substring ..

		// get the className of the div
		imgActive.className = "thumbnails " + size;
	}
	
//.thumbnail.classList.contains("active");

}


// event listener
activeLink.addEventListener('click', handleFeatureClick);

