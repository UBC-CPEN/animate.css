animateCss.zoomOut = function (e) {
	animateCss.transform(e, "scale", 1, 0, 1000, "easeOutQuad", function() {});
}    	

animateCss.zoomOutDown = function (e) {
    var mb = $(e).css("marginBottom");
    var pt = $(e).css("paddingTop");
    animateCss.transform(e, "scale", 1, 0.1, 1000, "easeOutQuad", function() {});
    $(e).animate({
        marginBottom: "-=500",
        paddingTop: "+=500"
    }, {duration: 1000,queue: false, complete: function(){
        $(e).css('marginBottom', mb);
        $(e).css('paddingTop', pt);
    }}, "easeOutQuad");
}

animateCss.zoomOutLeft = function (e) {
    var ml = $(e).css("marginLeft");
    var pr = $(e).css("paddingRight");
    animateCss.transform(e, "scale", 1, 0.1, 1000, "easeOutQuad", function() {});
    $(e).animate({
        marginLeft: "-=500",
        paddingRight: "+=500"
    }, {duration: 1000,queue: false, complete: function(){
        $(e).css('marginLeft', ml);
        $(e).css('paddingRight', pr);
    }}, "easeOutQuad");
}

animateCss.zoomOutRight = function (e) {
    var mr = $(e).css("marginRight");
    var pl = $(e).css("paddingLeft");
    animateCss.transform(e, "scale", 1, 0.1, 1000, "easeOutQuad", function() {});
    $(e).animate({
        marginRight: "-=500",
        paddingLeft: "+=500"
    }, {duration: 1000,queue: false, complete: function(){
        $(e).css('marginRight', mr);
        $(e).css('paddingLeft', pl);
    }}, "easeOutQuad");
}

animateCss.zoomOutUp = function (e) {
    var mt = $(e).css("marginTop");
    var pb = $(e).css("paddingBottom");
    animateCss.transform(e, "scale", 1, 0.1, 1000, "easeOutQuad", function() {});
    $(e).animate({
        marginTop: "-=500",
        paddingBottom: "+=500"
    }, {duration: 1000,queue: false, complete: function(){
        $(e).css('marginTop', mt);
        $(e).css('paddingBottom', pb);
    }}, "easeOutQuad");
}