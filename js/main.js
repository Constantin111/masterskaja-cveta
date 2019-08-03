/*Header блок функций меню*/

$(function () {

    $('.swiper-button-next2').on('click',function() {
        $(this).next('.swiper-button-prev2').removeClass('active');
        $(this).addClass('active');
    });
    $('.swiper-button-prev2').on('click',function() {
        $(this).prev('.swiper-button-next2').removeClass('active');
        $(this).addClass('active');
    })
});

/*Header блок функций меню - end*/

/* Swiper Слайдер - инициализация */

$(function () {

    var swiper = new Swiper('.swiper-container1', {
        navigation: {
            nextEl: '.swiper-button-right1',
            prevEl: '.swiper-button-left1',
        },
    });

});

$(function () {

    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
    });

});

/* Swiper Слайдер - инициализация  end */