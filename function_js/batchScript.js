$(document).ready(() => {

	// Define api get all general settings
	const urlGetAllGeneralSettings = 'http://server.mmsustainability.ac.id/generalSettings'

	// Get current batch data
	axios.get(urlGetAllGeneralSettings).then((response) => {
		// Populate batch name
		let batchName = response.data[0].batchName
		$('#batchIntake').val(`Batch ${batchName}`)
	})

})