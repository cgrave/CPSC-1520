// 
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
//document.querySelector('.carousel>img').src = 'images/' + images[0];
document.querySelector('.carousel').addEventListener('click', function(evt){
	var target = evt.target;
	if(target.classList.contains('control')) {
		if(target.classList.contains('next')){
			//move to the next index in the array
			currentImg +=1;
		} else if(target.classList.contains('prev')){
			//move to the prev index in array
			currentImg -=1;
		} else{
			
		}
		//display the new current image
		document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
	}
});


// how do i make it so it just goes around not continue addding numbers?

// 
