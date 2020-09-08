$(document).ready(function() {
	//Grab the initial top offset of the navigation 
	var stickyNavTop = $('.nav').offset().top;
		   	
	//Function that decides whether the navigation bar should have "fixed" css position or not.
	var stickyNav = function() {
		var scrollTop = $(window).scrollTop() + 65; //Current vertical position from the top

		if (scrollTop > stickyNavTop) {
			$('.nav').addClass('sticky');
			$('.nav').fadeIn(400, function() {
				//Parallax for open source section loads only after navbar is present to prevent offset issues
				$('.open-source').parallax({imageSrc: 'images/skyflowers.webp'});
			});
		} else {
			$('.nav').removeClass('sticky'); 
			$('.nav').fadeOut(400);
		}
	}

	stickyNav();
	// Run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

	//Fix positioning of in-page anchor links
	var shiftWindow = function() { scrollBy(0, -50) };
	if (location.hash) shiftWindow();
	window.addEventListener("hashchange", shiftWindow);

	//Parallax for welcome section
	$('.background').parallax({imageSrc: 'images/waves.webp'});
});

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var image = entry.target;
              image.src = image.dataset.src;
              image.classList.remove("lazy");
              imageObserver.unobserve(image);
            }
          });
        });

        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        }); 
    } else {  
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload () {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }    

          lazyloadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                }
            });
            if(lazyloadImages.length == 0) { 
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
            }
          }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
});