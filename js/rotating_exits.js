animateCss.rotateOut = function(e){
    console.log("called");
    $(e).css('transform-origin','center');
    $(e).fadeOut(700).animate({  asdf: 180 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 1000,queue: false, easing: 'swing',
    complete: function(){ 
        $(e).animate({  asdf: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 0,queue: false, easing: 'linear',
        complete: function(){
            $(e).fadeIn(0);
            $(e).css('asdf','0');
        }} 
        );
    }
    });

}
//need to first flip it then animate it back

animateCss.rotateOutDownLeft = function(e){
    console.log("called");
    $(e).css('transform-origin','left bottom');
    $(e).fadeOut(700).animate({  asdf: 45 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 1000,queue: false, easing: 'swing',
    complete: function(){ 
        $(e).animate({  asdf: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 0,queue: false, easing: 'linear',
        complete: function(){
            $(e).fadeIn(0);
            $(e).css('asdf','0');
        }} 
        );
    }
    });

}

animateCss.rotateInDownRight = function(e){
    console.log("called");
    //$(e).css('-webkit-transform', "rotateX(180deg)");
    $(e).css('transform-origin', 'right bottom');
    $(e).fadeOut(0).fadeIn(900).animate({  asdf: -315 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 10,queue: false, easing: 'linear',
    complete: function(){ 
        $(e).animate({  asdf: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 700,queue: false, easing: 'linear',
        complete: function(){ }} 
        );
    }
    });

}

animateCss.rotateInUpLeft = function(e){
    console.log("called");
    //$(e).css('-webkit-transform', "rotateX(180deg)");
    $(e).css('transform-origin', 'left bottom');
    $(e).fadeOut(0).fadeIn(900).animate({  asdf: -315 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 10,queue: false, easing: 'linear',
    complete: function(){ 
        $(e).animate({  asdf: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 700,queue: false, easing: 'linear',
        complete: function(){ }} 
        );
    }
    });

}

animateCss.rotateInUpRight = function(e){
    console.log("called");
    //$(e).css('-webkit-transform', "rotateX(180deg)");
    $(e).css('transform-origin', 'right bottom');
    $(e).fadeOut(0).fadeIn(900).animate({  asdf: 315 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 10,queue: false, easing: 'linear',
    complete: function(){ 
        $(e).animate({  asdf: 360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 700,queue: false, easing: 'linear',
        complete: function(){ }} 
        );
    }
    });

}