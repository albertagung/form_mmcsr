// Form general script
$(document).ready(() => {

	// First load
	$('input').prop('required', true)
	$('#ovalForm1').css('background-color', '#4a90e2')
	$('#formContent2').hide()
	$('#formContent3').hide()

	// On save and next form section 1
	$('#btnNextForm1').click(() => {
		// Calling the form objects getter
		getAllData()
		// Transferring data to form section 2
		transferDataToForm2()
		// Changing navigation component dynamicly
		validateInput()
		$('#formContent1').hide()
		$('#ovalForm1').css('background-color', '')
		$('#ovalForm2').css('background-color', '#4a90e2')
		$('#formContent2').show()
		window.scrollTo(0,0)
	})
	
	// On save and next form section 2
	$('#btnNextForm2').click(() => {
		// Calling the form object getter
		getPaymentMethod()
		// Combined data from section 1 with section 2
		getCombinedData()
		$('#formContent2').hide()
		$('#ovalForm2').css('background-color', '')
		$('#ovalForm3').css('background-color', '#4a90e2')
		$('#formContent3').show()
		window.scrollTo(0,0)
	})

	// Click to back
	$('#ovalForm1').click(() => {
		$('#formContent2').hide()
		$('#ovalForm2').css('background-color', '')
		$('#formContent3').hide()
		$('#ovalForm3').css('background-color', '')
		$('#formContent1').show()
		$('#ovalForm1').css('background-color', '#4a90e2')
	})

	$('#ovalForm2').click(() => {
		$('#formContent1').hide()
		$('#ovalForm1').css('background-color', '')
		$('#formContent3').hide()
		$('#ovalForm3').css('background-color', '')
		$('#formContent2').show()
		$('#ovalForm2').css('background-color', '#4a90e2')
	})

	$('#ovalForm3').click(() => {
		$('#formContent1').hide()
		$('#ovalForm1').css('background-color', '')
		$('#formContent2').hide()
		$('#ovalForm2').css('background-color', '')
		$('#formContent3').show()
		$('#ovalForm3').css('background-color', '#4a90e2')
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
	let maritalStatus = generalInformation.find('input[name="maritalStatus"]').val()
	let phoneNumber = generalInformation.find('input[name="phoneNumber"]').val()
	let emailAddress = generalInformation.find('input[name="emailAddress"]').val()
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
		answer: $('input[name="ieltsRadio"]:checked').val(),
		score: $('#scoreIelts').val() || 0
	}
	let toeflRadio = {
		answer: $('input[name="toeflRadio"]:checked').val(),
		score: $('#scoreToefl').val() || 0
	}
	let tpaRadio = {
		answer: $('input[name="tpaRadio"]:checked').val(),
		score: $('#scoreTpa').val() || 0
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
		answer: $('input[name="financialProvisionRadio"]:checked').val(),
		detail: $('#otherSourceDetail').val() || 'none'
	}

	// Get the object
	return financialSource

}

// Get supporting form
getSupportingForm = () => {

	// Declaring
	let marketingSource = {
		answer: $('input[name="marketingSourceRadio"]:checked').val(),
		detail: $('#otherRecommendation').val() || 'none'
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


getAllData = () => {
	let dateNow = new Date()
	let dataForm1 = {
		applicationId: `MMSUST/${uuidv4()}/${dateNow.getDate()}${dateNow.getMonth()+1}${dateNow.getFullYear()}`,
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
	// Transfer application id to form section 3
	$('#applicationIdSubmit').text(dataForm1.applicationId)
}

// Get data form section 2
getPaymentMethod = () => {
	return $('input[name="paymentRadio"]:checked').val()
}

// Combining data from section 1 with section 2
getCombinedData = () => {
	let objPaymentMethod = {
		paymentMethod: getPaymentMethod()
	}
	let objectCompleteFormData = Object.assign(getAllData(), objPaymentMethod)
	console.log(objectCompleteFormData)
	return objectCompleteFormData
}

// Input validation
validateInput = () => {
	console.log($('#formGeneralInfo')[0].checkValidity())
	
}

// Get print form section 3
$('#btnPrint').click(() => {
	window.print()
})