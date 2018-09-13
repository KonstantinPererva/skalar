var element = document.getElementById('animation');

lottie.loadAnimation({
  container: element,
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'js/data4.json'
});

var slider = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 92,
    slidesPerView: 'auto',
    threshold: 20,
    preventClicks: true,
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
        1023: {
            spaceBetween: 20
        },
        767: {
            spaceBetween: 10,
            scrollbar: {
                dragSize: '60'
            }
        }
    }
});