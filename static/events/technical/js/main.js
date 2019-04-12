$(document).ready(function() {

    /* Menu */
    $("header .hamburger").click(function() {
        if (
            $('body')
            .hasClass("open")
        ) {
            $('body')
                .removeClass("open");
        } else {
            $('body')
                .addClass("open");
        }
    });
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    $(window).scroll(function(event) {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('header')
                .removeClass('nav-down')
                .addClass('nav-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('header')
                    .removeClass('nav-up')
                    .addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }


    /* Hero Slider */
    $('.hero-slider').each(function(key, item) {
        var heroSliderIdName = 'hero-slider' + key;
        var heroSliderNavIdName = 'hero-sliderNav' + key;
        this.id = heroSliderIdName;
        var heroSliderId = '#' + heroSliderIdName;
        $(heroSliderId).on('init', function(event, slick) {
            $(heroSliderId).attr('data-slide', '0');
            $(heroSliderId + ' svg stop:first').css('stop-color', $(heroSliderId + ' .slide:eq(0)').attr('data-color-1'));
            $(heroSliderId + ' svg stop:last').css('stop-color', $(heroSliderId + ' .slide:eq(0)').attr('data-color-2'));
            $(heroSliderId + ' .background').css('background-image', 'url(' + $(heroSliderId + ' .slide:eq(0)').attr('data-background') + ')');
        });
        $(heroSliderId).slick({
            adaptiveHeight: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: false,
            infinite: false,
            slide: '.slide',
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500
        });
        $(heroSliderId).attr('data-slide', '0');
        $(heroSliderId + ' .backgrounds .background-0').addClass('active');
        $(heroSliderId).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(heroSliderId).attr('data-slide', nextSlide);
            $(heroSliderId + ' svg stop:first').css('stop-color', $(heroSliderId + ' .slide:eq(' + nextSlide + ')').attr('data-color-1'));
            $(heroSliderId + ' svg stop:last').css('stop-color', $(heroSliderId + ' .slide:eq(' + nextSlide + ')').attr('data-color-2'));
            $(heroSliderId + ' .background').css('background-image', 'url(' + $(heroSliderId + ' .slide:eq(' + nextSlide + ')').attr('data-background') + ')');
            var svg = document.getElementById("#hero-shapes");
            var s = Snap(svg);
            var startShape = Snap.select('#shape');
            var endShape = Snap.select('#shape-' + nextSlide);
            var startShapePoints = startShape.node.getAttribute('d');
            var endShapePoints = endShape.node.getAttribute('d');
            var morphShape = function() {
                startShape.animate({
                    d: endShapePoints
                }, 300, mina.easeinout);
            }
            morphShape();
        });
    });

    /* Other Sliders */
    $('.slider').each(function(key, item) {
        var sliderIdName = 'slider' + key;
        var sliderNavIdName = 'sliderNav' + key;
        this.id = sliderIdName;
        var sliderId = '#' + sliderIdName;
        $(sliderId).slick({
            adaptiveHeight: false,
            arrows: false,
            adaptiveHeight: true,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: true,
            fade: false,
            infinite: false,
            slide: '.slide',
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500
        });
    });

    /* Promo Animations */
    $('body.promo section, body.promo .card, body.promo .highlight').addClass('invisible');
    $('body.promo section, body.promo .card').isInViewport({
        tolerance: 0
    }).addClass('animated fadeInUp');
    $('body.promo .highlight').isInViewport({
        tolerance: 0
    }).addClass('animated rollIn');
    $(window).scroll(function() {
        $('body.promo section, body.promo .card').isInViewport({
            tolerance: 0
        }).addClass('animated fadeInUp');
        $('body.promo .highlight').isInViewport({
            tolerance: 0
        }).addClass('animated rollIn');
    });
    $('body').on({
        'touchmove': function(e) {
            $('body.promo section, body.promo .card').isInViewport({
                tolerance: 0
            }).addClass('animated fadeInUp');
            $('body.promo .highlight').isInViewport({
                tolerance: 0
            }).addClass('animated rollIn');
        }
    });

    /* Card Heights */
    $('section .card').matchHeight();
    $('section .feature.equal').matchHeight();

    /* Tile Heights */
    $('section .tile').matchHeight({
        byRow: false
    });

    /* Videos */
    $('body').fitVids();

    /* Image Comparison */
    $('.ba-slider').beforeAfter();

    /* Textarea Auto Height */
    $('textarea').change(function() {
        if ($.trim($(this).val()).length < 1) {
            $(this).addClass('collapsed');
        } else {
            $(this).removeClass('collapsed');
        }
    });

    /* The Upside Down */
    if ($('body').hasClass('the-upside-down')) {
        $(window).scrollTop($(document).outerHeight());
    }

    /* Process Sticky Filter */
    var processHeight = 0;
    $('.bottom-wrapper').each(function() {
        processHeight += $(this).outerHeight();
    });
    $(".filter.stick").sticky({
        bottomSpacing: processHeight - 30,
        responsiveWidth: true,
        topSpacing: 96,
        widthFromWrapper: false
    });

    /* Scroll Down Anchors */
    $('a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });

    /* Circle Charts */
    var circles = $('.circle-chart');
    circles.appear({
        force_process: true
    });
    var circle = circles;
    circle.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        lineCap: 'round',
        size: 600,
        emptyFill: 'transparent',
        thickness: '15',
        value: 0
    }).on('circle-animation-progress', function(e, p, v) {
        $(this).find('.value h2 span').text((v * 100).toFixed());
    });
    circles.on('appear', function() {
        var circle = $(this);
        var val = $(this).attr('data-value');
        if (!circle.data('inited')) {
            circle.circleProgress({
                value: val
            });
            circle.data('inited', true);
        }
    });


    /* Bar Charts */
    $('.bar-chart').appear({
        force_process: true
    });
    $('.bar-chart').on('appear', function() {
        $(this).addClass('active');
    });

});

/* Upside Down Particles */
if ($("#particles-js").length > 0) {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": false,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}