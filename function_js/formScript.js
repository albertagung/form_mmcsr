// Form general script
$(document).ready(() => {

	// Check if application ID is exist
	let applicantObj = JSON.parse(localStorage.getItem('dataUsers'))[0]
	if (applicantObj.applicationId) {
		swal("Alert", "You have already applied, wait for our team to respond", "warning")
		.then(() => {
			window.location.replace('profile-settings.html')
		})
	}

	// First load
	$('input').prop('required', true)
	$('#ovalForm1').css('background-color', '#4a90e2')
	$('#formContent2').hide()
	$('#formContent3').hide()

	// On save and next form section 1
	$('#btnNextForm1').click(() => {
		if (validateInputSection1()) {
			// Calling the form objects getter
			getAllData()
			// Transferring data to form section 2
			transferDataToForm2()
			// Changing navigation component dynamicly
			$('#formContent1').hide()
			$('#ovalForm1').css('background-color', '')
			$('#ovalForm2').css('background-color', '#4a90e2')
			$('#formContent2').show()
			$('html, body').animate({
		    scrollTop: $("#formContent2").offset().top
		 	}, 500);
		} else {
			swal("Alert!", "Please fill and check all input form", "warning")
		}
	})
	
	// On save and next form section 2
	$('#btnNextForm2').click( async () => {
		if (validateInputSection2()) {
			// Calling the form object getter
			await getPaymentMethod()
			// Combined data from section 1 with section 2
			await getCombinedData()
			// Post form data to database
			await sendToDatabase()
			$('#formContent2').hide()
			$('#ovalForm2').css('background-color', '')
			$('#ovalForm3').css('background-color', '#4a90e2')
			$('#formContent3').show()
			$('html, body').animate({
		    scrollTop: $("#formContent3").offset().top
		 	}, 500);
		} else {
			swal("Alert!", "Please fill and check all input form", "warning")
		}
	})

	// Click to back
	$('#btnBackForm2').click(() => {
		e.preventDefault()
		$('#formContent2').hide()
		$('#ovalForm2').css('background-color', '')
		$('#formContent3').hide()
		$('#ovalForm3').css('background-color', '')
		$('#formContent1').show()
		$('#ovalForm1').css('background-color', '#4a90e2')
	})

	$('#btnBackForm3').click(() => {
		e.preventDefault()
		$('#formContent1').hide()
		$('#ovalForm1').css('background-color', '')
		$('#formContent3').hide()
		$('#ovalForm3').css('background-color', '')
		$('#formContent2').show()
		$('#ovalForm2').css('background-color', '#4a90e2')
	})

	// Adding more major and concentration input
	$('#btnAddUniversity').click((e) => {
		e.preventDefault()
		$('#universityAdding').append(
			`<br>
			<div class="row">
				<div class="col-md-8">
					<label for="">University Name</label>
	    		<input 
	    			id="${uuidv4()}" 
	    			type="text" 
	    			class="form-control universityName" 
	    			placeholder="University Name">
				</div>
				<div class="col-md-2">
					<label for="">From</label>
	    		<input 
	    			id="${uuidv4()}"
	    			type="text" 
	    			class="form-control universityStartYear" 
	    			placeholder="From">
				</div>
				<div class="col-md-2">
					<label for="">To</label>
	    		<input 
	    			id="${uuidv4()}"
	    			type="text" 
	    			class="form-control universityEndYear" 
	    			placeholder="To">
				</div>
			</div>
			<br>
			<div class="row">
				<div class="col-md-4">
					<label for="">Degree</label>
	    		<input 
	    			id="${uuidv4()}"
	    			name="degree" 
	    			type="text" 
	    			class="form-control degree" 
	    			placeholder="Degree">
				</div>
				<div class="col-md-4">
					<label for="">Major / Concetration</label>
	    		<input
	    			id="${uuidv4()}"
	    			name="major" 
	    			type="text" 
	    			class="form-control major" 
	    			placeholder="Major / Concetration">
				</div>
			</div>`
		)
	})

	// Adding more qualifications
	$('#btnAddQualification').click((e) => {
		e.preventDefault()
		$('#qualificationsAdding').append(
			`<br>
			<div class="row">
				<div class="col-md-4">
					<label for="">Course</label>
					<input 
						id="${uuidv4()}"
						name="courseQualification"
						type="text"
						class="form-control course"
						placeholder="Course">
				</div>
				<div class="col-md-8">
					<label for="">Course Details</label>
					<input 
						id="${uuidv4()}"
						name="detailQualification"
						type="text"
						class="form-control courseDetail"
						placeholder="Course Details">
				</div>
			</div>`
		)
	})

	window.setTimeout(() => {
		// console.log($('input[name="ieltsRadio"]:checked').val())
	}, 5000)

})

