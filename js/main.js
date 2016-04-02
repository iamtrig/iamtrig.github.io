$(document).ready(function(){
	var activeItem;
	var wdHeight = $(window).height();
	$("#work ol li").css("opacity","0.6");
	
	// nav clickEvent on mobile devices


	$(".mainNav h3").hide();
	$("#header h2 a").click(function(){
		$(this).hide();
		$(".mainNav h3").show();
		$("#header ul.navUl").slideDown(500);
		$(".sns").fadeIn(500);
		$(".chooseLang").fadeIn(500);
		return false;
	});

	$(".mainNav h3").click(function(){
		$("#header ul.navUl").slideUp(500);
		$(".sns").hide();
		$(".chooseLang").hide();
		$(this).hide();
		$("#header h2 a").show();

		return false;
	});


	$('.mainNav li > a').bind('mouseenter mouseleave click', function(event){

	    if(event.type == 'click') { 
		
			$(this).css({"backgroundColor":"#4B4B4B","color":"#fff"});
			$(this).parent().siblings().find("a").css({"backgroundColor":"#F1F1F1","color":"#BBB"});

	        activeItem = this;

	    } else if(event.type == 'mouseenter') { 

	        $(this).css({"backgroundColor":"#4B4B4B","color":"#fff"});
	

	    } else if(event.type == 'mouseleave') {

	        if(activeItem != this) {   

	            $(this).css({"backgroundColor":"#F1F1F1","color":"#BBB"});
		
	        }
	    } 

	});


	// var aHeight = $("#aboutMe").outerHeight();
	// var workHeight = $("#work").outerHeight();	
	// var sHeight = $("#spareTime").outerHeight();
	// var cHeight = $("#contact").outerHeight();
	// var asideHeight = $("#aside").outerHeight();
	// var wHeight = $(window).scrollTop();


	// $(window).scroll(function(){


	// 	if ( $(window).width() >= 1000 ) {



	// 		var totHeight = aHeight+workHeight+sHeight;
	// 		wHeight = $(window).scrollTop()-(totHeight+asideHeight);

	// 		if ( wHeight < cHeight) {
	// 			$("#header .navUl li:eq(3) > a").css({"backgroundColor":"#4B4B4B","color":"#fff"});

	// 			totHeight = aHeight+workHeight;

	// 			wHeight = $(window).scrollTop()-(totHeight);

	// 			 if ( wHeight <= sHeight) {
	// 				$("#header .navUl li:eq(2) > a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
	// 				$("#header .navUl li:eq(3) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
	// 			} else {
	// 				$("#header .navUl li:eq(2) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});

	// 			}


	// 			wHeight = $(window).scrollTop()-(aHeight);

	// 			if ( wHeight <= workHeight) {
	// 				$("#header .navUl li:eq(1) > a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
	// 				$("#header .navUl li:eq(2) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
	// 			} else {
	// 				$("#header .navUl li:eq(1) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});

	// 			}


	// 			wHeight = $(window).scrollTop();

	// 			if ( wHeight <= aHeight) {
	// 				$("#header .navUl li:eq(0) > a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
					
	// 				$("#header .navUl li:eq(1) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
	// 			} else {
	// 				$("#header .navUl li:eq(0) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
			
	// 			}

	// 		}


	// 	} else {


	// 	}

	// });


	// scrolling effect

	var aHeight = $("#aboutMe").height();
	var workHeight = $("#work").height();	
	var sHeight = $("#spareTime").height();
	var cHeight = $("#contact").height();
	var asideHeight = $("#aside").height();
	var wHeight = $(window).scrollTop();

	if ( $(window).width() >= 1000  ) {
		$(window).scroll(function(){

			var totHeight = aHeight+workHeight+sHeight;
			wHeight = $(window).scrollTop()-(totHeight+asideHeight+150);

			if ( wHeight < cHeight) {
				$("#header .navUl li:eq(3) > a").css({"backgroundColor":"#4B4B4B","color":"#fff"});

			} else {

			}
		});

		$(window).scroll(function(){

			var totHeight = aHeight+workHeight;

			wHeight = $(window).scrollTop()-(totHeight+150);

			if ( wHeight <= sHeight) {
				$("#header .navUl li:eq(2) > a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
				$("#header .navUl li:eq(3) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
			} else {
				$("#header .navUl li:eq(2) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});

			}
		});
		
		$(window).scroll(function(){

			wHeight = $(window).scrollTop()-(aHeight+150);

			if ( wHeight <= workHeight) {
				$("#header .navUl li:eq(1) > a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
				$("#header .navUl li:eq(2) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
			} else {
				$("#header .navUl li:eq(1) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
				
			}
		});

		$(window).scroll(function(){

			wHeight = $(window).scrollTop();

			if ( wHeight <= aHeight) {
				$("#header .navUl li:eq(0) > a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
				$("#header .navUl li:eq(1) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
			} else {
				$("#header .navUl li:eq(0) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
			}
		});
	} else {
		$(window).scroll(function(){
			$("#header .navUl li > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
		});
	}


	function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {

		    var target = $( $(this).attr('href') );
		    $(this).addClass("bgColour");
		    $(target.length)

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, duration);
		    }
		});
	}

	smoothScroll();



	// #spareTime list mouseenter

	if ($(window).width()>800) {

		$("#work ol li").mouseenter(function(){
			$(this).animate({opacity:1},500);
			$(this).css("boxShadow","3px 0px 32px #D3D3D3");
		});

		$("#work ol li").mouseleave(function(){
			$(this).animate({opacity:0.6},500);
			$(this).css("boxShadow","none");
		});
	} else {
		$("#work ol li").css("opacity",1);
	}


	// #spareTime 

	$('#spareTime ul > li:eq(0)').find(">a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
	$('#spareTime ul > li > a').bind('mouseenter mouseleave click', function(event){ 
		 var lisColour = $(this).find(">a").attr("class");

	    if(event.type == 'click') { 
	       	$(this).parent().find("ol").show();
			$(this).parent().siblings().find("ol").hide();
			$(this).parent().find(">a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
			$(this).parent().siblings().find(">a").css({"backgroundColor":"#F9F9F9","color":"#4B4B4B"});
	        activeItem = this;          
	    } else if(event.type == 'mouseenter') {  
       		$(this).parent().find(">a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
	    } else if(event.type == 'mouseleave') {
	        if(activeItem != this) {        
	           $(this).parent().find(">a").css({"backgroundColor":"#F9F9F9","color":"#4B4B4B"});
	        }
	    } 
	    return false;
	});





});