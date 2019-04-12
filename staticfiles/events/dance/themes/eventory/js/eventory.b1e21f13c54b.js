jQuery(document).ready(function() {

    // Shop slider -----------------
    jQuery('.tz_overflowholder').owlCarousel({
        loop: false,
        nav: false,
        autoplay: false,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                navText: ['<', '>']
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1300: {
                items: 3
            }
        }
    });

    jQuery('.showbiz-container').each(function() {
        jQuery(this).showbizpro({
            dragAndScroll: "on",
            visibleElementsArray: [3, 2, 2, 1],
            carousel: "off",
            rewindFromEnd: "on",
            autoPlay: "off",
            delay: 2000,
            speed: 2000
        });
    });



    //    var lastchild = jQuery('.curtains li:last-child').innerHeight();
    //    jQuery('.curtains li:last-child').css("height",lastchild+"px");

    <!--Countdown Script-->

    var logo_height = 39;
    var logo_small = 30;
    jQuery().UItoTop({
        easingType: 'easeOutQuart',
        logo_height: logo_height,
        logo_small: logo_small
    });
    var win_width = jQuery(window).width();
    var para = jQuery('div').hasClass('para-background');
    jQuery(window).load(function() {
        if (win_width > 1024) {
            if (para == true) {
                jQuery('.para-background').each(function() {
                    jQuery(this).parallax("50%", 0.1);
                });
            }
        }
    })


    var back = jQuery('a').hasClass('jev_back');
    if (back == true) {
        jQuery('.jev_back').click(function() {

            parent.history.back();
            return false;
        });
    }
    //acconrdion
    var tz = jQuery.noConflict();
    tz('.tz_news .tz_accordion:first-child h3').addClass('open');
    tz('.tz_news .tz_accordion:first-child').find('.info_accordion').css('display', 'block');

    tz('.tz_accordion h3').click(function() {
        tz(this).parent().find('.info_accordion').slideToggle();
        tz(this).toggleClass('open');
    });

    jQuery('.tab-content > div:first-child').addClass('active');
    jQuery('.Shortcode_myTab > li:first-child').addClass('active');



});