// Get data form section 1

// Un-disabled obtained score options
// IELTS Radio
$('#ieltsRadioYes').click(() => {
	$('#scoreIelts').attr('disabled', false)
})
$('#ieltsRadioNo').click(() => {
	$('#scoreIelts').attr('disabled', true)
})
// TOEFL Radio
$('#toeflRadioYes').click(() => {
	$('#scoreToefl').attr('disabled', false)
})
$('#toeflRadioNo').click(() => {
	$('#scoreToefl').attr('disabled', true)
})
// TPA Radio
$('#tpaRadioYes').click(() => {
	$('#scoreTpa').attr('disabled', false)
})
$('#tpaRadioNo').click(() => {
	$('#scoreTpa').attr('disabled', true)
})

// Un-disabled other income source radio
$('#otherSourceRadio').click(() => {
	$('#otherSourceDetail').attr('disabled', false)
})
$('#personalFundRadio').click(() => {
	$('#otherSourceDetail').attr('disabled', true)
})
$('#placeEmploymentRadio').click(() => {
	$('#otherSourceDetail').attr('disabled', true)
})
$('#scholarshipRadio').click(() => {
	$('#otherSourceDetail').attr('disabled', true)
})

// Un-disabled other marketing source radio
$('#otherRecommendationRadio').click(() => {
	$('#otherRecommendation').attr('disabled', false)
})
$('#facebookRadio').click(() => {
	$('#otherRecommendation').attr('disabled', true)
})
$('#linkedinRadio').click(() => {
	$('#otherRecommendation').attr('disabled', true)
})
$('#googleSearchRadio').click(() => {
	$('#otherRecommendation').attr('disabled', true)
})
$('#websiteRadio').click(() => {
	$('#otherRecommendation').attr('disabled', true)
})
$('#friendRecommendationRadio').click(() => {
	$('#otherRecommendation').attr('disabled', true)
})

// Get General Info Form
getGeneralInformation = () => {

	// Declaring object from localStorage
	let applicantObj = JSON.parse(localStorage.getItem('dataUsers'))[0]

	// Declaring General Information Selector
	let generalInformation = $('#formGeneralInfo')

	// Creating input objects
	let batchIntake = generalInformation.find('input[name="batchIntake"]').val()
	let address = generalInformation.find('input[name="address"]').val()
	let admissionTestDate = {
		dayAdmission: generalInformation.find('select[name="dayAdmission"]').val(),
		monthAdmission: generalInformation.find('select[name="monthAdmission"]').val(),
		yearAdmission: generalInformation.find('select[name="yearAdmission"]').val()
	}
	let dateOfBirth = {
		dayOfBirth: generalInformation.find('select[name="dayOfBirth"]').val(),
		monthOfBirth: generalInformation.find('select[name="monthOfBirth"]').val(),
		yearOfBirth: generalInformation.find('select[name="yearOfBirth"]').val()
	}
	let postalCode = generalInformation.find('input[name="postalCode"]').val()
	let province = generalInformation.find('input[name="province"]').val()
	let city = generalInformation.find('input[name="city"]').val()
	let country = generalInformation.find('input[name="country"]').val()
	let typeOfIdentity = generalInformation.find('input[name="typeOfIdentity"]').val()
	let identityNumber = generalInformation.find('input[name="identityNumber"]').val()
	let maritalStatus = generalInformation.find('input[name="maritalStatus"]').val()
	let phoneNumber = generalInformation.find('input[name="phoneNumber"]').val()
	let emailAddress = applicantObj.email || generalInformation.find('input[name="emailAddress"]').val()
	let religion = generalInformation.find('input[name="religion"]').val()

	// Creating data object
	let generalInformationObject = {
		batchIntake: batchIntake,
		address: address,
		admissionTestDate: admissionTestDate,
		dateOfBirth: dateOfBirth,
		postalCode: postalCode,
		province: province,
		city: city,
		country: country,
		typeOfIdentity: typeOfIdentity,
		identityNumber: identityNumber,
		maritalStatus: maritalStatus,
		phoneNumber: phoneNumber,
		emailAddress: emailAddress,
		religion: religion
	}

	// Get the object
	return generalInformationObject

}

