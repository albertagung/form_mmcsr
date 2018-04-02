$(document).ready(() => {

	// Define current batch
	// TODO: current batch nanti diambil dari database, bikin general settings schema
	// TODO: current batch hitungannya nanti pakai cronjob, setiap tanggal 15 April dan 15 September bertambah 1
	let currentBatch = 21

	// Get admission test date
	// let admissionTestDate = $('#dayAdmission').val()

	// Define date settings
	let dateNow = new Date()

	// Defining start and end date for even batch
	let startDateEven = new Date(`April 15, ${dateNow.getFullYear()}`)
	let endDateEven = new Date(`September 15, ${dateNow.getFullYear()}`)
	// Defining start and end date for odd batch
	let startDateOdd = new Date(`September 15, ${dateNow.getFullYear()-1}`)
	let endDateOdd = new Date(`April 15, ${dateNow.getFullYear()}`)

	// Checking if date now categorize as even or odd batch
	if (dateNow <= endDateEven && dateNow >= startDateEven) {
		console.log(`Batch ${currentBatch+1}`)
	} else if (dateNow <= endDateOdd && dateNow >= startDateOdd) {
		console.log(`Batch ${currentBatch}`)
	} else {
		console.log('salah')
	}

})