$(document).ready(function () {

	$(document).click(function (event) {

		var clickover = $(event.target);

		var navbarCollapse = $(".navbar-collapse");
		var isOpened = !navbarCollapse.hasClass("navbar-collapse in");

		if (isOpened && clickover.parents("bg-dark")) {

			navbarCollapse.collapse("hide");

		}

	});

});