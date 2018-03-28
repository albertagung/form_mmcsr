$(document).ready(() => {

	// Define application getter url
	const urlGetApplications = 'http://localhost:3000/applications'

	// Load all applications
	axios.get(urlGetApplications).then((response) => {
		// Populate all applications
		response.data.forEach((dataApplications, index) => {
			// Init modal
			$(`#modalApplicationDetails${index+1}`).modal()
			$('#applicationList').append(`
				<tr>
					<td>${index+1}</td>
		      <td>${dataApplications.applicationId}</td>
		      <td></td>
		      <td>Date Here</td>
		      <td>
		      	<button 
		      		type="button" 
		      		class="btn btn-primary" 
		      		data-toggle="modal" 
		      		data-target="#modalApplicationDetails${index+1}"
		      		style="margin: 0">
						  See Details
						</button>
		      </td>
		    </tr>
			`)
			// Populate application details in modal
			$('#content').append(`
				<div class="modal fade" id="modalApplicationDetails${index+1}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title">Do you want to approve this application?</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        <div class="row justify-content-md-center">
									<div id="applicationDetails" class="col-md-12 text-center">
										<p>Applicant ID: <strong>${dataApplications.applicationId}</strong></p>
										<p>Applicant Name: <strong>${dataApplications.applicantName}</strong></p>
										<p>Applicant Email Address: <strong>${dataApplications.generalInformation.emailAddress}</strong></p>
										<p>Applicant Phone Number: <strong>${dataApplications.generalInformation.phoneNumber}</strong></p>
										<p>Date Applied: <strong>XXXXXXX</strong></p>
									</div>
								</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-danger">Delete</button>
				        <button type="button" class="btn btn-success">Approve</button>
				      </div>
				    </div>
				  </div>
				</div>
			`)
		})
	})

	// Load application details


	// When button yes clicked
	$('#btnYes').click((e) => {
		e.preventDefault()
		// Bring confirmation
		swal("Approved", "This application has been approved", "success")
		.then(() => {
			// Send email trigger to server
		})
	})

})