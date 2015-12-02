animateCss.rotateOut = function (e) {
    animateCss.cssWithVendor(e, "transform-origin", "center");
    $(e).fadeOut(
        {
            duration: 700,
            queue: false
        })
    animateCss.transform(e, "rotate", 0, 180, 1000, "swing", function () {
        animateCss.transform(e, "rotate", 180, -360, 0, "swing", function() {
            animateCss.cssWithVendor(e, "transform-origin", "center");
            $(e).fadeIn(0);
        });
    });
}
//need to first flip it then animate it back

animateCss.rotateOutDownLeft = function (e) {
    animateCss.cssWithVendor(e, "transform-origin", "left bottom");
    $(e).fadeOut(
        {
            duration: 700,
            queue: false
        })
    animateCss.transform(e, "rotate", 0, 45, 1000, "swing", function () {
        animateCss.transform(e, "rotate", 180, -360, 0, "swing", function () {
            animateCss.cssWithVendor(e, "transform-origin", "center");
            $(e).fadeIn(0);
        });
    });
}

animateCss.rotateOutDownRight = function (e) {
    animateCss.cssWithVendor(e, "transform-origin", "right bottom");
    $(e).fadeOut(
        {
            duration: 700,
            queue: false
        })
    animateCss.transform(e, "rotate", 0, -45, 1000, "swing", function () {
        animateCss.transform(e, "rotate", 180, -360, 0, "swing", function () {
            animateCss.cssWithVendor(e, "transform-origin", "center");
            $(e).fadeIn(0);
        });
    });
}

animateCss.rotateOutUpLeft = function (e) {
    animateCss.cssWithVendor(e, "transform-origin", "left bottom");
    $(e).fadeOut(
        {
            duration: 700,
            queue: false
        })
    animateCss.transform(e, "rotate", 0, -45, 1000, "swing", function () {
        animateCss.transform(e, "rotate", 180, -360, 0, "swing", function () {
            animateCss.cssWithVendor(e, "transform-origin", "center");
            $(e).fadeIn(0);
        });
    });
}

animateCss.rotateOutUpRight = function (e) {
    animateCss.cssWithVendor(e, "transform-origin", "right bottom");
    $(e).fadeOut(
        {
            duration: 700,
            queue: false
        })
    animateCss.transform(e, "rotate", 0, 45, 1000, "swing", function () {
        animateCss.transform(e, "rotate", 180, -360, 0, "swing", function () {
            animateCss.cssWithVendor(e, "transform-origin", "center");
            $(e).fadeIn(0);
        });
    });
}