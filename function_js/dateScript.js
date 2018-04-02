// Setting date of birth
for (let i = 1; i <= 31; i++) {
	$('#dayOfBirth').append(`<option value="${i}" selected>${i}</option>`)
}

// Setting month of birth
let months = [
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
for (let month = 0; month < months.length; month++) {
	$('#monthOfBirth').append(`<option value="${month+1}" selected>${months[month]}</option>`)
}

// Setting year of birth
let date = new Date()
let minYear = 1800
let maxYear = date.getFullYear()
for (let year = minYear; year <= maxYear; year++) {
	$('#yearOfBirth').append(`<option value="${year}" selected>${year}</option>`)
}