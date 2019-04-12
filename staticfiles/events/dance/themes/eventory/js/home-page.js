/*
 * Method resize image
 */
function TzTemplateResizeImage(obj) {

    var widthStage;
    var heightStage;
    var widthImage;
    var heightImage;
    obj.each(function(i, el) {
        heightStage = jQuery(this).height();
        widthStage = jQuery(this).width();
        var img_url = jQuery(this).find('img').attr('src');
        var image = new Image();
        image.src = img_url;
        image.onload = function() {}
        widthImage = image.naturalWidth;
        heightImage = image.naturalHeight;
        var tzimg = new resizeImage(widthImage, heightImage, widthStage, heightStage);
        jQuery(this).find('img').css({
            top: tzimg.top,
            left: tzimg.left,
            width: tzimg.width,
            height: tzimg.height
        });
    });
}


jQuery(window).load(function() {
    var tz_event = jQuery('div').hasClass('tz-event');
    var event_page = jQuery('div').hasClass('jeventpage');
    var event_resize = jQuery('div').hasClass('image');
    if (tz_event == true) {
        jQuery('.tz-event').each(function() {
            var event_height = jQuery(this).height();

            var vent_info = jQuery(this).find('.counter-info').height();

            var top_position = (event_height - vent_info) / 2;
            var top_position1 = top_position - 20
            var top_position2 = top_position + 20;
            jQuery(this).find('.counter-info').css({
                top: top_position1 + 'px',
                bottom: top_position2 + 'px'
            });
        });

    }

    if (event_page == true) {
        if (event_resize == true) {
            jQuery('.image').each(function() {
                TzTemplateResizeImage(jQuery(this));
            });
        }
    }
    var allProducts = jQuery('.sb-media-skin');
    var myArray = [];
    jQuery(allProducts).each(function() {
        var price = jQuery(this).innerHeight();
        myArray.push(price);
    });
    myArray.sort();
    var $count_myarray = myArray.length;
    var newheightli = myArray[$count_myarray - 1];
    jQuery('.sb-media-skin').css("height", newheightli + "px");


    TzTemplateResizeImage(jQuery('ol.curtains > li.cover'));

});

jQuery(function() {


    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    var agentID2 = deviceAgent.match(/(ipad)/);
    var agentIDiphone = deviceAgent.match(/(iphone)/);
    var win_width = jQuery(window).width();
    if (agentID) {
        jQuery('ol.curtains > li').css({
            'position': 'relative',
            'top': 'auto'
        });
    }
    if (agentID2) {
        jQuery('.curtains li img.event-image').css({
            'height': '100%',
            'width': 'auto'
        });
    }

    if (agentIDiphone) {
        jQuery('img.event-image').css({
            'min-height': '100%',
            'width': 'auto'
        });
    }
    if (win_width <= 480) {
        jQuery('ol.curtains > li').css({
            'position': 'relative',
            'top': 'auto'
        });
        jQuery('img.event-image').css({
            'min-width': '100%',
            'height': 'auto'
        });

    }


    jQuery('.curtains').curtain({
        scrollSpeed: 400,
        controls: '.menu_curtain',
        curtainLinks: '.curtain-links'
    });



    var position = jQuery('.tz-header .container').position();
    var position_des = jQuery('.event-description').position();
    var left_position = position.left;
    var top_position = position.top;

    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    var scroll_w = widthNoScroll - widthWithScroll;

    var descrip_left = left_position - (scroll_w / 2);
    if (descrip_left <= 0) {
        descrip_left = 45;
    }


    var height_last = jQuery('.event-box-last').innerHeight();
    var height_last_ds = jQuery('.event-box-last').find('.event-description-last').innerHeight();
    var new_heightlast = (height_last - height_last_ds) / 2;
    var new_heightlast = new_heightlast + 50;
    jQuery('.event-description').css({
        left: descrip_left + 'px'
    });
    if (new_heightlast <= 0) {
        jQuery('div.event-description-last').css({
            bottom: 120 + 'px'
        });
    } else {
        jQuery('div.event-description-last').css({
            top: new_heightlast + 'px'
        });
    }

    jQuery('.event-overlay2').css({
        top: top_position + 'px'
    });



});