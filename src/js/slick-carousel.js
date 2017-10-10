'use strict';

$(document).ready(function () {
	$('.sl-intro-banner__slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// Platinum Collections slider
	$('.collection-slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
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
		autoplay: true,
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
		infinite: true,
		autoplay: true,
		asNavFor: '.shivam-banner__slider'
	});
	
	$('.temple-collections__coin-slider2').slick({
		dots: false,
		arrows: false,
		infinite: false,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true
	});
	
	$('.temple-collections__data-slider').slick();

	// Bhupi Collections slider 2
	$('.bhupi-collections__img-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		speed: 600,
		slidesToShow: 1,
		asNavFor: '.bhupi-collections__nav-slider',
	});
	
	// Bhupi Collections Navigation slider
	$('.bhupi-collections__nav-slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
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
		autoplay: true,
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
		autoplay: true,
		speed: 600,
		slidesToShow: 1,
		asNavFor: '.temple-collections__coin-slider',
		nextArrow: '<div class="arrow-wrapper arrow-wrapper--right"><i class="icon-arrow-right"></i></div>',
		prevArrow: '<div class="arrow-wrapper arrow-wrapper--left"><i class="icon-arrow-left"></i></div>'
	});

});

// Bhupi Collections slider 1
$('.bhupi-collection__slider').slick({
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
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

//Shivam Slider 2
$(document).ready(function(){
	
	$('.temple-collections__nav-item').on('click', function(e){
		console.log('item clicked');

		var index = $(this).parent().attr('data-slick-index');

		console.log($(this).parent().removeClass('slick-current'));
		console.log($(this).parent().index());

		$('.temple-collections__coin-slide2').removeClass('slick-current');
		$(this).parent().addClass('slick-current');

		$('.temple-collections__data-slider').slick('slickGoTo', index);
	});
	
	function initCoinSlider(sliderId){
		$(''+sliderId).slick({
			arrows: false,
			dots: false,
			// variableWidth: true,
			centreMode: true,
			infinite: true,
			autoplay: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						infinite: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
			]
		});
	}
	
	initCoinSlider('.coin-slider--1');
	initCoinSlider('.coin-slider--2');
	initCoinSlider('.coin-slider--3');

	
	$('.js-coin-accordion').on('show.bs.collapse', function (e) {
		// do something…
		console.log($(this)[0].id);

		var id = $(this)[0].id;

		// $('.panel').removeClass('active');
		// $(this).parents('.panel').addClass('active');

		if(id == 'coin1'){
			$('.panel').removeClass('is-open');
			$('.panel--1').addClass('is-open');
			$('.coin-slider').get(0).slick.setPosition();
			$('.coin-content').removeClass('active');
			$('.coin-content--1').addClass('active');
		}

		if(id == 'coin2'){
			$('.panel').removeClass('is-open');
			$('.panel--2').addClass('is-open');
			$('.coin-slider').get(0).slick.setPosition();
			$('.panel').removeClass('active');
			$('.coin-content').removeClass('active');
			$('.coin-content--2').addClass('active');
			
		}

		if(id == 'coin3'){
			$('.panel').removeClass('is-open');
			$('.panel--3').addClass('is-open');
			$('.coin-slider').get(0).slick.setPosition();
			$('.panel').removeClass('active');
			$('.coin-content').removeClass('active');
			$('.coin-content--3').addClass('active');
		}		

	});

	if($('.js-coin-accordion.in.collapse')){
		console.log('well something is open');
	
		var id = $('.js-coin-accordion.in.collapse').attr('id');
		
		console.log(id);

		if(id == 'coin1'){
			$('.panel--1').addClass('is-open');
			$('.coin-content--1').addClass('active');
		}
		if(id == 'coin2'){
			$('.coin-content--2').addClass('active');
		}
		if(id == 'coin3'){
			$('.coin-content--3').addClass('active');
		}

	}

	$('.coin-list__nav-link').on('click touchstart', function(){

		var index = $(this).parent().index();

		$('.coin-list__item').removeClass('active');
		$(this).parent().addClass('active');

		$('.coin-slider').slick('slickGoTo', index);

	});

	$('.coin-slider--1').on('afterChange', function(){
		 var cIndex = $(this).find('.slick-current').attr('data-slick-index');
		 $('.panel--1 .coin-list__item').removeClass('active');
		$('.panel--1 .coin-list__item').eq(cIndex).addClass('active');
	});
	
	$('.coin-slider--2').on('afterChange', function(){
		 var cIndex = $(this).find('.slick-current').attr('data-slick-index');
		 $('.panel--2 .coin-list__item').removeClass('active');
		$('.panel--2 .coin-list__item').eq(cIndex).addClass('active');
	});
	
	$('.coin-slider--3').on('afterChange', function(){
		 var cIndex = $(this).find('.slick-current').attr('data-slick-index');
		 $('.panel--3 .coin-list__item').removeClass('active');
		$('.panel--3 .coin-list__item').eq(cIndex).addClass('active');
	});


	//Chocolate Banner Slider
	$('.chocolate-banner__slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 1
	});
	
	//Chocolate Collections Slider
	$('.chocolate-collections__slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 2,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					infinite: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
		]
	});

});