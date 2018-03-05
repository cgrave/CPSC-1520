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

// this kinda works
/*var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
document.querySelector('.carousel').addEventListener('click', function(evt){
	var target = evt.target;
	if(target.classList.contains('control')) {
		if(target.classList.contains('next')){
			//move to the next index in the array
			if(currentImg >= (images.length-1)){
				currentImg = 0;
				console.log('setting to zero from next button');
			} else{
				currentImg +=1;
				console.log('increment current img from next button');
			}
		} else if(target.classList.contains('prev')){
			//move to the prev index in array
			if(currentImg <= 0){
				currentImg = 0;
				console.log('setting current img to zero from prev button');
			} else{
				currentImg -=1;
				console.log('decrement current img from prev button');
			}
			
		}
		//display the new current image
		document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
	}
});*/
