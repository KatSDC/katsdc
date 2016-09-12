$(document).ready(function() {
	//Grab the initial top offset of the navigation 
	var stickyNavTop = $('.nav').offset().top;
		   	
	//Function that decides whether the navigation bar should have "fixed" css position or not.
	var stickyNav = function() {
		var scrollTop = $(window).scrollTop() + 95; //Current vertical position from the top

		if (scrollTop > stickyNavTop) {
			$('.nav').addClass('sticky');
			$('.nav').fadeIn(400, function() {
				//Parallax for open source section loads only after NavBar is present to prevent offset issues
				$('.open-source').parallax({imageSrc: 'images/skyflowers.jpeg'});
			});
		} else {
			$('.nav').removeClass('sticky'); 
			$('.nav').fadeOut(400);
		}
	}

	stickyNav();
	//Run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

	//Fix positioning of in-page anchor links
	var shiftWindow = function() { scrollBy(0, -50) };
	if (location.hash) shiftWindow();
	window.addEventListener("hashchange", shiftWindow);

	//Parallax for welcome section
	$('.background').parallax({imageSrc: 'images/waves.jpeg'});
});