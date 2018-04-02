$(document).ready(() => {

	// Define auth URL
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

	// Get email and pass for login
	getCredentialsForPassword = () => {
		let email = $('#emailField2').val()
		let password = $('#passwordField2').val()
		let credentials = {
			email: email,
			password: password
		}
		return credentials
	}

	// Re login change email and profile
	$('#btnReLogin').click((e) => {
		e.preventDefault()
		// Send login data to auth database
		axios.post(authUrl, getCredentials())
		.then((response) => {
			// Get user object with new profile
			let applicantObj = JSON.parse(localStorage.getItem('dataUsers'))[0]
			let userObj = {
				_id: applicantObj._id,
				firstName: $('#firstName').val(),
				lastName: $('#lastName').val(),
				phoneNumber: $('#phoneNumber').val(),
				dateOfBirth: {
					dayOfBirth: $('#dayOfBirth').val(),
					monthOfBirth: $('#monthOfBirth').val(),
					yearOfBirth: $('#yearOfBirth').val()
				},
				applicationId: applicantObj.applicationId,
				// New email
				email: $('#email').val()
			}
			// Change the email
			const urlChangeEmail = `http://localhost:3000/auth/changeEmail/`
			axios.post(urlChangeEmail, userObj)
			.then((response) => {
				console.log(response.data)
				window.location.replace('page-login.html')
			})
		})
		.catch((err) => {
			$('.modal-content .form').prepend(`
				<div 
					class="alert alert-danger" 
					role="alert">
				  Incorrect Username or Password !
				</div>
			`)
		})
	})


	// Re-login change password
	// Checking the type password = re-type password
	$('#btnSavePassword').click((e) => {
		e.preventDefault()
		let newPassword = $('#password').val()
		let newRetypePassword = $('#retypePassword').val()
		if (newPassword === newRetypePassword && newPassword !== '') {
			// Show modal container
			$('.modal-container').show()
			$('#btnReLoginPassword').click((e) => {
				e.preventDefault()
				// Send login data to auth database
				axios.post(authUrl, getCredentialsForPassword())
				.then((response) => {
					// Change the password
					const urlChangePassword = `http://localhost:3000/auth/changePassword/`
					axios.post(urlChangePassword, {
						password: newRetypePassword
					})
					.then((response) => {
						console.log(response.data)
						window.location.replace('page-login.html')
					})
				})
				.catch((err) => {
					$('.modal-content .form').prepend(`
						<div 
							class="alert alert-danger" 
							role="alert">
						  Incorrect Username or Password !
						</div>
					`)
				})
			})
		} else {
			// Hide modal container
			$('.modal-container').hide()
			swal("Alert", "Your password did not match", "warning")
		}
	})

})