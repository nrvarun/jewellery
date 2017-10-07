'use strict';

$(document).ready(function () {
	$('.sl-intro-banner__slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// Platinum Collections slider
	$('.collection-slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		variableWidth: false,
		centreMode: true
	});

	// Featured Collections slider
	$('.featured-slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1
	});
	
	$('.bhupi-collections__img-slider').on('init', function(event, slick){
		
		// let's do this after we init the banner slider
		console.log('slider was initialized');
		
		let index = $('.bhupi-collections__img-slide.slick-slide.slick-current.slick-active').attr('data-slick-index');
		$('.bhupi-collections__slider-index').text(parseInt(index) + 1);

	});
 
	$('.temple-collections__coin-slider').slick({
		dots: false,
		arrows: false,
		infinite: false,
		asNavFor: '.shivam-banner__slider'
	});
	
	$('.temple-collections__coin-slider2').slick({
		dots: false,
		arrows: false,
		infinite: false,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true
	});

	// Bhupi Collections slider 2
	$('.bhupi-collections__img-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		asNavFor: '.bhupi-collections__nav-slider',
	});
	
	// Bhupi Collections Navigation slider
	$('.bhupi-collections__nav-slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 600,
		slidesToShow: 2,
		slidesToScroll: 1,
		centreMode: true,
		mobileFirst: true,
		asNavFor: '.bhupi-collections__img-slider',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					infinite: true,
					vertical: true,
					verticalSwiping: true
				}
			}
		]
	});

	$('.bhupi-collections__img-slider').on('init', function(e, slick){
		alert('initiated');
	});

	$('.bhupi-collections__img-slider').on('afterChange', function(e){
		console.log('well lets change the slider');
		
		let index = $('.bhupi-collections__img-slide.slick-slide.slick-current.slick-active').attr('data-slick-index');

		$('.bhupi-collections__slider-index').text(parseInt(index) + 1);
	
	});

	//Bhupi Carousel
	$('.bhupi-banner__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		nextArrow: '<div class="arrow-wrapper arrow-wrapper--right"><i class="icon-arrow-right"></i></div>',
		prevArrow: '<div class="arrow-wrapper arrow-wrapper--left"><i class="icon-arrow-left"></i></div>'
	});
	
	//Bhupi Carousel
	$('.shivam-banner__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		nextArrow: '<div class="arrow-wrapper arrow-wrapper--right"><i class="icon-arrow-right"></i></div>',
		prevArrow: '<div class="arrow-wrapper arrow-wrapper--left"><i class="icon-arrow-left"></i></div>'
	});

});

// Bhupi Collections slider 1
$('.bhupi-collection__slider').slick({
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: false,
	speed: 600,
	variableWidth: false,
	centreMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	slidesToScroll: 1,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				infinite: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3
			}
		}
	]
});