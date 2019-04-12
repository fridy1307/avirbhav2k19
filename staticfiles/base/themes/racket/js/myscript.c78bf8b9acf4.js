jQuery(document).ready(function($) {
    if ($("select").length > 0) {
        $("select").selectbox();
    }
    $(".nav_link").click(function() {
        $(".nav_box").slideToggle("normal");
        return false;
    });
    $(".close_nav").click(function() {
        $(".nav_box").slideUp("normal");
        return false;
    });
    $('.back').click(function() {
        var elementClicked = jQuery(this).attr("href");
        var destination = jQuery(elementClicked).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 500);
        return false;
    });
    $(".close_this_link:not(.single_link)").click(function() {
        if (!$(this).hasClass("active")) {
            $(".art_content_top .text_box").slideUp("normal");
            $(this).html("OPEN THIS");
            $(this).addClass("active");
        } else {
            $(".art_content_top .text_box").slideDown("normal");
            $(this).html("CLOSE THIS");
            $(this).removeClass("active");
        }
        return false;
    });
    $(".close_contact").click(function() {
        $(".contact_box").slideUp("500");
        return false;
    });
    $(".contact_link,li#menu-item-91 a").click(function() {
        $(".contact_box").slideDown("500");
        setTimeout(function() {
            var destination = jQuery("#contact").offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 500);
        }, 800);

        return false;
    });
    $(".close_enquiry").click(function() {
        $(".enquiry_box").slideUp("500");
        return false;
    });
    $(".enquiry_link,li#menu-item-90 a").click(function() {
        $(".enquiry_box").slideDown("500");
        setTimeout(function() {
            var destination = jQuery("#enquiry").offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 500);
        }, 800);
        return false;
    });
    $(".share_link").click(function() {
        $(".share_box").slideToggle("normal");
        return false;
    });
    if ($("#input_1_10").length > 0) {
        $('#input_1_10').customFileInput();
    }
    if ($("#design_slider").length > 0) {
        if ($("#design_slider li").length > 1) {
            $('#design_slider').bxSlider({
                mode: 'fade',
                auto: false,
                pause: 4000,
                speed: 1000,
                pager: false
            });
        }
    }
});