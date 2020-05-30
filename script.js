$(document).ready(function () {


	$(document).click(() => $(".navbar-collapse").collapse("hide"));


	const scroll = new SmoothScroll('.navbar a[href*="#"]', {

		speed: 1000,
		speedAsDuration: true

	});


});