(function($) {
    "use strict";
    /*--
    	Preloader
    -----------------------------------*/
    var win = $(window);
    win.on('load', function() {
        $('.preloader').fadeOut('slow');;
    });
    /*--
    	Menu Sticky
    -----------------------------------*/
    var sticky = $('.header-area');
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 245) {
            sticky.removeClass('stick');
        } else {
            sticky.addClass('stick');
        }
    });
    /*--
    	One Page Menu
    -----------------------------------*/
    var TopOffsetId = $('.header-bottom').height() - 25;
    $('#main-menu nav').onePageNav({
        currentClass: 'active',
        scrollThreshold: 0.2,
        scrollSpeed: 1000,
        scrollOffset: TopOffsetId,
    });
    /*--
    	Bootstrap Menu Fix For Mobile
    -----------------------------------*/
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
    /*--
    	Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.search-form').removeClass('open');
        } else {
            $(this).addClass('open');
            $(this).siblings('.search-form').addClass('open');
        }
    })
    /*--
    	Ganpoka Hero Slider
    -----------------------------------*/
    var $hsCount = $('.slide-count p');
    var $heroSlider = $('.hero-slider');
    $heroSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $hsCount.html('<span class="current">0' + i + '</span>' + '<span class="total">0' + slick.slideCount + '</span>');
    });
    $('.hero-slider').slick({
        arrows: false,
        pauseOnHover: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    /*--
    	Ganpoka Feature Slider
    -----------------------------------*/
    $('.feature-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: '<button class="slick-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
        appendArrows: '.slick-arrows',
        responsive: [{
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--
    	Isotop with ImagesLoaded
    -----------------------------------*/
    var galleryFilter = $('.gallery-filter');
    var galleryGrid = $('.gallery-grid');
    /*-- Images Loaded --*/
    galleryGrid.imagesLoaded(function() {
        /*-- Filter List --*/
        galleryFilter.on('click', 'button', function() {
            galleryFilter.find('button').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            galleryGrid.isotope({
                filter: filterValue
            });
        });
        /*-- Filter Grid --*/
        galleryGrid.isotope({
            itemSelector: '.gallery-item',
            masonry: {
                columnWidth: '.gallery-item',
            }
        });
    });

    /*--
    	Magnific Popup
    -----------------------------------*/
    /*-- Video --*/
    var videoPopup = $('.video-popup');
    videoPopup.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    /*-- Image --*/
    var imagePopup = $('.image-popup');
    imagePopup.magnificPopup({
        type: 'image',
    });
    /*-- Gallery --*/
    var galleryPopup = $('.gallery-popup');
    galleryPopup.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /*-- Gallery Video --*/
    var videGalleryPopup = $('.video-gallery-popup');
    videGalleryPopup.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        },
        gallery: {
            enabled: true
        }
    });
    /*--
    	Smooth Scroll
    -----------------------------------*/
    $('[data-scroll]').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            speed: 1000,
            scrollTarget: link.hash
        });
    });
    /*--
    	Scroll Up
    -----------------------------------*/
    $.scrollUp({
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade',
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    });


})(jQuery);