if(window.innerWidth >= 768) {
    var element = document.getElementById('animation');

    var logo = lottie.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: false,
        path: 'js/data4.json'
    });

    var btnNextSlide = document.querySelector('[data="next-slide"]');

    var swiper = new Swiper('.stub-wrap', {
        speed: 600,
        direction: 'vertical',
        slidesPerView: 1,
        freeMode: false,
        resistanceRatio: 0,
        navigation: {
            nextEl: btnNextSlide
        },
        mousewheel: {
            releaseOnEdges: true,
            invert: false
        },
        preventClicks: true,
        scrollbar: {
            el: '.page-scrollbar'
        },
        breakpoints: {
            1024: {
                scrollbar: false
            },
            767: {
                spaceBetween: 10
            }
        }

    });

    document.querySelector('.slider-projects').addEventListener('mouseenter', function () {
        swiper.mousewheel.disable();
    });

    document.querySelector('.slider-projects').addEventListener('mouseleave', function () {
        swiper.mousewheel.enable();
    });

    swiper.on('slideChange', function () {
        var cont = document.querySelector('.b24-widget-button-position-bottom-right');
        if (swiper.activeIndex === 1) {
            cont.style.bottom = "130px";
        } else {
            cont.style.bottom = "30px";
        }
    });

    swiper.on('resize', function () {
        this.init();
    });


}

var slider = new Swiper('.slider-projects', {
    speed: 700,
    spaceBetween: 92,
    slidesPerView: 3,
    preventClicks: true,
    mousewheel: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: true,
        dragSize: '330'
    },
    breakpoints: {
        1440: {
            scrollbar: {
                dragSize: '200'
            }
        },
        1366: {
            spaceBetween: 60,
            scrollbar: {
                dragSize: '160'
            }
        },
        1024: {
            scrollbar: {
                dragSize: '140'
            }
        },
        1023: {
            spaceBetween: 20,
            scrollbar: {
                dragSize: '120'
            }
        },
        768: {
            slidesPerView: 2,
            scrollbar: {
                dragSize: '120'
            }
        },
        767: {
            slidesPerView: "auto",
            spaceBetween: 10,
            scrollbar: {
                dragSize: '60'
            }
        },
        414: {
            slidesPerView: "auto",
            spaceBetween: 10,
            scrollbar: {
                dragSize: '40'
            }
        }
    }
});

slider.on('resize', function () {
    this.init();
});