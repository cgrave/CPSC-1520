// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
var idx;
var imageTracker = document.querySelector('.image-tracker');

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

// add the appropriate number of selector bullets
for(idx = 0; idx < images.length; idx++){
    imageTracker.innerHTML += '<span class="control" data-idx="' + idx + ' ">&bull;</span>';
}
// highlight the first bullet as 'active'
document.querySelector('.image-tracker > span').classList.add('active');
// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    var target = evt.target;
    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            if(currentImg >= images.Length){
                currentImg = 0;
            }
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
            if(currentImg == 0){
                currentImg = images.length - 1;
            }
        } else {
        	// selector bullet clicked
    		currentImg = target.dataset.idx;
        }
        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        imageTracker.querySelector('span.active').classList.remove('active');
        imageTracker.querySelectorAll('span')[currentImg].classList.add('active');
    }
}); 
