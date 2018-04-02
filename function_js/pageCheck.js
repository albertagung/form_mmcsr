$(document).ready(() => {

	// Define update login state url
	const urlUpdateLoginState = `http://localhost:3000/loginState/5ac27641eb4fab1b5c9eab87`

	// Check credentials
	let checkCredentialsUrl = 'http://localhost:3000/auth/check'
	axios.get(checkCredentialsUrl)
	.then((response) => {
		// Set logged in user data in localStorage
		localStorage.setItem('dataUsers', JSON.stringify(response.data))
		// Define obj user for database
		let objUser = {
			firstName: response.data[0].firstName,
			lastName: response.data[0].lastName,
			email: response.data[0].email
		}
		axios.put(urlUpdateLoginState, objUser)
	})
	.catch((err) => {
		swal("Alert!", "Please log in first!", "warning").then(() => {
			window.location.replace('page-login.html')
		})
	})

})