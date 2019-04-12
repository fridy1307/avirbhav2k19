jQuery(window).load(function() {
    jQuery(document).find('body').addClass('loaded');

    jQuery('.curtains').css({
        opacity: 1
    });
});

jQuery(window).ready(function() {
    "use strict";
    var theme_light = theme_color.theme_color_type;
    if (theme_light == 'global') {
        jQuery('body').removeClass('theme_advance').addClass('theme_global');
    } else if (theme_light == 'advance') {
        jQuery('body').removeClass('theme_global').addClass('theme_advance');
    } else {
        jQuery('body').removeClass('theme_global').removeClass('theme_advance');
    }
});