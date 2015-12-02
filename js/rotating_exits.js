animateCss.rotateOut = function(e){
    console.log("called");
    $(e).css('transform-origin','center');
    $(e).fadeOut(700).animate({  rotOut: 180 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 1000,queue: false, easing: 'swing',
    complete: function(){ 
        $(e).animate({  rotOut: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 0,queue: false, easing: 'linear',
        complete: function(){
            $(e).fadeIn(0);
            $(e).css('rotOut','0');
            $(e).css('transform-origin','center');
        }} 
        );
    }
    });

}
//need to first flip it then animate it back

animateCss.rotateOutDownLeft = function(e){
    console.log("called");
    $(e).css('transform-origin','left bottom');
    $(e).fadeOut(700).animate({  rotOut: 45 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 1000,queue: false, easing: 'swing',
    complete: function(){ 
        $(e).animate({  rotOut: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 0,queue: false, easing: 'linear',
        complete: function(){
            $(e).fadeIn(0);
            $(e).css('rotOut','0');
            $(e).css('transform-origin','center');
        }} 
        );
    }
    });

}

animateCss.rotateOutDownRight = function(e){
    console.log("called");
    $(e).css('transform-origin','right bottom');
    $(e).fadeOut(700).animate({  rotOut: -45 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 1000,queue: false, easing: 'swing',
    complete: function(){ 
        $(e).animate({  rotOut: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 0,queue: false, easing: 'linear',
        complete: function(){
            $(e).fadeIn(0);
            $(e).css('rotOut','0');
            $(e).css('transform-origin','center');
        }} 
        );
    }
    });

}

animateCss.rotateOutUpLeft = function(e){
    console.log("called");
    $(e).css('transform-origin','left bottom');
    $(e).fadeOut(700).animate({  rotOut: -45 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 1000,queue: false, easing: 'swing',
    complete: function(){ 
        $(e).animate({  rotOut: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 0,queue: false, easing: 'linear',
        complete: function(){
            $(e).fadeIn(0);
            $(e).css('rotOut','0');
            $(e).css('transform-origin','center');
        }} 
        );
    }
    });

}

animateCss.rotateOutUpRight = function(e){
    console.log("called");
    $(e).css('transform-origin','right bottom');
    $(e).fadeOut(700).animate({  rotOut: 45 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 1000,queue: false, easing: 'swing',
    complete: function(){ 
        $(e).animate({  rotOut: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 0,queue: false, easing: 'linear',
        complete: function(){
            $(e).fadeIn(0);
            $(e).css('rotOut','0');
            $(e).css('transform-origin','center');
        }} 
        );
    }
    });

}