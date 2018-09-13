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
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: true,
        dragSize: '330'
    },
    breakpoints: {
        1023: {
            spaceBetween: 20
        }
    }
});