var element = document.getElementById('animation');

lottie.loadAnimation({
  container: element,
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'js/data4.json'
});

var slider = new Swiper('.slider-projects', {
    speed: 1000,
    spaceBetween: 92,
    slidesPerView: 'auto',
    preventClicks: true,
    observer: true,
    mousewheel: {
        sensitivity: 1,
        // forceToAxis: false,
    },
    // freeMode: true,
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
        1280: {
            mousewheel: false
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

var swiper = new Swiper('.stub-wrap', {
    speed: 400,
    direction: 'vertical',
    slidesPerView: 1,
    freeMode: false,
    resistance: false,
    mousewheel: true,
    observer: true,
    scrollbar: {
        el: '.page-scrollbar',
    },
});

// $(document).ready(function () {
//     var scroll = true;
//     var sliderProjectsTop = $('#slider-projects').offset().top;
//
//     // function stopWheel(e){
//     //     if(!e){ /* IE7, IE8, Chrome, Safari */
//     //         e = window.event;
//     //     }
//     //     if(e.preventDefault) { /* Chrome, Safari, Firefox */
//     //         e.preventDefault();
//     //     }
//     //     e.returnValue = false; /* IE7, IE8 */
//     // }
//     // $(document).on("mousewheel",function () {
//     //
//     //     if ($(this).scrollTop() > 150 && scroll) {
//     //         // $(document).bind('mousewheel',function(){
//     //         //     stopWheel();
//     //         // });
//     //         $('body,html').animate({scrollTop: sliderProjectsTop}, 600);
//     //         // setTimeout(function () {
//     //         //     $(document).unbind('mousewheel');
//     //         // },1000);
//     //         scroll = false;
//     //     }
//     //
//     //     if ($(this).scrollTop() < 150 && !scroll) {
//     //         scroll = true;
//     //     }
//     // });
//
//     // var ScrollBar = function(obj) {
//     //     this.scr_Box = document.getElementById(obj.box);
//     //     this.scr_Block = document.getElementById(obj.block);
//     //     this.scr_Txt = document.getElementById(obj.txt);
//     //     this.speed = obj.speed || 10;
//     //     var _this = this;
//     //     this.scale = this.scr_Box.offsetHeight - this.scr_Block.offsetHeight;
//     //     this.l = 0;
//     //     this.scr_Block.onmousedown = function(e) {
//     //         _this.down(e);
//     //
//     //         document.onmousemove = function(e) {
//     //             _this.move(e);
//     //         }
//     //
//     //         document.onmouseup = function() {
//     //             var than = this;
//     //             _this.up(than);
//     //         }
//     //
//     //         if (_this.scr_Block.setCapture) {
//     //             _this.scr_Block.setCapture();
//     //         }
//     //         return false;
//     //     }
//     //
//     //     this.scr_Box.onmousewheel = function(e) {
//     //         _this.wheel(e);
//     //         return false;
//     //     }
//     //     if (this.scr_Box.addEventListener && typeof DOMMouseScroll) {
//     //         this.scr_Box.addEventListener("DOMMouseScroll", function(e) {
//     //             _this.wheel(e);
//     //             e.preventDefault();
//     //         }, false);
//     //     }
//     //
//     // };
//     //
//     // ScrollBar.prototype.wheel = function(e) {
//     //     var e = e || event;
//     //     var eve = e.wheelDelta || e.detail;
//     //
//     //     if (e.wheelDelta) {
//     //         if (eve < 0) {
//     //             this.l += this.speed;
//     //         } else {
//     //             this.l -= this.speed;
//     //         }
//     //     } else {
//     //         if (eve > 0) {
//     //             this.l += this.speed;
//     //         } else {
//     //             this.l -= this.speed;
//     //         }
//     //     }
//     //     this.value();
//     // };
//     //
//     // ScrollBar.prototype.down = function(e) {
//     //     var e = e || event;
//     //     poY = e.clientY - document.body.scrollTop - this.scr_Block.offsetTop;
//     // };
//     //
//     // ScrollBar.prototype.move = function(e) {
//     //     var e = e || event;
//     //     this.l = e.clientY - poY;
//     //     this.value();
//     //
//     // };
//     // ScrollBar.prototype.value = function() {
//     //     if (this.l < 0) {
//     //         this.l = 0;
//     //     } else if (this.l > this.scale) {
//     //         this.l = this.scale;
//     //     }
//     //     this.scr_Block.style.top = this.l + 'px';
//     //     this.scr_Txt.style.top = -(this.l / this.scale) * (this.scr_Txt.offsetHeight - this.scr_Box.offsetHeight) + 'px';
//     // };
//     //
//     // ScrollBar.prototype.up = function(than) {
//     //     than.onmousemove = null;
//     //     than.onmouseup = null;
//     //     if (than.releaseCapture) {
//     //         than.releaseCapture();
//     //     }
//     // };
//
// //************************************
// //***********前台调用参数***************
// //     new ScrollBar({
// //         box: 'scroll-name1', //外框ID
// //         block: 'scroll-block1', //滚动条ID
// //         txt: 'scroll-txt1', //文本框ID
// //         speed: 20 //滚动距离，数值越大越多（设置默认注释掉即可）
// //     });
//
//     // new ScrollBar({
//     //     box: 'scroll-name1', //外框ID
//     //     block: 'scroll-block1', //滚动条ID
//     //     txt: 'scroll-txt1', //文本框ID
//     // });
// });