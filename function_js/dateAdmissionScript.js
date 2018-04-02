$(document).ready(() => {
	// On first load
	setTimeout( async () => {
		await applicationYearSetting()
		await applicationMonthSetting()
		applicationDaySetting()
	}, 100)

	// Declaring date now
	let dateNow = new Date()
	let dateNowYear = dateNow.getFullYear()
	let dateNowDay = dateNow.getDate()
	let dateNowMonth = dateNow.getMonth()

	// Setting date of birth
	applicationDaySetting = () => {
		// Make sure day element are empty
		$('#dayAdmission').empty()
		// Make month plus one (+1)
		let monthPlusOne = dateNowMonth+1
		if (dateNowDay < 31 
				&& $('#yearAdmission').val() === dateNowYear.toString() 
				&& $('#monthAdmission').val() === monthPlusOne.toString()) {
			for (let i = dateNowDay+1; i <= 31; i++) {
			  $('#dayAdmission').append(`<option value="${i}">${i}</option>`)
			}
		} else {
			for (let i = 1; i <= 31; i++) {
			  $('#dayAdmission').append(`<option value="${i}">${i}</option>`)
			}
		}
	}

	// Setting month of birth
	applicationMonthSetting = () => {
		$('#monthAdmission').empty()
		let monthsAdmission = [
			'January', 
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
		// Check if date now month now more than november
		if (dateNowMonth < 10) {
			for (let month = dateNowMonth; month <= dateNowMonth+1; month++) {
			  $('#monthAdmission').append(`<option value="${month+1}">${months[month]}</option>`)
			}
		// If more than november
		} else {
		  $('#monthAdmission').append(`
		  	<option value="12">December</option>
				<option value="1">January</option>
		  `)
		}
	}

	// Setting year of birth
	applicationYearSetting = () => {
		$('#yearAdmission').empty()
		let dateAdmission = new Date()
		let minYearAdmission = dateNowYear
		let maxYearAdmission = dateNowYear+1
		// Check if date now is no more than november and month admission type is number
		// because if it's not number, then it already changed to string (see line 58)
		if (dateNow.getMonth() > 10 && typeof($('#monthAdmission').val()) < 'number') {
			for (let year = minYearAdmission; year <= maxYearAdmission; year++) {
			  $('#yearAdmission').append(`<option value="${year}">${year}</option>`)
			}
		// if date now is under november
		} else if ($('#monthAdmission').val() === "1") {
			$('#yearAdmission').append(`
				<option value="2019">2019</option>
			`)
		} else {
			for (let year = minYearAdmission; year <= minYearAdmission; year++) {
			  $('#yearAdmission').append(`<option value="${year}">${year}</option>`)
			}
		}
	}

	// On change year admission trigger
	$('#yearAdmission').change( async () => {
		await applicationMonthSetting()
		applicationDaySetting()
	})

	// On change month admission trigger
	$('#monthAdmission').change( async () => {
		await applicationYearSetting()
		applicationDaySetting()
	})
})