// jshint devel:true
console.log('\'Allo \'Allo!');

$(document).ready(function(){
	$('body').css('opacity', 1);
	$('input[type=email]').attr('value', "");
	$('input[type=email]').val("");
	$('input[type=text]').attr('value', "");
	$('input[type=text]').val("");

	$('input').change(function(){
		$(this).attr('value', $(this).val());
		console.log("???");
	});

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
	swiperbuttonPosition();
	//Hide Me
	hideme();

	$('.image a').click(function(){
		$('body').css('overflow-y', 'hidden');
	});
	$('#lightbox').click(function(){
		$('body').css('overflow-y', 'scroll');
	});
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
            $this.css({'opacity':'1', 'margin-top':'0px'});
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

	$('.swiper-slide, .swiper-button-white').hover(function(){
		$('.swiper-button-white').css('opacity', 1);
	}, function(){
		$('.swiper-button-white').css('opacity', 0);
	});
}