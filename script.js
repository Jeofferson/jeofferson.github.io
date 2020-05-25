$(document).ready(function () {

	$(document).click(function (event) {

		var navbarCollapse = $(".navbar-collapse");

		var clickover = $(event.target);
		var isOpened = !navbarCollapse.hasClass("navbar-collapse in");

		if (isOpened && !clickover.hasClass("navbar-toggler")) {

			navbarCollapse.collapse("hide");

		}

	});

});