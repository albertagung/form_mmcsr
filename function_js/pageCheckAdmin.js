$(document).ready(() => {

	// Check credentials
	let checkCredentialsUrl = 'http://localhost:3000/auth/checkAdmin'
	axios.get(checkCredentialsUrl)
	.then((response) => {
		// Set logged in user data in localStorage
		localStorage.setItem('dataUsers', JSON.stringify(response.data))
	})
	.catch((err) => {
		swal("Alert!", "Only admin can visit this page, please login as admin", "warning").then(() => {
			window.location.replace('page-login.html')
		})
	})

})