// Get Academic and Professional Qualifications Form
getAcademicProfessionalQuality = () => {

	// Declaring Each Input Selector
	let juniorHighSchoolName = $('#juniorHighSchoolName').val()
	let juniorHighSchoolStartYear = $('#juniorHighSchoolStartYear').val()
	let juniorHighSchoolEndYear = $('#juniorHighSchoolEndYear').val()
	let seniorHighSchoolName = $('#seniorHighSchoolName').val()
	let seniorHighSchoolStartYear = $('#seniorHighSchoolStartYear').val()
	let seniorHighSchoolEndYear = $('#seniorHighSchoolEndYear').val()
	let universityName = $('#universityName').val()
	let universityStartYear = $('#universityStartYear').val()
	let universityEndYear = $('#universityEndYear').val()
	// Checking radio button
	let ieltsRadio = {
		answerIelts: $('input[name="ieltsRadio"]:checked').val() || 'none',
		scoreIelts: $('#scoreIelts').val() || 0
	}
	let toeflRadio = {
		answerToefl: $('input[name="toeflRadio"]:checked').val() || 'none',
		scoreToefl: $('#scoreToefl').val() || 0
	}
	let tpaRadio = {
		answerTpa: $('input[name="tpaRadio"]:checked').val() || 'none',
		scoreTpa: $('#scoreTpa').val() || 0
	}
	// Get all universities submission
	let elDegree = $('.degree')
	let elMajor = $('.major')
	let elUniversityName = $('.universityName')
	let elUniversityStartYear = $('.universityStartYear')
	let elUniversityEndYear = $('.universityEndYear')
	let universities = []
	for (let i = 0; i < elDegree.length; i++) {
		let universityObj = {
			universityName: $(`#${elUniversityName[i].id}`).val(),
			universityStartYear: $(`#${elUniversityStartYear[i].id}`).val(),
			universityEndYear: $(`#${elUniversityEndYear[i].id}`).val(),
			major: $(`#${elMajor[i].id}`).val(),
			degree: $(`#${elDegree[i].id}`).val()
		}
		universities.push(universityObj)
	}
	// Get all qualifications submission
	let elCourse = $('.course')
	let elCourseDetails = $('.courseDetail')
	let qualifications = []
	for (let i = 0; i < elCourse.length; i++) {
		let qualificationsObj = {
			course: $(`#${elCourse[i].id}`).val(),
			courseDetail: $(`#${elCourseDetails[i].id}`).val()
		}
		qualifications.push(qualificationsObj)
	}


	// Creating data object
	let academicProfessionalQualityObj = {
		juniorHighSchoolName: juniorHighSchoolName,
		juniorHighSchoolStartYear: juniorHighSchoolStartYear,
		juniorHighSchoolEndYear: juniorHighSchoolEndYear,
		seniorHighSchoolName: seniorHighSchoolName,
		seniorHighSchoolStartYear: seniorHighSchoolStartYear,
		seniorHighSchoolEndYear: seniorHighSchoolEndYear,
		universities: universities,
		qualifications: qualifications,
		ielts: ieltsRadio,
		toefl: toeflRadio,
		tpa: tpaRadio
	}

	// Get the object
	return academicProfessionalQualityObj

}

// Get Financial Provision Form
getFinancialProvisionForm = () => {

	// Declaring
	let financialSource = {
		answerFinancialProvision: $('input[name="financialProvisionRadio"]:checked').val(),
		detailFinancialProvision: $('#otherSourceDetail').val() || 'none'
	}

	// Get the object
	return financialSource

}

// Get supporting form
getSupportingForm = () => {

	// Declaring
	let marketingSource = {
		answerMarketingSource: $('input[name="marketingSourceRadio"]:checked').val(),
		detailMarketingSource: $('#otherRecommendation').val() || 'none'
	}
	let personalFactor = $('#personalFactorTextArea').val()

	// Create the object
	let supportingInformation = {
		marketingSource: marketingSource,
		personalFactor: personalFactor
	}

	// Get the object
	return supportingInformation

}

