const main_slider = new Swiper('#main_slider', {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        // when window width is >= 992px
        992: {
            navigation: {
                nextEl: '.main_slider_btn.next',  // кнопка "вперед" должна быть с классом .next
                prevEl: '.main_slider_btn.prev',  // кнопка "назад" должна быть с классом .prev
            },
            pagination: {
                enabled: false,
            },
        },
    }
});

const social_slider = new Swiper('#social_slider', {
    loop: true,
    // autoplay: {
    //     delay: 4000,
    // },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        // when window width is >= 992px
        768: {
            navigation: {
                nextEl: '.social_slider_btn.next',  // кнопка "вперед" должна быть с классом .next
                prevEl: '.social_slider_btn.prev',  // кнопка "назад" должна быть с классом .prev
            },
            pagination: {
                enabled: false,
            },
        },
    }
});