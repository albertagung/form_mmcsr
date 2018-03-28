$(document).ready(() => {

	// Define auth url
	const authUrl = 'http://localhost:3000/auth'

	// Get email and pass for login
	getCredentials = () => {
		let email = $('#emailField').val()
		let password = $('#passwordField').val()
		let credentials = {
			email: email,
			password: password
		}
		return credentials
	}

	// Log in
	$('#btnLogin').click((e) => {
		e.preventDefault()
		// Send login data to server for auth
		axios.post(authUrl, getCredentials())
		.then((response) => {
			window.location.replace('profile-settings.html')
		})
		.catch((err) => {
			$('.main-container .container').prepend(`
				<div 
					class="alert alert-danger" 
					role="alert" 
					style="background-color: red; color: white">
				  Incorrect Username or Password !
				</div>
			`)
		})
	})

})