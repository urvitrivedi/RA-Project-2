// JavaScript Document


$(document).ready(function(){
	
	$('.bxslider').bxSlider({  
		mode: 'horizontal',
		slideWidth: 330,
		autoHover : true,
		minSlides: 1,
		maxSlides: 4,
		infiniteLoop: false,
		responsive:true,

	});
	
	$(window).on('resize',function(){
   		if ($(window).width() > 0) {
     		location.reload();
   		}
	});
	
});



//$(document).ready(function(){
//var mySettings = {
//        auto  : true,
//        autoHover : true,
//		slideWidth: 330,
//        minSlides : 1,
//        maxSlides   :4,
//        moveSlides : 1
//    };
//var slider = $('.bxslider').bxSlider( mySettings );
//$(window).resize( function() {
//	
//	if($(window).width < 600){
//        mySettings.minSlides = 1;
//        mySettings.maxSlides = 1;
//		
//	}
//	else if($(window).width > 600 && $(window).width < 800){
//        mySettings.minSlides = 2;
//        mySettings.maxSlides = 2;
//		
//	}
//        setTimeout(function(){
//            slider.destroySlider();
//            slider.reloadSlider( mySettings );  
//        }, 100);
//    }).trigger("resize");
//
//}
//);




				  









