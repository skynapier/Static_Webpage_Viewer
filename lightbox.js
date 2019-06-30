const basicLightbox = require('basiclightbox')

document.querySelector('#wrap .logInfo .logStart button ').onclick = () => {
	var name = document.getElementById("logName").value;
	var email = document.getElementById("logEmail").value;
	var password = document.getElementById("logPassword").value;

	if (name == ""){
		name = "default name";
	}

	if (email == ""){
		email = "default email";
	}

	if (password == ""){
		password = "default password";
	}

	const html = `<p> name: ` +  name + `</p>`
	+ `<p> email: ` +  email + `</p>`
	+ `<p> password: ` +  password + `</p>`

	
	basicLightbox.create(
		html
	).show()
}

