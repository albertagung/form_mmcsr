// Form general script
$(document).ready(() => {

	// First load
	$('#ovalForm1').css('background-color', '#4a90e2')
	$('#formContent2').hide()
	$('#formContent3').hide()

	// On save and next form section 1
	$('#btnNextForm1').click(() => {
		getGeneralInformation()
		getAcademicProfessionalQuality()
		$('#formContent1').hide()
		$('#ovalForm1').css('background-color', '')
		$('#ovalForm2').css('background-color', '#4a90e2')
		$('#formContent2').show()
		window.scrollTo(0,0)
	})

	// On save and next form section 2
	$('#btnNextForm2').click(() => {
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


	window.setTimeout(() => {
		console.log($('input[name="ieltsRadio"]:checked').val())
	}, 5000)

})

// Form input script

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
	console.log(generalInformationObject)

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
	// let majors = []
	// let degrees = []
	// let universityNames = []
	// let universityStartYears = []
	// let universityEndYears = []
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
		// let valDegree = $(`#${elDegree[i].id}`).val()
		// let valMajor = $(`#${elMajor[i].id}`).val()
		// let valUniversityName = $(`#${elUniversityName[i].id}`).val()
		// let valUniversityStartYear = $(`#${elUniversityStartYear[i].id}`).val()
		// let valUniversityEndYear = $(`#${elUniversityEndYear[i].id}`).val()
		// majors.push(valMajor)
		// degrees.push(valDegree)
		// universityNames.push(valUniversityName)
		// universityStartYears.push(valUniversityStartYear)
		// universityEndYears.push(valUniversityEndYear)
	}
	// Get all qualifications submission
	let elCourse = $('.course')
	let elCourseDetails = $('.courseDetail')
	// let courses = []
	// let courseDetails = []
	let qualifications = []
	for (let i = 0; i < elCourse.length; i++) {
		let qualificationsObj = {
			course: $(`#${elCourse[i].id}`).val(),
			courseDetail: $(`#${elCourseDetails[i].id}`).val()
		}
		qualifications.push(qualificationsObj)
		// let valCourseDetails = $(`#${elCourseDetails[i].id}`).val()
		// let valCourse = $(`#${elCourse[i].id}`).val()
		// courses.push(valCourse)
		// courseDetails.push(valCourseDetails)
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
		// universityNames: universityName,
		// universityStartYears: universityStartYear,
		// universityEndYears: universityEndYear,
		// universityMajors: majors,
		// universityDegrees: degrees,
		// courses: courses,
		// courseDetails: courseDetails
	}

	// Get the object
	console.log(academicProfessionalQualityObj)

}