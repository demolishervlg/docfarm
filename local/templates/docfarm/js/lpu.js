$(function(){
    //Карусель 
    var lpuSwiper = new Swiper('.lpu_slider', {
        loop: true,
        spaceBetween:12,
        slidesPerView:3,
        centeredSlides:false,
        watchOverflow:false,
        navigation: {
            nextEl: '.lpu_slider-next',
            prevEl: '.lpu_slider-prev',
        },
        pagination: {
            el: '.lpu_slider-pagination',
            clickable: true,
        }
    });

    var dateSwiper = new Swiper('.date-slider', {
        spaceBetween:5,
        slidesPerView:'auto',
        navigation: {
            nextEl: '.date-next',
            prevEl: '.date-prev',
        }
    });

})