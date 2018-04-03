$(document).ready(() => {

	// Define application getter url
	const urlGetApplications = 'https://server.mmsustainability.ac.id/applications'

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
				        <div class="row">
									<div id="applicationDetails" class="col-md-12">
										<p>Applicant ID: <strong>${dataApplications.applicationId}</strong></p>
										<p>Applicant Name: <strong>${dataApplications.applicantName}</strong></p>
										<p>Applicant Email Address: <strong>${dataApplications.generalInformation.emailAddress}</strong></p>
										<p>Applicant Phone Number: <strong>${dataApplications.generalInformation.phoneNumber}</strong></p>
										<p>Date Applied: <strong>${new Date(dataApplications.createdAt)}</strong></p>
										<p>Status: <strong>${dataApplications.status}</strong></p>
									</div>
								</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-danger" id="btnDelete${index+1}">Delete</button>
				        <button type="button" class="btn btn-success" id="btnApprove${index+1}">Approve</button>
				      </div>
				    </div>
				  </div>
				</div>
			`)

			// When button approve clicked
			$(`#btnApprove${index+1}`).click((e) => {
				e.preventDefault()
				// Bring confirmation
				// Define edit application url
				const urlEditApplication = `https://server.mmsustainability.ac.id/applications/edit/${dataApplications.applicationId}`
				// Update the application status
				axios.put(urlEditApplication, {
					applicationId: dataApplications.applicationId,
					applicantName: dataApplications.applicantName,
			  	generalInformation: {
			  		emailAddress: dataApplications.generalInformation.emailAddress,
			  		batchIntake: dataApplications.generalInformation.batchIntake,
			  		country: dataApplications.generalInformation.country,
			  		city: dataApplications.generalInformation.city,
			  		address: dataApplications.generalInformation.address,
			  		postalCode: dataApplications.generalInformation.postalCode,
			  		province: dataApplications.generalInformation.province,
			  		phoneNumber: dataApplications.generalInformation.phoneNumber,
			  		typeOfIdentity: dataApplications.generalInformation.typeOfIdentity,
			  		identityNumber: dataApplications.generalInformation.identityNumber,
			  		admissionTestDate: {
			  			dayAdmission: dataApplications.generalInformation.admissionTestDate.dayAdmission,
			  			monthAdmission: dataApplications.generalInformation.admissionTestDate.monthAdmission,
			  			yearAdmission: dataApplications.generalInformation.admissionTestDate.yearAdmission
			  		},
			  		dateOfBirth: {
			  			dayOfBirth: dataApplications.generalInformation.dateOfBirth.dayOfBirth,
			  			monthOfBirth: dataApplications.generalInformation.dateOfBirth.monthOfBirth,
			  			yearOfBirth: dataApplications.generalInformation.dateOfBirth.yearOfBirth
			  		},
			  		maritalStatus: dataApplications.generalInformation.maritalStatus,
			  		religion: dataApplications.generalInformation.religion
			  	},
			  	academicQualification: {
			  		juniorHighSchoolName: dataApplications.academicQualification.juniorHighSchoolName,
			  		juniorHighSchoolStartYear: dataApplications.academicQualification.juniorHighSchoolStartYear,
			  		juniorHighSchoolEndYear: dataApplications.academicQualification.juniorHighSchoolEndYear,
			  		seniorHighSchoolName: dataApplications.academicQualification.seniorHighSchoolName,
			  		seniorHighSchoolStartYear: dataApplications.academicQualification.seniorHighSchoolStartYear,
			  		seniorHighSchoolEndYear: dataApplications.academicQualification.seniorHighSchoolEndYear,
			  		universities: [{
			  			universityName: dataApplications.academicQualification.universities.universityName,
				  		universityStartYear: dataApplications.academicQualification.universities.universityStartYear,
				  		universityEndYear: dataApplications.academicQualification.universities.universityEndYear,
				  		major: dataApplications.academicQualification.universities.major,
				  		degree: dataApplications.academicQualification.universities.degree
			  		}],
			  		ielts: {
			  			answerIelts: dataApplications.academicQualification.ielts.answerIelts,
			  			scoreIelts: dataApplications.academicQualification.ielts.scoreIelts
			  		},
			  		toefl: {
			  			answerToefl: dataApplications.academicQualification.toefl.answerToefl,
			  			scoreToefl: dataApplications.academicQualification.toefl.scoreToefl
			  		},
			  		tpa: {
			  			answerTpa: dataApplications.academicQualification.tpa.answerTpa,
			  			scoreTpa: dataApplications.academicQualification.tpa.scoreTpa
			  		},
			  		qualifications: [{
			  			course: dataApplications.academicQualification.qualifications.course,
			  			courseDetail: dataApplications.academicQualification.qualifications.courseDetail
			  		}]
			  	},
			  	financialProvision: {
			  		answerFinancialProvision: dataApplications.financialProvision.answerFinancialProvision,
			  		detailFinancialProvision: dataApplications.financialProvision.detailFinancialProvision
			  	},
			  	supportingInformation: {
			  		marketingSource: {
			  			answerMarketingSource: dataApplications.supportingInformation.marketingSource.answerMarketingSource,
			  			detailMarketingSource: dataApplications.supportingInformation.marketingSource.detailMarketingSource
			  		},
			  		personalFactor: dataApplications.supportingInformation.personalFactor
			  	},
			  	paymentMethod: dataApplications.paymentMethod,
			    createdAt: dataApplications.createdAt,
			    status: 'APPROVED'
				}).then((response) => {
					swal("Approved", "This application has been approved", "success")
					.then(() => {
						// Define url for sending approved email
						const urlApprovedEmail = 'https://server.mmsustainability.ac.id/emailTemplate/emailApproved'
						// Send email trigger to server
						axios.post(urlApprovedEmail, dataApplications)
						.then((responseEmail) => {
							console.log(responseEmail.data)
							window.location.replace('page-approve-application.html')
						})
					})
				})
			})

		})
	})

})