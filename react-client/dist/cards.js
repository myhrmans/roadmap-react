import $ from 'jquery';
import Flickity from 'flickity';
var counter = 1;
var sliderCounter = 0;
function destroySlider(slider) {
    var destroy = $("." + slider).flickity();
    destroy.flickity("destroy");
}
var cardsLoaded = function () {
    $(".block-1").each(function () {
        counter = 1;
        $(".block").each(function () {
            if ((counter % 4) == 0 && counter != 0) {
                $(this).addClass("block-third");
            }
            counter++;

        })

    })
    $(".slider").each(function () {
        $(this).attr('id', "slider" + sliderCounter);
        sliderCounter++;
    })
    if ($(window).width() < 1001) {
        $(".block").removeClass("col-lg-4 col-xl-3");
        for (var k = 0; k < sliderCounter; k++) {
            var elem = document.querySelector('#slider' + k);
            var flkty = new Flickity(elem, {
                resize: true,
                freeScroll: true,
                prevNextButtons: false,
                //pageDots: false,
                fullscreen: true,

                adaptiveHeight: true
            });
        }
    }
    else {
        for (var i = 0; i < sliderCounter; i++) {
            var div = $("#slider" + i + "");
            var tmp = div.children().clone();
            var parent = div.parent();
            div.remove();
            tmp.appendTo(parent);
        }
    }
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
    $(".shadow-page").click(function (event) {
        if (aniDir == 2) {
            $(block).removeClass("roadmap-block-big");
            $(block).addClass("roadmap-block-shadow");
            if ($(window).width() < 1000) {
                $(bigBlock).css("height", "300px");
                $(title).animate({ height: "50px" }, 300);
            } else {
                $(block).css("height", "400px");
                $(title).animate({ height: "50px" }, 300);
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
            $(pTag).css({ "max-height": "100px", "-webkit-line-clamp": "5" });
            $(block).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (
                event
            ) {
                $(blockTop).removeClass("position-abs");
            });
            setTimeout(function () {
                aniDir = 0;
            }, 100);
        }
    });
    $(".roadmap-block").click(function (e) {
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
                box = $(blockTop.parent(".block"));
                box = $(box.parent(".row"));
                box = $(box.parent(".block-1"));
                boxHeight = $(box).height();
                $(box).height(boxHeight);
            }

            title = $(block.children(".cardTitle"));
            imageBlock = $(block.children(".svg"));
            $(title).animate({ height: "60px" }, 300);
            svg = $(imageBlock.children("svg"));
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
            setTimeout(function () {
                aniDir = 2;
                changeHeight = $(title).outerHeight(true);
                console.log("Title: " + changeHeight)
                changeHeight = changeHeight + $(imageBlock).outerHeight(true);
                console.log("Title + image: " + changeHeight)
                changeHeight = changeHeight + $(pTag).outerHeight(true);
                console.log("Title + image + ptag: " + changeHeight)
                changeHeight = changeHeight + 21;
                
                changeHeight = changeHeight + 50;
                console.log("Title + image + ptag +61 : " + changeHeight)

                if (isOwnerSet) {
                    changeHeight = changeHeight + $(owner).outerHeight(true);
                }
                if (changeHeight < 380) changeHeight = 380;
                $(bigBlock).css("height", changeHeight + "px");
                $(pTag).fadeIn(300);
            }, 410);
        }
    });
    $(".showFullCard").click(function () {
        if (aniDir == 2) {
            if ($(window).width() < 1000) {
                $(blockTop).animate({ "margin-left": 0 }, 200);
            }
            $(block).removeClass("roadmap-block-big");
            $(block).addClass("roadmap-block-shadow");
            if ($(window).width() < 1000) {
                $(bigBlock).css("height", "300px");
                $(title).animate({ height: "58px" }, 300);
            } else {
                $(block).css("height", "400px");
                $(title).animate({ height: "58px" }, 300);
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
            $(pTag).css({ "max-height": "100px", "-webkit-line-clamp": "5" });
            $(block).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (
                event
            ) {
                $(blockTop).removeClass("position-abs");
            });
            setTimeout(function () {
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
var resize = $(window).width();
$(window).resize(function () {
    cardFix();
});
$(document).ready(function () {

    cardsLoaded();
    cardFix();
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
        destroy.flickity('destroy');
    }
});
