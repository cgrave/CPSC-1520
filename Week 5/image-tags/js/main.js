// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be 
document.querySelector('.feature.frm').addEventListener('submit', function (evt) {
	//var inputTag = evt.target.elements.tags.value;
	var frm = evt.target;
	var tag = frm.elements.tags;

	document.querySelector('p.feature.tags ').innerHTML += '#' + tag.value;
	tag.value = '';
	evt.preventDefault;
})
// document.querySelector('.feature.frm ').addEventListener( 'submit', function (evt) {
// 	 var frm = evt.target;
// 	 var tag = frm.elements.tags;

// 	 document.querySelector('p.feature.tags ').innerHTML += '#' + tag.value;
// 	 tag.value = '';
// 	 evt.preventDefault();
// });

// updated with the tag that was entered by the user.  Do not overwrite any existing tags,

// simply add each additional tag onto the already existing list.  A tag cannot be empty 
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden 
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.


