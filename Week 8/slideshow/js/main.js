// 
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
//document.querySelector('.carousel>img').src = 'images/' + images[0];
document.querySelector('.carousel').addEventListener('click', function(evt){
	var target = evt.target;
	if(target.classList.contains('control')) {
		console.log('control clicked...');
	}
});


// 

// 