$(document).ready(() => {

	// Define sign out url
	const urlSignOut = 'http://localhost:3000/auth/signOut'

	// When button log out pressed
	$('#btnLogOut').click( async (e) => {
		await e.preventDefault()
		// Clear the local storage
		await localStorage.clear()
		// Sign out user
		await axios.get(urlSignOut)
		.then((response) => {
			console.log(response.data)
			// Load to login page
			window.location.replace('page-login.html')
		})
	})

})