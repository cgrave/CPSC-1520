var targetImage = document.querySelector('.target-image');
var controlsDiv = document.querySelector('.controls');
var currentImage = 0;
var opacity = 1;
var intervalId;
var images = [
	'img/beach1.jpg',
	'img/beach2.jpg',
	'img/beach3.jpg'
];

controlsDiv.addEventListener('click', controlsHandler);
document.addEventListener('keydown', documentHandler);

function moveSlide(dir) {
	// try to advance the current image
	currentImage += dir;
	// check for before the first, or after the last...
	if (currentImage < 0) {
		currentImage = images.length - 1;
	} else if (currentImage === images.length) {
		currentImage = 0;
	}
	targetImage.src = images[currentImage];
}

function documentHandler(evt) {
	switch (evt.code) {
		case 'ArrowRight':
			// next image
			moveSlide(+1);
			break;
		case 'ArrowLeft':
			// prev image
			moveSlide(-1);
			break;
	}
}

function controlsHandler(evt) {
	// Determine the next index for image to show
	switch (evt.target.className) {
		case 'btn-prev':
			moveSlide(-1);
			break;
		case 'btn-next':
			moveSlide(+1);
			break;
	}
}

// TODO: preload known images
(function (imageArray){
	var img;
	var index;
	for(index = 0; index < imageArray.length; index++){
		img = new Image();// also could use document.createElement('img');
		img.src = imageArray[index];

	}
}(images)); //scooped function with no name lol (function(argument){codes}(param));
//immediately invoked function expressrions
//iife

//preloadImages();
