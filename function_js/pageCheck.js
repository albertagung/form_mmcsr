$(document).ready(() => {

	// Check credentials
	let checkCredentialsUrl = 'https://server.mmsustainability.ac.id/auth/check'
	axios.get(checkCredentialsUrl)
	.then((response) => {
		// Set logged in user data in localStorage
		localStorage.setItem('dataUsers', JSON.stringify(response.data))
	})
	.catch((err) => {
		swal("Alert!", "Please log in first!", "warning").then(() => {
			window.location.replace('page-login.html')
		})
	})

})