$(document).ready(function(){

    	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();

	//Card image parallax
	let cardParallax1 = new ScrollMagic.Scene({
		triggerElement: '.sl-whats-new__card--1',
		triggerHook: 0.5
	})
	.setClassToggle('.sl-whats-new__card--1','active')
	.addTo(controller)
	.addIndicators({
		name: 'card image parallax 1'
	});
	
	let cardParallax2 = new ScrollMagic.Scene({
		triggerElement: '.sl-whats-new__card--2',
		triggerHook: 0.5
	})
	.setClassToggle('.sl-whats-new__card--2','active')
	.addTo(controller)
	.addIndicators({
		name: 'card image parallax 2'
	});
	
	let cardParallax3 = new ScrollMagic.Scene({
		triggerElement: '.sl-whats-new__card--3',
		triggerHook: 0.5
	})
	.setClassToggle('.sl-whats-new__card--3','active')
	.addTo(controller)
	.addIndicators({
		name: 'card image parallax 3'
	});
	
	let cardParallax4 = new ScrollMagic.Scene({
		triggerElement: '.sl-whats-new__card--4',
		triggerHook: 0.5
	})
	.setClassToggle('.sl-whats-new__card--4','active')
	.addTo(controller)
	.addIndicators({
		name: 'card image parallax 4'
	});
	
});


//Sidebar Toggle 

$('.sl-nav__menu-button').on('click touchstart', function(){
	$('body').addClass('menu-open');
	$('.sl-overlay').addClass('active');
	$('.sl-sidebar').addClass('show');
});

$('.sl-sidebar__close-btn').on('click', function(){
	if($('.sl-sidebar').hasClass('show')){
		$('body').removeClass('menu-open');
		$('.sl-overlay').removeClass('active');
		$('.sl-sidebar').removeClass('show');
	}
});

$('html,body').on('click', function(e){

	var target = $(e.target)[0].classList;

	console.log(target.contains('sl-overlay'));

	if(target.contains('sl-overlay')){
		if($('.sl-sidebar').hasClass('show')){
			console.log('sidebar open');
			$('body').removeClass('menu-open');
			$('.sl-overlay').removeClass('active');
			$('.sl-sidebar').removeClass('show');
		}
	}

});