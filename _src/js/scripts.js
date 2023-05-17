var $ = jQuery;

$(function() {

	$('.lang-toggle__current').on('click', function() {
		$(this).toggleClass('_active');
		$('.lang-toggle__list').slideToggle();
	})

	$('.extra-item_current .extra-item__arrow').on('click', function () {

		$('html').animate({scrollTop: $('body').offset().top }, 500);
	})
	
})