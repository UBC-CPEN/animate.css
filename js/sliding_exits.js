
animateCss.slideOutUp = function (e){
    var pb = $(e).css("paddingBottom");
    var mt = $(e).css("marginTop");
    $(e).animate({
            paddingBottom: "+=100",
            marginTop: "-=100"
        }, {duration: 1000,queue: true, easing: "easeOutQuad", complete: slideOutUpReset(e,pb,mt)});
} 

function slideOutUpReset(e,pb,mt){
    return function(){
        $(e).css('paddingBottom',pb);
        $(e).css('marginTop', mt);
    }
}

animateCss.slideOutDown = function (e) {
    var pt = $(e).css("paddingTop");
    var mb = $(e).css("marginBottom");
    $(e).animate({
            paddingTop: "+=100",
            marginBottom: "-=100"
        }, {duration: 1000,queue: false, easing: "easeOutQuad", complete: slideOutDownReset(e,pt,mb)});
} 

function slideOutDownReset(e,pt,mb){
    return function(){
        $(e).css('paddingTop',pt);
        $(e).css('marginBottom', mb);
    }
}

animateCss.slideOutLeft = function (e) {
    var pr = $(e).css("paddingRight");
    var ml = $(e).css("marginLeft");
    $(e).animate({
            paddingRight: "+=150",
            marginLeft: "-=150"
        }, {duration: 800,queue: false, easing: "swing", complete: fadeOutLeftReset(e,pr,ml)});
} 

function slideOutLeftReset(e,pr,ml){
    return function(){
        $(e).css('paddingRight',pr);
        $(e).css('marginLeft', ml);
    }
}

animateCss.slideOutRight = function (e) {
    var pl = $(e).css("paddingLeft");
    var mr = $(e).css("marginRight");
    $(e).animate({
            paddingLeft: "+=200",
            marginRight: "-=200"
        }, {duration: 1000,queue: false, easing: "swing", complete: fadeOutRightReset(e,pl,mr)});
} 

function slideOutRightReset(e,pl,mr){
    return function(){
        $(e).css('paddingLeft',pl);
        $(e).css('marginRight', mr);
    }
}