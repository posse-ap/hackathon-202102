"use strict"
var mySwiper = new Swiper ('.swiper-container', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 4000,
    loop: true,
    preventClicks: false,
    preventClicksPropagation: false,
});