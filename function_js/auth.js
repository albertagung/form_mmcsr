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
		// Loading overlay start
		$('body').loading('start')
		e.preventDefault()
		// Send login data to server for auth
		axios.post(authUrl, getCredentials())
		.then((response) => {
			console.log(response.data)
			if (response.data === 'inquiries@mmsustainability.ac.id') {
				// Set user email to localStorage
				localStorage.setItem('userEmail', JSON.stringify({userEmail: response.data}))
				pageInitialCheck().then(() => {
					// Loading overlay stop
					$('body').loading('stop')
					window.location.replace('page-approve-application.html')
				})
			} else {
				// Set user email to localStorage
				localStorage.setItem('userEmail', JSON.stringify({userEmail: response.data}))
				pageInitialCheck().then(() => {
					// Loading overlay stop
					$('body').loading('stop')
					window.location.replace('profile-settings.html')
				})
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

	// Page check function to insert new login state
	pageInitialCheck = () => {
		return new Promise ((resolve, reject) => {
			// Get user email from localStorage
			const objUserEmail = JSON.parse(localStorage.getItem('userEmail'))
			console.log(objUserEmail)
			// Check if user has logged in or not
			if (objUserEmail) {
				// Check credentials
				let checkCredentialsUrl = 'http://localhost:3000/auth/check'
				axios.post(checkCredentialsUrl, objUserEmail)
				.then((response) => {
					console.log(response.data)
					// Set logged in user data in localStorage
					localStorage.setItem('dataUsers', JSON.stringify(response.data))
					// Define update login state url
					const urlInsertNewLoginState = `http://localhost:3000/loginState`
					// Define obj user for database
					let objUser = {
						firstName: response.data[0].firstName,
						lastName: response.data[0].lastName,
						email: response.data[0].email
					}
					resolve(axios.post(urlInsertNewLoginState, objUser))
				})
				.catch((err) => {
					reject(err)
				})
			}
		})
	}

})