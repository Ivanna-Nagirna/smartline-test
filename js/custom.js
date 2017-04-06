$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else {
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){

	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){
 			$(this).attr('placeholder', placeholder);	
 		});
 	});
	/* placeholder*/

	$('.navbar-toggle').click(function(){
		$(this).toggleClass('active');
	});

    $('.js-select-item').click(function(){
	  $(this).parent().addClass('active');
	  $(this).parent().siblings().removeClass('active');
	  $(this).parents(".dropdown").toggleClass("open");
	  var text_title = $(this).html();
	  $('.js-select-title').html(text_title + '<span class="caret"></span>');
	  $('.open-select-list').slideUp(300);
	  return false;
	});
	$('.dropdown-toggle').on('click', function(){
		$('.open-select-list').toggle(300);
	});

	$('.slick-slider').slick({
		slidesToShow: 4,
		arrows: false,
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
		    arrows: true,
		    slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    arrows: true,
		    slidesToShow: 1
		  }
		}
		]
	  });

});

/* COLUMNS HEIGHT */
function setEqualHeight() {
	var maxHeight = 0;
	$(".js-column").removeAttr("style");
	$(".js-column").each(function(){
		if ( $(this).height() > maxHeight ) {
			maxHeight = $(this).height();
		}
	});
	$(".js-column").height(maxHeight);
};
/* END COLUMNS HEIGHT */

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer, 'padding-top':height_header});
	var viewport_wid = viewport().width;
	/* COLUMNS HEIGHT */
	setEqualHeight();
	/* END COLUMNS HEIGHT */
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



