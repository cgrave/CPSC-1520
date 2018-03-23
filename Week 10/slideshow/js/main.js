// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
var idx;
//var to = setTimeout( ,3000);
var slideshowInterval;
//fucntion for updating current slide image
function updateSlide(index){
    document.querySelector('.carousel>img').src = 'images/' + images[index];
    document.querySelector('.image-tracker .active').classList.remove('active');
    document.querySelectorAll('[data-idx]')[index].classList.add('active');   
}

//now call setInterval functions
slideshowInterval = setInterval(function() {
    currentImg +=1;
    if(currentImg == images.length){
        currentImg = 0;
    }
    updateSlide(currentImg)
}, 3000);



//update the existing code to use the updateslide function



// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0];

// add the appropriate number of selector bullets
for (idx = 0; idx < images.length; idx += 1) {
    document.querySelector('.image-tracker').innerHTML += '<span data-idx="' + idx + '">&bull;</span>';
}

// highlight the first bullet as 'active'
document.querySelector('.image-tracker').querySelector('span').classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function(evt) {
    var target = evt.target;
    if (target.classList.contains('control') || target.hasAttribute('data-idx')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            currentImg = (currentImg >= images.length) ? 0 : currentImg;
        } else if (target.classList.contains('prev')) {
            // move to the previous index in the array
            currentImg -= 1;
            currentImg = (currentImg < 0) ? images.length - 1 : currentImg;
        } else {
            // selector bullet clicked
            // use Number() to convert from string to number
            currentImg = Number(target.dataset.idx);
        }

        // display the new current image
        updateSlide(currentImg);

    }
});

// add a keypress event listener for left/right navigation
document.addEventListener('keydown', function(evt) {
    var click;
    switch (evt.keyCode) {
        case 39:
            // right arrow, trigger .next click
            click = document.createEvent('HTMLEvents');
            click.initEvent('click', true, true);
            document.querySelector('.carousel .control.next').dispatchEvent(click);
            break;
        case 37:
            // left arrow, trigger .prev click
            click = document.createEvent('HTMLEvents');
            click.initEvent('click', true, true);
            document.querySelector('.carousel .control.prev').dispatchEvent(click);
            break;
    }
});

document.querySelector('.carousel>img').addEventListener('mouseover', mouseGallery);

function mouseGallery(evt){
    var target = evt.target;
    console.log('over me');
    clearInterval(slideshowInterval);
}

document.querySelector('.carousel>img').addEventListener('mouseleave', mouseGalleryStart);

function mouseGalleryStart(evt){
    console.log('out me');
    slideshowInterval = setInterval(function() {
    currentImg +=1;
    if(currentImg == images.length){
        currentImg = 0;
    }
    updateSlide(currentImg)
}, 3000);}
