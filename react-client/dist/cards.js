import $ from 'jquery'; 
var before = 0;
var after = 0;
function initSlider(slider) {
    $("." + slider).flickity({
        resize: true,
        freeScroll: true,
        prevNextButtons: false,
        //pageDots: false,
        fullscreen: true,

        adaptiveHeight: true
    });
}
function destroySlider(slider) {
    var destroy = $("." + slider).flickity();
    destroy.flickity("destroy");
}
var cardsLoaded = function() {
    var block;
    var blockTop;
    var box;
    var boxHeight;
    var blockNew;
    var pTag;
    var title;
    var adjustments;
    var position;
    var svg;
    var imageBlock;
    var description;
    var changeHeight;
    var aniDir = 0;
    var link;
    var links;
    var owner;
    var bigBlock;
    var rows;
    var oldW;
    var newW;
    var isOwnerSet;
    $(".shadow-page").click(function(event) {
        if (aniDir == 2) {
            $(block).removeClass("roadmap-block-big");
            $(block).addClass("roadmap-block-shadow");
            if ($(window).width() < 1000) {
                $(bigBlock).css("height", "300px");
                $(title).animate({ height: "50px" }, 300);
            } else {
                $(block).css("height", "400px");
                $(title).animate({ height: "88px" }, 300);
            }
            $(link).html("Show Detail");
            $(links).hide();
            if (isOwnerSet) {
                $(owner).hide();
            }
            $(".shadow-page").fadeOut();
            $(bigBlock).css("margin-left", "0px");
            if ($(window).width() < 1000) {
                $(blockTop).animate({ "margin-left": 0 }, 200);
            }
            $(block).css("width", oldW + "px");
            $(pTag).css({ "max-height": "60px", "-webkit-line-clamp": "3" });
            $(block).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(
                event
            ) {
                $(blockTop).removeClass("position-abs");
            });
            setTimeout(function() {
                aniDir = 0;
            }, 100);
        }
    });
