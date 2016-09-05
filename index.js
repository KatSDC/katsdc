$(document).ready(function() {
	//Grab the initial top offset of the navigation 
	var stickyNavTop = $('.nav').offset().top;
		   	
	//Function that decides weather the navigation bar should have "fixed" css position or not.
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); // our current vertical position from the top
		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative

		if (scrollTop > stickyNavTop) {
			$('.nav').addClass('sticky');
			$('#title').css('visibility', 'visible');
		} else {
			$('.nav').removeClass('sticky'); 
			$('#title').css('visibility', 'hidden');
		}


	};

	stickyNav();
	//Run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

	//Fix positioning of in-page anchor links
	var shiftWindow = function() { scrollBy(0, -50) };
	if (location.hash) shiftWindow();
	window.addEventListener("hashchange", shiftWindow);

	//Parallax
	$(window).scroll(function(e){
	  parallax();
	});

	function parallax(){
	  var scrolled = $(window).scrollTop();
	  $('.background').css('top',-(scrolled*0.2)+'px');
	}

	//Fade in navigation bar
	// window.addEventListener("scroll", function() {
	//     if (window.scrollY > 500) {
	//         $('.wrapper').fadeIn();
	//     }
	//     else {
	//         $('.wrapper').fadeOut();
 //    	}
	// },false);
});