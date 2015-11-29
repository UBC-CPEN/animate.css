animateCss.fadeOut = function (e) {
    $(e).fadeOut(1000).fadeIn(1);
}

animateCss.fadeOutDown = function (e){
    var pt = $(e).css("paddingTop");
    var mb = $(e).css("marginBottom");
    $(e).fadeOut(1000).animate({
            paddingTop: "+=100",
            marginBottom: "-=100"
        }, {duration: 1000,queue: false, easing: "easeOutQuad", complete: fadeOutDownReset(e,pt,mb)});

}

function fadeOutDownReset(e,pt,mb){
    return function(){
                $(e).css('paddingTop', pt);
                $(e).css('marginBottom',mb);
                $(e).fadeIn(1);
    }
}

animateCss.fadeOutDownBig = function (e){
    var pt = $(e).css("paddingTop");
    var mb = $(e).css("marginBottom");
    $(e).fadeOut(1000).animate({
            paddingTop: "+=1000",
            marginBottom: "-=1000"
        }, {duration: 900,queue: false, easing: "swing", complete: fadeOutDownReset(e,pt,mb)});
}

animateCss.fadeOutLeft = function (e){
    var pr = $(e).css("paddingRight");
    var ml = $(e).css("marginLeft");
    $(e).fadeOut(1000).animate({
            paddingRight: "+=150",
            marginLeft: "-=150"
        }, {duration: 800,queue: false, easing: "swing", complete: fadeOutLeftReset(e,pr,ml)});
}

animateCss.fadeOutLeftBig = function (e){
    var pr = $(e).css("paddingRight");
    var ml = $(e).css("marginLeft");
    $(e).fadeOut(500).animate({
            paddingRight: "+=1000",
            marginLeft: "-=1000"
        }, {duration: 1000,queue: false, easing: "easeOutCubic", complete: fadeOutLeftReset(e,pr,ml)});
}
function fadeOutLeftReset(e,pr,ml){
    return function(){
                $(e).css('paddingRight', pr);
                $(e).css('marginLeft',ml);
                $(e).fadeIn(1);
    }
}

animateCss.fadeOutRight = function (e){
    var pl = $(e).css("paddingLeft");
    var mr = $(e).css("marginRight");
    $(e).fadeOut(1000).animate({
            paddingLeft: "+=150",
            marginRight: "-=150"
        }, {duration: 800,queue: false, easing: "swing", complete: fadeOutRightReset(e,pl,mr)});
}

animateCss.fadeOutRightBig = function (e){
    var pl = $(e).css("paddingLeft");
    var mr = $(e).css("marginRight");
    $(e).fadeOut(1000).animate({
            paddingLeft: "+=1000",
            marginRight: "-=1000"
        }, {duration: 1000,queue: false, easing: "easeOutCubic", complete: fadeOutRightReset(e,pl,mr)});
}
function fadeOutRightReset(e,pl,mr){
    return function(){
                console.log(pl);
                $(e).css('paddingLeft', pl);
                $(e).css('marginRight',mr);
                $(e).fadeIn(1);
    }
}
animateCss.fadeOutUp = function (e){
    var mb = $(e).css("marginBottom");
    var pt = $(e).css("paddingTop");
    $(e).fadeOut(1);
    $(e).animate({
        marginBottom: "-=90",
        paddingTop: "+=90",
    }, 5, "linear", function () {
        $(e).fadeIn(1500).animate({
            marginBottom: mb,
            paddingTop: pt
        }, {duration: 1000,queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeOutUpBig = function (e){
        var mb = $(e).css("marginBottom");
    var pt = $(e).css("paddingTop");
    $(e).fadeOut(1);
    $(e).animate({
        marginBottom: "-=2000",
        paddingTop: "+=2000",
    }, 5, "linear", function () {
        $(e).fadeIn(1500).animate({
            marginBottom: mb,
            paddingTop: pt
        }, {duration: 910,queue: false}, "swing",function(){
    });
    });
}