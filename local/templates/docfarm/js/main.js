$(function(){
	//Карусель услуг на главной
	var ServicesSwiper = null;
	var mediaQuerySize = 1025;
	function ServicesSwiperInit () {
	  if (!ServicesSwiper) {
		ServicesSwiper = new Swiper('.service-slider', {
			loop: true,
			spaceBetween:12,
			slidesPerView:'auto',
			slidesPerGroup: 1,
			centeredSlides:false,
			watchOverflow: true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.service-pagination',
				clickable: true,
			},
			breakpoints: {
				1025: {
					slidesPerView:4,
					spaceBetween:24,
				},
				1201: {
					slidesPerView:5,
					spaceBetween:24,
				},
				1401: {
					slidesPerView:6,
					spaceBetween:24,
				}
			}
		});
	  }
	}
	function ServicesSwiperDestroy () {
	  if (ServicesSwiper) {
		ServicesSwiper.destroy(true, true);
		ServicesSwiper = null;
	  }
	}
	$(window).on('load resize', function () {
	  var windowWidth = $(this).innerWidth();
	  if (windowWidth <= mediaQuerySize) {
		ServicesSwiperInit()
	  } else {
		ServicesSwiperDestroy(true, true)
	  }
	});
	
	
	
	
	//Карусель лучших врачей на главной
	var InterviewSwiper = new Swiper('.doctor-slider', {
		loop: true,
		spaceBetween:12,
		slidesPerView:'auto',
		centeredSlides:false,
		watchOverflow:false,
		navigation: {
			nextEl: '.doctor-next',
			prevEl: '.doctor-prev',
		},
		pagination: {
			el: '.doctor-pagination',
			clickable: true,
        },
		breakpoints: {
			1025: {
				slidesPerView:4,
				spaceBetween:24,
			},
			1201: {
				slidesPerView:5,
				spaceBetween:24,
			},
			1401: {
				slidesPerView:6,
				spaceBetween:24,
			}
		}
	});
	
	//Выбор клиники у врача
	$('.choice-clinic i').click(function() {
		$(this).parent('.choice-clinic').toggleClass('opened');
		return false;
	});
	//Закрытие при клике за пределами
	$(document).click(function (e) {
		var container = $('.choice-clinic');
		if (container.has(e.target).length === 0){
			$('.choice-clinic').removeClass('opened');
		};
	});
	
	
	
	//Карусель популярных услуг на главной
	var PopularSwiper = new Swiper('.popular-slider', {
		loop: true,
		spaceBetween:12,
		slidesPerView:'auto',
		centeredSlides:false,
		watchOverflow:false,
		navigation: {
			nextEl: '.popular-next',
			prevEl: '.popular-prev',
		},
		breakpoints: {
			1025: {
				slidesPerView:4,
				spaceBetween:24,
			}
		}
	});
	
	//Карусель интервью на главной
	var InterviewSwiper = new Swiper('.interview-slider', {
		loop: true,
		spaceBetween:24,
		slidesPerView:1,
		centeredSlides:false,
		watchOverflow:false,
		navigation: {
			nextEl: '.interview-next',
			prevEl: '.interview-prev',
		},
		pagination: {
			el: '.interview-pagination',
			clickable: true,
        },
		breakpoints: {
			769: {
				slidesPerView:2
			}
		}
	});
	
	//Карусель статей на главной
	var NewsSwiper = new Swiper('.news-slider', {
		loop: true,
		spaceBetween:12,
		slidesPerView:'auto',
		centeredSlides:false,
		watchOverflow:false,
		navigation: {
			nextEl: '.news-next',
			prevEl: '.news-prev',
		},
		breakpoints: {
			1025: {
				slidesPerView:4,
				spaceBetween:24,
			}
		}
	});
	
}); 
