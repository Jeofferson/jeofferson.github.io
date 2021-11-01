$(document).ready(function () {
  AOS.init({
    offset: 200,
    duration: 1000,
  });

  const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });

  $(document).click(() => $('.navbar-collapse').collapse('hide'));
});
