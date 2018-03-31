$(document).ready(() => {

	// Define auth url
	const authUrl = 'https://server.mmsustainability.ac.id/auth'

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
			console.log(response.data)
			if (response.data === 'inquiries@mmsustainability.ac.id') {
				window.location.replace('page-approve-application.html')
			} else {
				window.location.replace('profile-settings.html')
			}
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