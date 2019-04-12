"use strict";

var images = ["2.jpg", "1.jpg"];

var svg = document.querySelector("svg");
var circle = svg.querySelector("circle");
var r = circle.getAttribute("r");
var circ = 2 * Math.PI * r;

var sections = document.querySelectorAll("section");
var count = sections.length;
var n = 0;

sections.forEach(function (section, i) {
    var image = new Image();
    var src = "/static/events/Ramp Walk/Images/" + images[i];

    image.onload = function (e) {
        section.firstElementChild.style.backgroundImage = "url(" + src + ")";

        n++;

        if (n >= count) {
            init();
        }
    };

    image.src = src;
});

var pageable = void 0;

function init() {

    pageable = new Pageable("main", {
        onInit: onInit,
        onScroll: scroll,
        animation: 600,
        freeScroll: true,
        swipeThreshold: 200,
        infinite: true,
        slideshow: {
            interval: 10000,
        },
        orientation: "horizontal",
        navPrevEl: ".nav-prev",
        navNextEl: ".nav-next"
    });
}

function scroll(data) {
    var pos = round(1 - (data.max - data.scrolled) / data.max, 3);
    circle.style.strokeDashoffset = circ - circ * pos;
}

function onInit(data) {
    scroll.call(this, data);
}

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
