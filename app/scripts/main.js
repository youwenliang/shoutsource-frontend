// jshint devel:true
console.log('\'Allo \'Allo!');

$(document).ready(function(){
	$('body').css('opacity', 1);

	//Scroll to #
	$(".scroll").click(function(e) {
		e.preventDefault();
		var link = $(this).parent().attr('href');
	    $('html, body').animate({
	        scrollTop: $(link).offset().top
	    }, 1000, 'easeInOutQuart');
	    return false;
	});

	//Set Swiper-button position
	swiperbuttonPosition()
	//Hide Me
	hideme();
})

/* Every time the window is resized ... */
$(window).resize(function(){
	swiperbuttonPosition()
});

/* Every time the window is scrolled ... */
$(window).scroll( function(){
    //Hide Me
	hideme();
});


/* Functions */ 
function hideme(){
	$('.hideme').each( function(i){
        var bottom_of_object = $(this).offset().top + 150;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var $this = $(this);

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $this.animate({'opacity':'1', 'margin-top':'0px'},500);
            setTimeout(function(){
            	$this.find('.title').addClass('scrolled');
            },100);
        }
    }); 
}

function swiperbuttonPosition(){
	var h = 60 + $('.swiper-slide .image').height()/2-35;
	console.log(h);
	$(".swiper-button-white").css({
		"bottom":h+"px",
	});
}