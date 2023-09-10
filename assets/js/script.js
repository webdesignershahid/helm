(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("header").removeClass("header__sticky");
        } else {
            $("header").addClass("header__sticky");
        }
    });
    var helm = {      
        

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='arrow-up'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },
        

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.toggler-menu', '.mobile-menu, body');
        },

        /* ============================================================ */
        /* Swiper Slider 
        /* ============================================================ */
        swiperCarousel: function () {

            var swiperSlider = $('.swiper');
            if (swiperSlider.length) {

                // Hero Slider
                var logos_slider = new Swiper('.hero-slider', {                
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    speed: 1000,
                    // effect: "fade",
                    autoplay: {
                        delay: 5000,
                    },    
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                    }, 
                });
                // Company  Slider
                var logos_slider = new Swiper('.company_history_slider', {                
                    slidesPerView: 2,
                    spaceBetween: 0,
                    loop: false,
                    speed: 1000,  
                    navigation: {
                        nextEl: '.swiper_next_btn',
                        prevEl: '.swiper_prev_btn',
                    },
                    breakpoints: {
                        576: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }, 
                });
            }
        },

        /* ============================================================ */
        /* General
        /* ============================================================ */
        general: function () {           
            $('.number').counterUp({
                delay: 50,
                time: 1000
            });
        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-color]").each(function() {
                var $this = $(this);

                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")");    
                    $this.css("background-size", $this.attr("data-bg-size"));
                    $this.css("background-repeat", $this.attr("data-bg-repeat"));
                    $this.css("background-position", $this.attr("data-bg-position"));
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode"));
                }
                // Background Color    
                if( $("[data-bg-color]") ){
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                // Background Color   
                if( $("[data-color]") ){
                    $this.css("color", $this.attr("data-color") );
                }
            });
        },

        
        initialize: function() {
			helm.mobile_menu();
			helm.swiperCarousel();
			helm.general();
			helm.background_image();
			helm.scroll_to_top();
		}
    };
    
    $(function() {
		helm.initialize();
	});
    /* ============================================================ */
    /* PRELOADER
    /* ============================================================ */
    $(window).on('load', function() {
        $(".pre_loader").fadeOut();     
    });
})(jQuery);