$(".roadmap-block").click(function(e) {
    if (aniDir == 0) {
        if ($(blockTop).hasClass("position-abs")) {
            $(blockTop).removeClass("position-abs");
        }
        aniDir = 1;
        block = $(this);
        $(block).css("max-width", "1000px");
        if ($(window).width() < 1000) {
            blockTop = $(block.parent(".block"));
            position = blockTop.get(0).getBoundingClientRect();
            adjustments = position.left;
            $(blockTop).animate({ "margin-left": -adjustments + 50 }, 300);
        } else {
            blockTop = block;
            box = $(block.parent(".block"));
            box = $(box.parent(".row"));
            box = $(box.parent(".block-1"));
            boxHeight = $(box).height();
            $(box).height(boxHeight);
        }

        title = $(block.children(".cardTitle"));
        imageBlock = $(block.children(".svg"));
        $(title).animate({ height: "60px" }, 300);
        svg = $(imageBlock.children("svg"));
        if ($(imageBlock).hasClass("UI")) {
            svg = $(svg.children("g"));
            svg = $(svg.children("g"));

            svgUI = $(svg.children(".cls-1"));
            $(svgUI).css("stroke-dashoffset", "245");
            $(svgUI).css("fill-opacity", "0");
            $(svgUI).css("stroke-opacity", "1");
            $(svgUI).animate({ "stroke-dashoffset": "0" }, 1800, function() {
                $(this).animate({ "fill-opacity": "1" }, 400, function() {});
            });
        } else if ($(imageBlock).hasClass("logic")) {
            svg = $(svg.children("g"));
            svg = $(svg.children("g"));
            svgOutline = $(svg.children(".cls-2"));
            svgLine = $(svg.children(".cls-1"));
            $(svgOutline).css("stroke-dashoffset", "45");
            $(svgLine).css("stroke-dashoffset", "320");

            $(svgOutline).animate({ "stroke-dashoffset": "0" }, 1100);
            $(svgLine)
                .delay(400)
                .animate({ "stroke-dashoffset": "0" }, 1200);
        } else if ($(imageBlock).hasClass("security")) {
            svg = $(svg.children("g"));
            svg = $(svg.children("g"));
            svgLine = $(svg.children(".cls-1"));
            $(svgLine).css("stroke-dashoffset", "532");

            $(svgLine)
                .delay(400)
                .animate({ "stroke-dashoffset": "0" }, 1200);
        } else if ($(imageBlock).hasClass("hardware")) {
            svg = $(svg.children("g"));
            svg = $(svg.children("g"));
            svgLine = $(svg.children(".cls-1"));
            $(svgLine).css("stroke-dashoffset", "335");

            $(svgLine)
                .delay(400)
                .animate({ "stroke-dashoffset": "0" }, 1200);
        }
        oldW = $(block).innerWidth();
        description = $(block.children(".description"));
        owner = $(block.find(".owner"));
        if (owner[0] == undefined) {
            isOwnerSet = false;
        } else {
            isOwnerSet = true;
        }
        pTag = $(description).children("p");
        link = $(block.find(".showFullCard"));
        $(links).fadeIn(400);
        if (isOwnerSet) {
            $(owner).fadeIn(400);
        }

        $(pTag).css({ "max-height": "1000px", "-webkit-line-clamp": "20" });
        $(pTag).css("display", "none");

        $(blockTop).addClass("position-abs");
        $(block).removeClass("roadmap-block-shadow");
        $(block).addClass("roadmap-block-big");
        bigBlock = $(title).parents(".roadmap-block-big");
        newW = (370 - oldW) / 2;
        if ($(window).width() > 1001) {
            $(bigBlock).css("margin-left", "-" + newW + "px");
        }
        if ($(window).width() > 1000) {
            $(bigBlock).css("width", "370px");
        } else {
            $(bigBlock).css("width", "calc(100vw - 100px)");
        }
        changeHeight = $(title).outerHeight(true);
        changeHeight = changeHeight + $(imageBlock).outerHeight(true);
        changeHeight = changeHeight + 11;
        if ($(window).width() < 360) {
            changeHeight = changeHeight + 80;
        }

        if (isOwnerSet) {
            changeHeight = changeHeight + $(owner).outerHeight(true);
        }
        if (changeHeight < 380) changeHeight = 380;

        $(".shadow-page").fadeIn();

        $(bigBlock).css("height", changeHeight + "px");

        $(link).html("Hide Detail");
        setTimeout(function() {
            aniDir = 2;
            changeHeight = $(title).outerHeight(true);
            changeHeight = changeHeight + $(imageBlock).outerHeight(true);
            changeHeight = changeHeight + $(pTag).outerHeight(true);
            changeHeight = changeHeight + 11;

            changeHeight = changeHeight + 30;

            if (isOwnerSet) {
                changeHeight = changeHeight + $(owner).outerHeight(true);
            }
            if (changeHeight < 380) changeHeight = 380;
            $(bigBlock).css("height", changeHeight + "px");
            $(pTag).fadeIn(300);
        }, 410);
    }
});
$(".showFullCard").click(function() {
    if (aniDir == 2) {
        if ($(window).width() < 1000) {
            $(blockTop).animate({ "margin-left": 0 }, 200);
        }
        $(block).removeClass("roadmap-block-big");
        $(block).addClass("roadmap-block-shadow");
        if ($(window).width() < 1000) {
            $(bigBlock).css("height", "300px");
            $(title).animate({ height: "50px" }, 300);
        } else {
            $(block).css("height", "400px");
            $(title).animate({ height: "88px" }, 300);
        }
        $(link).html("Show Detail");
        $(bigBlock).css("margin-left", "0px");
        $(bigBlock).css("margin-left", "0px");
        $(block).css("width", oldW + "px");
        $(links).hide();
        if (isOwnerSet) {
            $(owner).hide();
        }
        $(".shadow-page").fadeOut();
        $(pTag).css({ "max-height": "60px", "-webkit-line-clamp": "3" });
        $(block).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(
            event
        ) {
            $(blockTop).removeClass("position-abs");
        });
        setTimeout(function() {
            aniDir = 0;
        }, 70);
    }
});
cardFix();
};
function cardFix() {
if (window.innerWidth < 1200) {
    $(".block-third").css("margin-left", "0px");
} else {
    $(".block-third").css("margin-left", "275px");
}

if (resize != $(window).width() && resize > 1000 && $(window).width() < 1001) {
    resize = 2;
    $(".block").removeClass("col-lg-4 col-xl-3");
    location.reload();
} else if (resize != $(window).width() && resize < 1000 && $(window).width() > 1001) {
    resize = 2;
    location.reload();
}
}
function getDomainName(url) {
var hostname;
if (url.indexOf("://") > -1) {
    hostname = url.split("/")[2];
} else {
    hostname = url.split("/")[0];
}
hostname = hostname.split(":")[0];
hostname = hostname.split("?")[0];

return hostname;
}
var resize = $(window).width();
$(window).resize(function() {
cardFix();
});
$(document).ready(function() {
cardsLoaded();
cardFix();
});