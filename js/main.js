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


/*var i = 1;

function blink(){
	
	i = i==5 ? 1 : i;
	
	$('.animation span').hide();
	$('.animation span#a'+i).show();
	i+=1;
}

var animation = setInterval(blink, 300);*/



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



//* YEAR SELECT OPTIONS

function createYearSelectOptions(start){

	var result = ''
	var date = new Date();
	var i = start || 1970;

	result += '<option value = "' + i + '" selected = "selected">' + i +'</option>';

	for(i+1; i <= date.getFullYear(); i++) {
		result += '<option value = "' + i + '">' + i +'</option>';
	}

	return result;
}


//* CHILDREN DELETE CABINET

function deleteChild(obj){
	$(obj).closest('.child').remove();
	$('#child-count').val(childCount-=1);
};


$('.delete-child').click(function(event){
	deleteChild(this);
})



//* CHILDREN ADD CABINET

var childId = +($('#child-count').val());
var childCount = +($('#child-count').val());
var childrenPattern = '';



$('#child-add').click(function(event) {
	
	$('#child-count').val(childCount+=1);
	
	childId++;

	childrenPattern = 

	'<div class="child child' + childId + '">' +
        '<div class="form-row with-radio">' +
            '<label class = "lab">Выберите пол</label>' +
            '<div class="input-radio">' +
                '<input type="radio" name = "ch' + childId + '_sex" value = "1" id = "ch' + childId + '_1">' +
                '<label for="ch' + childId + '_1"><span>Мальчик</span></label>' +
            '</div>' +
            '<div class="input-radio">' +
                '<input type="radio" name = "ch' + childId + '_sex" value = "2" id = "ch' + childId + '_2">' +
                '<label for="ch' + childId + '_2"><span>Девочка</span></label>' +
            '</div>' +
        '</div>' +
        '<div class="form-row">' +
            '<label for="ch' + childId + '_name" class = "lab">Имя</label>' +
            '<input  type="text" class="input blue-focus in-cabinet" name="ch' + childId + '_name" id="ch' + childId + '_name" placeholder="Введите имя ребенка">' +
        '</div>' +
        '<div class="form-row flex-start">' +
           	'<label for="ch' + childId + '_year" class = "lab">Дата рождения</label>' +
            '<div class="select-row full-width">'  +
				'<select name="ch' + childId + '_year" id = "ch' + childId + '_year" class = "input blue-focus in-cabinet invert year" value = "1970">' +
					createYearSelectOptions() +
				'</select>' +
				'<a onclick = "deleteChild(this)" class="button pink delete-child">Удалить</a>' +
            '</div>' +
        '</div>' +
  '</div>';

  
  $('#child-container').append(childrenPattern);



});



//* ADMIN MODERATE TABS






$('.admin__tabs-container .admin__tabs a').click(function(event) {
	var data = $(this).data('tab');
	$('.admin__tabs a.active').removeClass('active');
	$(this).addClass('active');
	$('.admin__tab-block.active').removeClass('active');
	$('.admin__tab-block[data-tab = "'+data+'"]').addClass('active');
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







