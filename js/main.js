$(document).ready(function(){
		var activeItem;
		var wdHeight = $(window).height();
		$("#work ol li").css("opacity","0.6");
		
		if ($(window).height() >= 1000) { 
			$("#header").css("height","100%");
			$("#header ul.navUl li:first-child > a span.aboutIcon").css("background", "url('imgs/aboutIcon_on.svg') no-repeat;");
			$("#header ul.navUl li:first-child > a").css({"color":"#fff","backgroundColor":"#4B4B4B"});
		} else {
			$(".mainNav h3").hide();
			// $(".chooseLang").hide();
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
				(".chooseLang").hide();
				$(this).hide();
				$("#header h2 a").show();

				return false;
			});
		}


		 // var wHeight = $(window).height();

 		//    $('.slide')
   //   	 .height(wHeight)
   //   	 .scrollie({
   //   	   scrollOffset : -50,
   //   	   scrollingInView : function(elem) {
                   
   //        var bgColor = elem.data('background');
          
   //        $('body').css('background-color', bgColor);
          
   //      }
   //    });
		var aHeight = $("#aboutMe").height();
		var workHeight = $("#work").height();	
		var sHeight = $("#spareTime").height();
		var cHeight = $("#contact").height();
		var asideHeight = $("#aside").height();
		var wHeight = $(window).scrollTop();

	if ( $(window).width() > 1000  ) {
		$(window).scroll(function(){

			var totHeight = aHeight+workHeight+sHeight;
			wHeight = $(window).scrollTop()-(totHeight+asideHeight+150);

			if ( wHeight < cHeight) {
				$("#header .navUl li:eq(3) > a").css({"backgroundColor":"#4B4B4B","color":"#fff"});
				// $("#header .navUl li:eq(2) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
			} else {
				// $("#header .navUl li:eq(3) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
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
				// $("#header .navUl li:eq(1) .workIcon").css("backgroundImage","url('imgs/workIcon.svg')");
				$("#header .navUl li:eq(2) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
			} else {
				$("#header .navUl li:eq(1) > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
				// $("#header .navUl li:eq(1) .workIcon").css("backgroundImage","url('imgs/workIcon_on.svg')");

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

	if ($(window).width() <= 999) {
		$(window).scroll(function(){
			$("#header .navUl li > a").css({"backgroundColor":"#F1F1F1","color":"#BBBBBB"});
		});
	}

		
		


		$('.mainNav li > a').bind('mouseenter mouseleave click', function(event){ 
			var iconName = $(this).find("span").attr("class");
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