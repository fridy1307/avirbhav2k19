/*
|--------------------------------------------------------------------------
| UItoTop jQuery Plugin 1.2 by Matt Varone
| http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
|--------------------------------------------------------------------------
*/
(function(jQuery) {
    jQuery.fn.UItoTop = function(options) {

        var defaults = {
                text: 'Top',
                min: 200,
                inDelay: 600,
                outDelay: 400,
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear',
                logo_height: 39,
                logo_small: 30
            },
            settings = jQuery.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#' + settings.containerHoverID;


        jQuery('.totop').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
        jQuery(containerIDhash).hide().on('click.UItoTop', function() {
                jQuery('html, body').animate({
                    scrollTop: 0
                }, settings.scrollSpeed, settings.easingType);
                jQuery('#' + settings.containerHoverID, this).stop().animate({
                    'opacity': 0
                }, settings.inDelay, settings.easingType);
                return false;
            })
            .prepend('<span id="' + settings.containerHoverID + '"></span>')
            .hover(function() {
                jQuery(containerHoverIDHash, this).stop().animate({
                    'opacity': 1
                }, 600, 'linear');
            }, function() {
                jQuery(containerHoverIDHash, this).stop().animate({
                    'opacity': 0
                }, 700, 'linear');
            });

        jQuery(window).scroll(function() {

            var sd = jQuery(window).scrollTop();

            if (sd > 100) {
                jQuery('header').css({
                    'padding': '10px'
                });
                jQuery('#tz-header-wrapper').addClass('header_rgba');
                jQuery('header .tz-logo img').css({
                    'height': settings.logo_small + 'px',
                    'padding': '5px 0 0 0'
                });
            } else {

                jQuery('header').css({
                    'padding': '22px'
                });
                jQuery('#tz-header-wrapper').css({
                    'background': 'rgba(56,56,56,0.8)'
                }).removeClass('header_rgba');
                jQuery('header .tz-logo img').css({
                    'height': settings.logo_height + 'px',
                    'padding': '0'
                });
            }

            if (typeof document.body.style.maxHeight === "undefined") {
                jQuery(containerIDhash).css({
                    'position': 'absolute',
                    'top': sd + jQuery(window).height() - 50
                });
            }
            if (sd > settings.min)
                jQuery(containerIDhash).fadeIn(settings.inDelay);
            else
                jQuery(containerIDhash).fadeOut(settings.Outdelay);
        });
    };
})(jQuery);