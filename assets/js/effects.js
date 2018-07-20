$(document).ready(function(){

	$('.dropdown_btn').click(function(){
	$('.dropdown_content').slideToggle(500,'swing');

})


	$('.top_seller').hover(
			function(){$(this).find('.summary_best_seller:first').fadeIn(700);},
			function(){$(this).find('.summary_best_seller:first').fadeOut(800);}
			)


	$('.featured_item').hover(
			function(){$(this).find('.summary_best_seller:first').fadeIn(700);},
			function(){$(this).find('.summary_best_seller:first').fadeOut(800);}
			)

})