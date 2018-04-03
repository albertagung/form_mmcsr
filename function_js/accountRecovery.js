$(document).ready(() => {

	// Define account recovery url
	const urlAccountRecovery = 'http://server.mmsustainability.ac.id/auth/resetPassword'

	// Trigger send data
	$('#btnRecoverAccount').click((e) => {
		e.preventDefault()
		// Get email from client
		let emailAddress = $('#emailAddress').val()
		// Send data email to server
		axios.post(urlAccountRecovery, {emailAddress: emailAddress})
		.then((response) => {
			swal("Please check your inbox", "We've sent reset password confirmation to your email", "success")
			.then(() => {
				window.location.replace('page-login.html')
			})
		})
		.catch((err) => {
			console.log(err)
		})
	})

})