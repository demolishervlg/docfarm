$(function(){
	//Открытие мобильного меню
	$('.nav-btn-mobile').click(function() {
		$('.mobimenu').addClass('active');
		$('body').addClass('mobi-menu-active');
		return false;
	});
	
	//Закрытие мобильного меню
	$('.mobimenu__close').click(function() {
		$('.mobimenu').removeClass('active');
		$('body').removeClass('mobi-menu-active');
		return false;
	});
	
	//Показ подменю в моби-меню
	$('.submenu-btn').click(function() {
		$(this).next('.submenu').addClass('active');
		return false;
	});
	//Закрытие подменю в моби-меню
	$('.submenu__back').click(function() {
		$(this).closest('.submenu').removeClass('active');
		return false;
	});
	
	
	//Раскрытие меню в футере на мобилках
	$('.footer-menu__title').click(function() {
		if ($(this).children('i').is(':visible')) {
			$(this).parent('.footer-menu__head').toggleClass('active');
			if ($(this).parent('.footer-menu__head').hasClass('active')) {
				$(this).parent('.footer-menu__head').next('.footer-menu__list').slideDown(250);
			} else {
				$(this).parent('.footer-menu__head').next('.footer-menu__list').slideUp(250);
			}
			return false;
		}
	});
	
	//Нестандартные select-ы
	/*Селект без поиска*/
	$('.select-custom').select2({
		minimumResultsForSearch: -1,
		selectOnClose:false,
		placeholder:function(){$(this).data('placeholder');},
		width: 'resolve',
		height: '62px',
		allowClear: true,
		language: "ru",
		dropdownAutoWidth: false
	}).on('select2:unselecting', function() {
		$(this).data('unselecting', true);
	}).on('select2:opening', function(e) {
		if ($(this).data('unselecting')) {
			$(this).removeData('unselecting');
			e.preventDefault();
		}
	});
	
	//Кнопка Персональный консультант
	$('.p-consultant-btn').click(function() {
		$(this).addClass('opened');
		$(this).next('.p-consultant').addClass('opened');
		return false;
	});
	$('.consultant-close').click(function() {
		$('.p-consultant-btn').removeClass('opened');
		$(this).closest('.p-consultant').removeClass('opened');
		return false;
	});
	$(document).click(function (e) {
		var container = $('.p-consultant');
		if (container.has(e.target).length === 0){
			$('.p-consultant-btn, .p-consultant').removeClass('opened');
		};
	});
}); 
