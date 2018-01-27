/*

Create a click event listener on the .image-links element.  The listener function
should set the src attribute of the img.target-image element and prevent the default
behaviour from occurring.

- select the image class
- collect the image source from the link
- put the image source of whatever clicked into the target-image



*/
//need to prevent default
//a.preventDefault();

//this selects the source of class target-image
//var source = document.querySelector("img").src.innerHTML = "../img/beach1.jpg";
// mine above




/*var linkOne = document.querySelector(".image-links a");
//function
function linkHandler (evt){
	document.querySelector(".target-image").src = linkOne.href;
	evt.preventDefault();
}
linkOne.addEventListener("click", linkHandler);*/
//solution for oly one image



var imgLinks = document.querySelector(".image-links"); // div container

//function
function linkHandler(evt){
	if (event.target.nodeName == "A"){
		document.querySelector(".target-image").src = evt.target.href;
		evt.preventDefault();
	}

}


imgLinks.addEventListener("click", linkHandler);
