$(document).ready(function(){
	
	$('.sl-nav__link').on('mouseover',function(e){
		$(".submenus-container").addClass('active');	
	});

	// $('.sl-nav__link').on('mouseout',function(e){
	// 	setTimeout(function(){
	// 		$(".submenus-container").stop().removeClass('active').fadeOut(500);
	// 	}, 1000);	
	// });

});