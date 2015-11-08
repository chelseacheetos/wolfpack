$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"color": "black",
					"border-bottom": "none",
					"padding": "20px 0"
				});
				$('header .member-actions').css({
					"top": "10px",
				});
				$('header .navicon').css({
					"top": "34px",
				});
				


				
				document.getElementById("cidsLogo").src = "img/logoblack.png";

			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "40px 0"
				});
				$('header .member-actions').css({
					"top": "30px",
				});
				$('header .navicon').css({
					"top": "48px",
				});

				document.getElementById("cidsLogo").src = "img/logowhite.png";
			}
		});
	});
	/***************** Smooth Scrolling ******************/

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});

	});
	/***************** login drop down ******************/
	$(function(){
				$('#login').on('click',function(){
					$('#login').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
						function(){
								$(this).removeClass('animed shake');
						});
				});
	});



});