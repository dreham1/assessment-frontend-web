console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been successfully submitted!!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img');

	img.addEventListener('mouseover', function(e){
		alert('Give the user a compliment!')
})
	 