window.addEventListener("load",ready);

function ready() {

    //hover menu header
    var time;
    var dataDropbox = document.querySelector('[data-dropbox]');
    var dropbox = document.querySelector('.header__dropbox');

        dataDropbox.addEventListener('mouseover',openDropbox);
        dataDropbox.addEventListener('mouseout',closeDropbox);

    function openDropbox() {
        dropbox.classList.add('header__dropbox_active');
        clearTimeout(time);
    };

    function closeDropbox() {
        time = setTimeout(function () {
            dropbox.classList.remove('header__dropbox_active');
        },500);
    };

    dropbox.addEventListener('mouseover',openDropbox);
    dropbox.addEventListener('mouseout',closeDropbox);

    // init map
    initMap();


    $('[data-visible-footer]').click(function () {

        if($('.footer__hidden').is('.footer__hidden_active')){
            $('.footer__hidden').removeClass('footer__hidden_active');
        } else {
            $('.footer__hidden').addClass('footer__hidden_active');
        }
    });

    $('[data-hide-section]').click(function () {
        $('.footer__hidden').removeClass('footer__hidden_active');
    })

    $('[data-openMap]').click(function (){
        $('[data-close-map]').addClass('btn-close-dark_active');
        $('.footer-hold__gradient').hide();
        $('.footer-hold__content').hide();
    });

    $('[data-close-map]').click(function (){
        $(this).removeClass('btn-close-dark_active');
        $('.footer-hold__gradient').show();
        $('.footer-hold__content').show();
    });

    //sprintcounter

    var show = true;
    var countbox = "#counts";

    window.onscroll = function(){

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countbox).outerHeight();

        if(w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){

            $(".spincrement").spincrement({
                from: 0,
                to: false,
                thousandSeparator: "",
                duration: 2000
            });

            show = false;
        }

    };

    //video play
    $('.icn-play-video').click(function () {

        $(this).siblings('.media-box__video').attr('controls','controls');
        document.getElementById('videoZalp').play();
        $(this).fadeOut(200);
        $(this).siblings('.media-box__text').fadeOut(200);
        $(this).siblings('.media-box__time').fadeOut(200);

    });

    //slider
    $('.slideshow').slick({
        fade: true,
        infinite: true,
        speed: 600,
        nextArrow: '.slideshow-arrow__next',
        prevArrow: '.slideshow-arrow__prev',
        dots: true,
        cssEase: 'cubic-bezier(.54,.09,.43,.88)',
    });
    $('.slideshow').on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $('[data-slick-index=' + currentSlide + ']').find('.slide-move').removeClass('slide-move_active-opacity');

        setTimeout(function () {
            $('[data-slick-index=' + currentSlide + ']').find('.slide-move').removeClass('slide-move_active-scale');
        },600);


    });
    $('.slideshow').on('afterChange', function(event, slick, currentSlide) {
        $('[data-slick-index=' + currentSlide + ']').find('.slide-move').addClass('slide-move_active-opacity');
        $('[data-slick-index=' + currentSlide + ']').find('.slide-move').addClass('slide-move_active-scale');
    });


    $('.slider-list').slick(
        {
            slidesToShow : 6,
            slidesToScroll : 6,
            dots : true,
            nextArrow: ".slider-list-arrow-next",
            prevArrow: ".slider-list-arrow-prev"

        }
    );
    //
    $('.product-card').click(function () {
        $('.product-list__item').find('.product-card').removeClass('product-card_active');
        $(this).addClass('product-card_active');
        var dataTab = $('[data-tab]');
        var dataTabId = $(this).attr('data-id');
        for (var i = 0; i < dataTab.length; i++) {
            if (dataTabId == i) {
                dataTab.removeClass('product-tab_active');
                dataTab.eq(i).addClass('product-tab_active');
            }
        }
    });
    
    //
    $('.product-list-sect').click(function () {
        $(this).next('ul').slideToggle(250);
        $(this).find('.product-list-sect__icn').toggleClass('product-list-sect__icn_close')
    })

    //nanoscroller
    $(".nano").nanoScroller(
        {
            preventPageScrolling: true,
            disableResize: true,
            alwaysVisible: true

        }
    );
};

