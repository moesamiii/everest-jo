$(function () {
    var swiperPartner = new Swiper('.swiper.swiperPartner', {
        autoplay: { delay: 1000 },
        speed: 900,
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        breakpoints: {
            1025: { slidesPerView: 6 },
            767: { slidesPerView: 4 },
            230: { slidesPerView: 3 }
        },
        pagination: {
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {
            init: function () {
                this.update();
            },
            imagesReady: function () {
                this.update();
            }
        }
    });

    // Force refresh
    setTimeout(() => {
        swiperPartner.update();
    }, 500);
});


$(function(){
    var swiperTestimonial = new Swiper('.swiper.swiperTestimonial',{
        autoplay: {
            delay: 1000,
        },
        speed: 900,
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        hasNavigation: true,
        grabCursor: true,
        breakpoints: {
            1025:{
                slidesPerView: 3,
            },
            769:{
                slidesPerView: 2
            },
            319: {
                slidesPerView: 1,
            },
        },
    });
});