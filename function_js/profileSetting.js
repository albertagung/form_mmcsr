$(document).ready(() => {

	// Loading overlay start
	$('body').loading('start')

	// Wait until pageCheck.js done loading
	setTimeout(() => {
		// Define application by id url
		let applicantObj = JSON.parse(localStorage.getItem('dataUsers'))[0]
		let applicantName = `${applicantObj.firstName} ${applicantObj.lastName}`
		let applicationId = applicantObj.applicationId
		let urlGetApplicationByid = `http://localhost:3000/applications/${applicationId}`
		axios.get(urlGetApplicationByid)
		.then((response) => {
			let dataUsers = response.data[0]
			// Populate data from database
			if (dataUsers) {
				$('#applicantName').text(applicantName)
				$('#email').val(applicantObj.email)
				$('#phoneNumber').val(applicantObj.phoneNumber)
				$('#firstName').val(applicantObj.firstName)
				$('#firstName').attr('disabled', true)
				$('#lastName').val(applicantObj.lastName)
				$('#lastName').attr('disabled', true)
				$('#dayOfBirth').val(applicantObj.dateOfBirth.dayOfBirth)
				$('#dayOfBirth').attr('disabled', true)
				$('#monthOfBirth').val(applicantObj.dateOfBirth.monthOfBirth)
				$('#monthOfBirth').attr('disabled', true)
				$('#yearOfBirth').val(applicantObj.dateOfBirth.yearOfBirth)
				$('#yearOfBirth').attr('disabled', true)
				$('#applicationId').text(applicantObj.applicationId)
				// Stop loading when finished
				$('body').loading('stop')
			} else {
				$('#applicantName').text(applicantName)
				$('#firstName').val(applicantObj.firstName)
				$('#lastName').val(applicantObj.lastName)
				$('#email').val(applicantObj.email)
				$('#phoneNumber').val(applicantObj.phoneNumber)
				$('#dayOfBirth').val(applicantObj.dateOfBirth.dayOfBirth)
				$('#monthOfBirth').val(applicantObj.dateOfBirth.monthOfBirth)
				$('#yearOfBirth').val(applicantObj.dateOfBirth.yearOfBirth)
				$('#applicationId').text('No Application Yet')
				$('#applicationContainer').html(`
					<div class="col-md-12">
						<a 
							href="form_index.html" 
							class="btn btn-primary"
							style="width: 100%">
							Apply Now
						</a>
					</div>
				`)
				// Stop loading when finished
				$('body').loading('stop')
			}

			// Populate application status
			if (dataUsers.status === "APPROVED") {
				$('#applicationStatus').html(`
					<span class="badge badge-success">APPROVED</span>
				`)
			} else {
				$('#applicationStatus').html(`
					<span class="badge badge-secondary">UN-APPROVED</span>
				`)
			}

		})
	}, 2000)

})