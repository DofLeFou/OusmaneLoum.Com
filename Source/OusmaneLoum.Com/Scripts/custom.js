
	
/* CENTER HERO CONTENT VERTICALY */
function heroContent() {	
	var winHeight = $(window).innerHeight();
	
	// @ screen width => 992px
	if ($(window).width() >= 992) {
		var heroContentMargin = -($('.hero-content').height() / 2);
			
		$('.hero-content').css('margin-top', heroContentMargin);
	}
	
	// @ screen width => 768px and <= 991px
	else if ($(window).width() >= 768 && $(window).width() <= 991) {
		$('.hero-content').css('margin-top', '0');
		
		var heroContentHeight = $('.hero-content-wrap').height(); 
		
		if ((winHeight - 100) <= heroContentHeight) {
			$('.hero-content-wrap').css('margin', '110px 0 60px');
		}
		
		else {
			var heroContentMargin = (50 + ((winHeight - 100) - heroContentHeight)) / 2;
		
			$('.hero-content-wrap').css('margin-top', heroContentMargin);
		}
	}
	
	// @ screen width <= 767px
	else {
		$('.hero-content').css('margin-top', '0');
		
		var heroContentHeight = $('.hero-content-wrap').height(); 
		
		if ((winHeight - 50) <= heroContentHeight) {
			$('.hero-content-wrap').css('margin', '110px 0 60px');
		}
		
		else {
			var heroContentMargin = (50 + (winHeight - heroContentHeight)) / 2;
		
			$('.hero-content-wrap').css('margin-top', heroContentMargin);
		}
	};
};

/* CLOSE NAVBAR TOGGLE WHEN NAVBAR LINK CLICKED */
function navbarToggle() {
	if ($(window).width() <= 767) { 
		$('.nav-style > li > a').on('click', function(){
			$('.navbar-toggle').click();
		});
	}
};

/* ALIGN MAP TO BOTTOM AT HIGHER SCREEN */
function fixMap() {
	if ($(window).innerHeight() >= 817) { 
		$('.contact').css('position', 'relative');
		$('#map').css({'position': 'absolute', 'bottom': '0'});
	}
	
	else {
		$('.contact').css('position', 'static');
		$('#map').css({'position': 'relative'});
	};
};

/* REFRESH SCROLLSPY */
function scrollSpyRefresh() {
	$('[data-spy="scroll"]').each(function() {
		$(this).scrollspy('refresh')
	});
};

$(document).ready(function() {
	
	// launch the custom functions
	heroContent();
	navbarToggle();
	fixMap();

	$(function () {
	    $('figure.responsive').picture();
	});

    /* INIT MAP */
	$(function () {
	    ousmaneloum.add(function () {
	        var markers = [
                { 'location': '14.138780,-16.073460', 'title': '1. Kaolack, Senegal', 'description': 'I was born here' },
                { 'location': '14.669270,-17.436609', 'title': '2. Dakar, Senegal', 'description': 'I grow up here. Dakar the capital city of Senegal' },
                { 'location': '46.732349,-117.000542', 'title': '3. Moscow, ID, USA', 'description': 'I went to School here.' },
                { 'location': '46.589760,-112.021202', 'title': '4. Helena, MT, USA', 'description': 'I currently live here.' }
	        ];
	        $('#map').gmap(jQuery.extend({
	            'callback': function () {
	                var self = this;
	                $.each(markers, function (i, marker) {
	                    self.addMarker(marker).click(function () {
	                        self.openInfoWindow({
	                            'title': this.target.title,
	                            'description': this.target.description
	                        }, this);
	                    });
	                });
	                //self.pagination('title');
	            }
	        }, ousmaneloum.mapOptions));
	    }).load();
	});
	
	/* INIT GALLERY FEATURE WITH JQUERY MIXITUP PLUGIN */
	$('#grid').mixitup();
	
	
	/* INIT PAGE SCROLLING USING JQUERY SCROLLTO-LOCALSCROLL PLUGIN */
	$('html').localScroll();
	$('a[href="#"], .togglize-btn').unbind('click'); // fix localscroll effect

	
	/* INIT SKILL CIRCLE GRAPHIC WITH JQUERY KNOB PLUGIN */
	var dialColor = $('a').css('color'); // get color from link color
	
	$(".dial").knob({
		'fgColor': dialColor,
		'lineCap': 'round',
		'thickness': '.2', 
		'bgColor': '#fafafa', 
		'readOnly': 'readonly'
	});
	
	
	/* INIT ACCORDION STATUS STYLE */
	$('.togglize-btn').addClass('collapsed'); // add collapsed class to toggle button
	
	$('.togglize-btn').each(function() {
		var toggleBtn = $(this);
		
		// remove collapsed class if toggle initially active
		if (toggleBtn.siblings().hasClass('in')) {
			toggleBtn.removeClass('collapsed');
			toggleBtn.addClass('open');
		}
		
		else {
			toggleBtn.removeClass('open');
		};
		
		toggleBtn.on('click', function() {
			if ($(this).hasClass('collapsed') !== true){
				$(this).removeClass('open');
			}
			
			else {
				$(this).addClass('open');
			}
		});
	});
	
	
	/* IMAGE LIGHTBOX PRESENTATION USING JQUERY MAGNIFIC POPUP PLUGIN */
	$('.image-link').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 500,
		fixedContentPos: false,
	});
	
	
	/* CONTACT FORM STUFFS */
	$('#contact-form').parsley({ // bind parsley jquery plugin for client-side validation
		showErrors: false,
		listeners: {
			onFieldSuccess: function(elem) {
				elem.siblings('span.success-mark').css('opacity', '1');
				elem.siblings('span.error-mark').css('opacity', '0');
			},
			
			onFieldError: function(elem) {
				elem.siblings('span.success-mark').css('opacity', '0');
				elem.siblings('span.error-mark').css('opacity', '1');
				$('.contact-reset').fadeIn(250);
			}
		}
	});
	
	// write up validation marker on fly
	$('#contact-form').find('.parsley-validated').after('<span class="success-mark"><i class="fa fa-check-circle"></i></span><span class="error-mark"><i class="fa fa-times-circle"></i></span>');
	
	// show contact form reset button up upon input activity
	$('#contact-form input, #contact-form textarea').bind('input', function() {
		if($(this).val()) {
			$('.contact-reset').fadeIn(250);
		}
	});
	
	// reset button function
	$('.contact-reset').click(function(e) {
		e.preventDefault();
		
		$('#contact-form')[0].reset();
		$('.contact-reset').fadeOut(250);
		$('.success-mark, .error-mark').css('opacity', '0');
		$('#contact-sending-error, #contact-sending-success').fadeOut(250);
	});
	
	// fade out message sending notification on scroll
	$(window).bind('scroll', function() {
		$('#contact-sending-error, #contact-sending-success').fadeOut(250);
	});
	
	/* FIRE SCROLLSPY REFRESH RIGHT AFTER USER STOPS SCROLLING */
	var timer;
	
	var refresh = function() { 
        scrollSpyRefresh();
    };
    
	$(window).bind('scroll', function() {
        clearTimeout(timer);
        timer = setTimeout(refresh , 250);
    });
    
});

// do the following function on window load
$(window).bind('load', function() {
	$('#contact-form')[0].reset(); // reset contact form
	scrollSpyRefresh();
});

// do the following function on window resize
$(window).on('resize', function() {
	heroContent();
	navbarToggle();
	fixMap();
	scrollSpyRefresh();
});