$(document).ready(() => {

	// Define auth url
	const authUrl = 'http://server.mmsustainability.ac.id/auth'

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
		// Loading overlay start
		$('body').loading('start')
		e.preventDefault()
		// Send login data to server for auth
		axios.post(authUrl, getCredentials())
		.then((response) => {
			console.log(response.data)
			if (response.data === 'inquiries@mmsustainability.ac.id') {
				// Loading overlay stop
				$('body').loading('stop')
				window.location.replace('page-approve-application.html')
			} else {
				// Loading overlay stop
				$('body').loading('stop')
				window.location.replace('profile-settings.html')
			}
		})
		.catch((err) => {
			// Loading overlay stop
			$('body').loading('stop')
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