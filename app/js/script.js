$(document).ready(function () {

  // /* tabs */
  //
  // Tabs = function (node) {
  //
  // };
  // $('ul.switches-list').on('click', 'li:not(.active)', function () {
  //
  //   $(this).addClass('active')
  //     .siblings()
  //     .removeClass('active')
  //     .closest('div.tabs')
  //     .find('div.switches-content')
  //     .removeClass('active')
  //     .eq($(this).index())
  //     .addClass('active');
  //
  // });
  //
  // var list = document.querySelector('.switches-list');
  //
  // list.addEventListener('click', function () {
  //
  //
  //   var tabBg = {
  //     technology: 'tabs_technology',
  //     expertise: 'tabs_expertise',
  //     methodology: 'tabs_methodology'
  //   };
  //
  //   var tabWrapper = document.querySelector('.tabs'),
  //     activeItem = document.querySelector('.switches-list__item.active');
  //
  //   if (activeItem.getAttribute('data-bg') == 1) {
  //     tabWrapper.classList.remove(tabBg.expertise);
  //     tabWrapper.classList.remove(tabBg.methodology);
  //     tabWrapper.classList.add(tabBg.technology);
  //
  //   } else if (activeItem.getAttribute('data-bg') == 2) {
  //     tabWrapper.classList.remove(tabBg.technology);
  //     tabWrapper.classList.remove(tabBg.methodology);
  //     tabWrapper.classList.add(tabBg.expertise);
  //
  //   } else if (activeItem.getAttribute('data-bg') == 3) {
  //     tabWrapper.classList.remove(tabBg.technology);
  //     tabWrapper.classList.remove(tabBg.expertise);
  //     tabWrapper.classList.add(tabBg.methodology);
  //   }
  // });
  //
  // $('ul.switch-list_vertical').on('click', 'li:not(.active)', function () {
  //
  //   $(this).addClass('active')
  //     .siblings()
  //     .removeClass('active')
  //     .closest('div.expert-wrap')
  //     .find('.expert-tabs')
  //     .find('div.expert-tabs__item')
  //     .removeClass('active')
  //     .eq($(this).index())
  //     .addClass('active');
  // });
  //
  // /* sliding line */
  //
  // var nav_wrap = $(".sliding-menu"),
  //   elem_width,
  //   elem_left_offset,
  //   elem_parent,
  //   slider_line;
  //
  // nav_wrap.each(function () {
  //   $(this).append('<li class="sliding-line"></li>');
  //
  //   var start_elem_width = 0;
  //   var start_elem_offset = 100;
  //   var active_elem = $(this).find(".active");
  //
  //   if (active_elem.length) {
  //     start_elem_width = active_elem.outerWidth();
  //     start_elem_offset = active_elem.position().left;
  //   }
  //
  //   $(this).find(".sliding-line").css({
  //     "width": start_elem_width + "px",
  //     "left": start_elem_offset + "px"
  //   })
  //     .data("width", start_elem_width)
  //     .data("left", start_elem_offset);
  // });
  //
  // nav_wrap.find("li").hover(function () {
  //
  //   elem_parent = $(this);
  //   elem_width = elem_parent.outerWidth();
  //   elem_left_offset = elem_parent.position().left;
  //   slider_line = elem_parent.siblings(".sliding-line");
  //   slider_line.stop().animate({
  //     "width": elem_width + "px",
  //     "left": elem_left_offset + "px"
  //   });
  //
  // }, function () {
  //   elem_parent = $('.switches-list__item.active');
  //   elem_width = elem_parent.outerWidth();
  //   elem_left_offset = elem_parent.position().left;
  //   slider_line = elem_parent.siblings(".sliding-line");
  //   slider_line.stop().animate({
  //     "width": elem_width + "px",
  //     "left": elem_left_offset + "px"
  //   });
  // });
  //
  //
  // /* change background */
  //
  // var TabMenu = function () {
  //   var self = this;
  //   self.node = document.querySelector("[data-component='switches-content_expert']");
  //
  //   self.init = function () {
  //     self.node.addEventListener("click", function (event) {
  //       if (event.target.dataset.item = "menu-item") {
  //         self.changeBackground(event.target.dataset.background);
  //       }
  //     });
  //   };
  //   //toggling tabs and changing background
  //   self.changeBackground = function (backgroundUrl) {
  //     self.node.style.background = "url(" + backgroundUrl + ")";
  //   };
  //
  // };
  //
  // var tabMenu = new TabMenu();
  // tabMenu.init();
  //
  //
  // /* arrow tabs navigation */
  //
  // var TabsSlider = function (node) {
  //
  //   var self = this;
  //   self.node = node;
  //   self.prev;
  //   self.next;
  //   self.list;
  //   self.content;
  //
  //   self.init = function () {
  //
  //     self.prev = self.node.querySelector(".arrow-navigation_prev");
  //     self.next = self.node.querySelector(".arrow-navigation_next");
  //     self.list = self.node.querySelectorAll(".nav-list .nav-list__item");
  //     self.content = self.node.querySelectorAll(".slide-js");
  //
  //     self.prev.addEventListener("click", function (event) {
  //       self.back();
  //     });
  //
  //     self.next.addEventListener("click", function (event) {
  //       self.forward();
  //     });
  //
  //     self.node.addEventListener("click", function (event) {
  //       var element = event.target;
  //       if (element.classList.contains("nav-list__item")) {
  //         var positionFrom;
  //         var positionTo = Array.prototype.indexOf.call(self.list, element);
  //         for (var i = 0; i < self.list.length; i++) {
  //           if (self.list[i].dataset.active === "true") {
  //             positionFrom = i;
  //           }
  //         }
  //         self.moveSlider(self.list, positionTo - positionFrom);
  //         self.moveSlider(self.content, positionTo - positionFrom);
  //       }
  //     });
  //     self.list[0].parentNode.addEventListener("mouseover", self.onNavigationOver);
  //     self.list[0].parentNode.addEventListener("mouseleave", self.onNavigationOut);
  //     self.createElementSlidingLine(0);
  //   };
  //
  //   self.forward = function () {
  //     self.moveSlider(self.list, 1);
  //     self.moveSlider(self.content, 1);
  //   };
  //
  //   self.back = function () {
  //     self.moveSlider(self.list, -1);
  //     self.moveSlider(self.content, -1);
  //   };
  //
  //   self.moveSlider = function (elements, step) {
  //     for (var i = 0; i < elements.length; i++) {
  //       if (elements[i].dataset.active === "true") {
  //         elements[i].dataset.active = false;
  //         elements[i].classList.remove("active");
  //         if (i === elements.length - 1 && Math.abs(step) === step) {
  //           i = -1;
  //         } else if (i === 0 && Math.abs(step) !== step) {
  //           i = elements.length;
  //         }
  //         elements[i + step].dataset.active = true;
  //         elements[i + step].classList.add("active");
  //         self.createElementSlidingLine(i + step);
  //         break;
  //       }
  //     }
  //   };
  //
  //   self.createElementSlidingLine = function (position) {
  //     var event = new Event("mouseover");
  //     self.list[position].dispatchEvent(event);
  //     self.onNavigationOver(event);
  //   };
  //
  //   self.onNavigationOver = function (event) {
  //     var line = self.node.querySelector(".sliding-line2");
  //     if (line != null) {
  //       line.style.width = event.target.offsetWidth + "px";
  //       line.style.left = event.target.offsetLeft + "px";
  //     }
  //   };
  //
  //   self.onNavigationOut = function () {
  //     var activeElement = self.node.querySelector(".nav-list__item.active");
  //     var activeLine = self.node.querySelector(".sliding-line2");
  //     activeLine.style.width = activeElement.offsetWidth + "px";
  //     activeLine.style.left = activeElement.offsetLeft + "px";
  //   };
  //
  // };
  //
  // var sliders = document.querySelectorAll("[data-slider]");
  // for (var i = 0; i < sliders.length; i++) {
  //   var slider = new TabsSlider(sliders[i]);
  //   slider.init();
  // }
  //
  // /* scrollTop for slider */
  //
  // var controller = new ScrollMagic.Controller();
  //
  // new ScrollMagic.Scene({
  //   triggerElement: ".see-more-wrap"
  //
  // })
  //     .setClassToggle(".slider-wrap", "wrap-active")
  //
  //     .addTo(controller);


  /**
   * author Shishlachev Ilya
   * select for works page
   * 20.1.2018
   */
  var Select = function (node) {

    var self = this;
    self.node = node;
    self.dropList = [];
    self.text = self.node.querySelector(".works-select__head");
    self.dropList = self.node.querySelector(".works-select__list");


    self.init = function () {
      self.addListeners();
    };

    self.addListeners = function () {

      self.dropList.addEventListener("click", function (event) {
        event.stopPropagation();
        self.changeText(event.target);
      });

      self.node.addEventListener('click', function (event) {
        self.open(event.target);
      });
    };

    self.open = function (node) {
      if (node.nextElementSibling !== null) {
        node.nextElementSibling.classList.toggle("select-open");
        self.text.classList.toggle("works-select__head_open");
        document.querySelector(".works-filter").classList.toggle("filter-active");
      }
    };

    self.close = function () {
      self.dropList.classList.toggle("select-open");
      self.text.classList.toggle("works-select__head_open");
    };

    self.changeText = function (node) {
      self.text.innerHTML = node.innerHTML;
      self.close();
    };
  };

  var selectArr = document.querySelectorAll("[data-type='select']");
  for (i = 0; i < selectArr.length; i++) {
    var select = new Select(selectArr[i]);
    select.init();
    selectArr[i] = select;
  }

  $(document).on("click", function (event) {
    event.stopPropagation();
    var div = $(".works-select");
    if (!div.is(event.target) && div.has(event.target).length === 0) {
      div.find(".works-select__list").removeClass("select-open");
      if ($(".works-select__head").hasClass("works-select__head_open")) {
        $(".works-select__head").removeClass("works-select__head_open");
      }
    }
  });

  /**
   * author Shishlachev Ilya
   * works slider
   * 20.1.2018
   */


  var workSlider = $(".works-slider");
  workSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "200px",
    speed: 600,
    arrows: false,
    swipe: false,
    asNavFor: '.works-slider-nav',
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          centerPadding: "120px",
          speed: 800
        }
      }
    ]
  });

  var worksSliderNav = $('.works-slider-nav');

  worksSliderNav.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.works-slider',
    speed: 800,
    dots: false,
    swipe: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          speed: 1000
        }
      }
    ]
  });

  var prev = $(".area_prev");
  var next = $(".area_next");

  prev.hover(function () {
    var activeSlide = $(".works-slider .slick-active").data("slick-index");
    var prevSlide = activeSlide - 1;
    $('[data-slick-index="' + prevSlide + '"]').addClass("hovered");
  }, function () {
    var activeSlide = $(".works-slider .slick-active").data("slick-index");
    var prevSlide = activeSlide - 1;
    $('[data-slick-index="' + prevSlide + '"]').removeClass("hovered");
  });

  next.hover(function () {
    var activeSlide = $(".works-slider .slick-active").data("slick-index");
    var nextSlide = activeSlide + 1;

    $('[data-slick-index="' + nextSlide + '"]').addClass("hovered");

  }, function () {
    var activeSlide = $(".works-slider .slick-active").data("slick-index");
    var nextSlide = activeSlide + 1;
    $('[data-slick-index="' + nextSlide + '"]').removeClass("hovered");
  });

  function slPrev() {
    $(".works-slider .slick-current").addClass("is-active");
    setTimeout(function () {
      $(worksSliderNav).slick("slickPrev");
      $(".works-slider .slick-current").removeClass("is-active");
    }, 800);
  }

  function slNext() {
    $(".works-slider .slick-current").addClass("is-active");
    setTimeout(function () {
      $(worksSliderNav).slick("slickNext");
      $(".works-slider .slick-current").removeClass("is-active");
    }, 800);
  }

  $("[data-nav='prev']").on("click", function () {
    $(".works-slider .slick-slide").removeClass("hovered");
    slPrev();
  });

  $("[data-nav='next']").on("click", function () {
    $(".works-slider .slick-slide").removeClass("hovered");
    slNext();
  });

  $(".works-slider-nav__item").unbind("click");

});