// Make random id
makeId = () => {
	// Get obj from localStorage
	let applicantObj = JSON.parse(localStorage.getItem('dataUsers'))[0]
	let fullName = `${applicantObj.firstName}${applicantObj.lastName}`
	let randomId = ''
	let possible = fullName
	for (let i = 0; i < 5; i++ ) {
		randomId += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return randomId
}


getAllData = () => {
	let dateNow = new Date()
	let dataForm1 = {
		applicationId: `MMSUST-${makeId()}-${dateNow.getDate()}${dateNow.getMonth()+1}${dateNow.getFullYear()}`,
		generalInformation: getGeneralInformation(),
		academicQualification: getAcademicProfessionalQuality(),
		financialProvision: getFinancialProvisionForm(),
		supportingInformation: getSupportingForm()
	}
	return dataForm1

}

// Transfer data to form section 2

// Hide bank details component
$('#bankDetailsComponent').hide()

// Show bank details component on click
$('#bankTransferPaymentOptionRadio').click(() => {
	$('#bankDetailsComponent').show()
})
$('#cashPaymentOptionRadio').click(() => {
	$('#bankDetailsComponent').hide()
})

// Get data from form section 1
transferDataToForm2 = async () => {
	let dataForm1 = getAllData()
	// Transfer application id
	await $('#applicationId').text(dataForm1.applicationId)
	// Transfer batch registered
	await $('#batchRegistered').text(dataForm1.generalInformation.batchIntake)
	// Transfer applicant name
	let applicantObj = JSON.parse(localStorage.getItem('dataUsers'))[0]
	let applicantName = `${applicantObj.firstName} ${applicantObj.lastName}`
	await $('#applicantName').text(applicantName)
	// Transfer application id to form section 3
	$('#applicationIdSubmit').text(dataForm1.applicationId)
}

// Get data form section 2
getPaymentMethod = () => {
	return $('input[name="paymentRadio"]:checked').val()
}

// Combining data from section 1 with section 2
getCombinedData = () => {
	// Get applicant name
	let applicantObj = JSON.parse(localStorage.getItem('dataUsers'))[0]
	let applicantName = `${applicantObj.firstName} ${applicantObj.lastName}`
	let objAddedData = {
		applicantName: applicantName, 
		paymentMethod: getPaymentMethod()
	}
	let objectCompleteFormData = Object.assign(getAllData(), objAddedData)
	console.log(objectCompleteFormData)
	// Save the form data to localStorage
	return localStorage.setItem('dataForm', JSON.stringify(objectCompleteFormData))
}

// Input validation form section 1
validateInputSection1 = () => {
	// Checking each form to have all fields not being empty
	if (
		$('#formGeneralInfo')[0].checkValidity() === true &&
		$('#formAcademic')[0].checkValidity() === true &&
		$('#formFinancialProvision')[0].checkValidity() === true &&
		$('#formSupporting')[0].checkValidity() === true &&
		$('#formAgree')[0].checkValidity() === true
	) {
		return true
	} else {
		return false
	}
}

// Input validation form section 2
validateInputSection2 = () => {
	// Checking each form to have all fields not being empty
	if (
		$('#formGeneralInfo')[0].checkValidity() === true &&
		$('#formAcademic')[0].checkValidity() === true &&
		$('#formFinancialProvision')[0].checkValidity() === true &&
		$('#formSupporting')[0].checkValidity() === true &&
		$('#formAgree')[0].checkValidity() === true &&
		$('#formReviewApplication')[0].checkValidity() === true
	) {
		return true
	} else {
		return false
	}
}

// Send data to database
sendToDatabase = () => {
	// Get form data from localStorage
	let objectData = JSON.parse(localStorage.getItem('dataForm'))
	let applicationApi = 'https://server.mmsustainability.ac.id/applications'
	// Update user application ID
	let applicantObj = JSON.parse(localStorage.getItem('dataUsers'))[0]
	let idUser = applicantObj._id
	let updateUserApi = `https://server.mmsustainability.ac.id/users/edit/${idUser}`
	axios.post(applicationApi,
		objectData
	)
	.then((response) => {
		// Sending applicant name
		// Send email through API
		let sendEmailApi = 'https://server.mmsustainability.ac.id/emailForm/sendForm'
		axios.post(sendEmailApi, response.data)
		.then((responseEmail) => {
			// Update user through api
			axios.put(updateUserApi, {
				firstName: applicantObj.firstName,
				lastName: applicantObj.lastName,
				phoneNumber: applicantObj.phoneNumber,
				dateOfBirth: {
					dayOfBirth: applicantObj.dateOfBirth.dayOfBirth,
					monthOfBirth: applicantObj.dateOfBirth.monthOfBirth,
					yearOfBirth: applicantObj.dateOfBirth.yearOfBirth
				},
				applicationId: response.data.applicationId,
				email: applicantObj.email
			})
			.then((responseUpdate) => {
				console.log('done', responseUpdate.data)
			})
			.catch((err) => {
				console.log(err)
			})
		})
	})
}

// Get print form section 3
$('#btnPrint').click(() => {
	window.print()
})