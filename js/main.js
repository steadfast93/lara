/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js

/*
    Custom
 */
//= partials/helper.js
//= partials/owl.carousel.js
//= partials/jquery.validate.min.js
//= partials/jquery.magnific-popup.min.js
//= partials/jquery.mousewheel.js
//= partials/jquery.jscrollpane.min.js


var registerValidate = $('.registration__form').validate({
		rules:{
			login: {
				required: true,
				email: true
			},
			password: {
				minlength: 6,
				required: true
			}
		}
	});

/*$('.registration__form .input').blur(function(event) {
	registerValidate.element($(this));
});*/

$('.step-1 .registration__next-step .button').click(function () {
	$('.registration__form').valid();
});



$('#child-add').click(function(event) {
	var value = +($('#child-count').val());
	$('#child-count').val(++value);
});



$(document).ready(function() {
/*	$('.step-1 .registration__next-step .button').click(function(event) {
		$('.step-1').hide();
		$('.step-2').show();
	});*/

	$('#photo-upload').change(function(event) {
		var photoName = $(this).get(0).files[0].name;
		$(this).parent().find('span').text(photoName);
	});


	$('.popup-toggle').magnificPopup({
		type: 'inline'
	});


	//accordeon

	var accordeonButton = $('.accordeon__item');
	accordeonButton.click(function(event) {
		event.preventDefault();
		$(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
	
		$(this).next().slideToggle(400);
	});

	//client page tabs

	var clientTabsButton = $('.cabinet__client-tabs a');
	var tabsToggler = $('.tabs-toggler')

	
	clientTabsButton.click(function(event) {
		
		clientTabsButton.each(function() {
			$(this).hasClass('active') ?
			    $(this).removeClass('active')  :
			    $(this).addClass('active')
		});

		tabsToggler.each(function() {
			$(this).hasClass('active') ?
			    $(this).removeClass('active')  :
			    $(this).addClass('active')
		});
	});

	//scroll

	$('.scroll-styled').jScrollPane({
		autoReinitialise: true,
		maintainPosition: true,
		stickToBottom: true,
		animateScroll: true,
		hideFocus: true

	});

	//message sending


	var messageArea = $('#message-content');
	var message = '';
	var pattern = $('#msgPattern');
	var date = new Date();
	var currentTime, patternClone;
	$('#message-send').click(function(){

		message = messageArea.val();
		messageArea.val('');
		currentTime = date.getHours() + ':' + date.getMinutes();
		pattern.find('.chat__message-time').text(currentTime);
		pattern.find('.chat__message-text').text(message);
		patternClone = pattern.clone();
		patternClone.removeAttr('id');
		$('#message-board .jspPane').append(patternClone.html());
		patternClone = '';
	});

});







