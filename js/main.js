
$.noConflict();
jQuery(document).ready(function($){

	$("body, .navParent, #header h1, #about h1, #about p, #about li").css("opacity",0);
	$("#middle").css("left","-100%");

	$("body").animate({opacity:1}, 500);
	$(".navParent, #header h1").delay(1000).animate({opacity:1}, 500);
	$("#middle").delay(500).animate({left:0},7300)
	$("#about h1").delay(1500).animate({opacity:1}, 1000);
	$("#about p").delay(2500).animate({opacity:1}, 700);
	$("#about li").delay(3200).animate({opacity:1}, 800);


	// 햄버거 메뉴
	$('.navDeco').click(function(){
		$(this).toggleClass('open');
		if ($("#nav").hasClass('navOn')) {
			$("#nav").removeClass('navOn');
		} else {
			$("#nav").delay(500).addClass('navOn');
		}
		
	});

	// #about 스팬 데코레이션 애니메이션 이펙트

	$("#about .bottomContent span, #about .topContent span").delay(4000);

	function autoClick() {

		for ( var i = 0; i < $("#about .topContent span").length; i ++) {

		$("#about .bottomContent span").eq(i).delay((i*500)-(i*200)).animate({opacity:1}, 500);
		$("#about .topContent span").eq(i).delay((i*500)-(i*200)).animate({opacity:1}, 500);

		$("#about .bottomContent span").eq(i).delay(800).delay((i*500)-(i*300)).animate({opacity:0}, 800);
		$("#about .topContent span").eq(i).delay(800).delay((i*500)-(i*300)).animate({opacity:0}, 800);

		$("#about .bottomContent span").eq(i).delay(800).delay((i*500)-(i*300)).animate({opacity:1}, 800);
		$("#about .topContent span").eq(i).delay(800).delay((i*500)-(i*300)).animate({opacity:1}, 800);

		}
	}

	function timer() {
		auto = setInterval(function(){autoClick()},4000);
	}

	function timerStop() {
		clearInterval(auto);
	}

	timer();





	// work 클릭시

	$("#work .topContent").addClass("toTheLeft");
	$("#work .bottomContent").addClass("toTheRight");
	$("#work .middleContent").addClass("toTheLeft");

	$("#work h1, #work .topContent p, #work ul > li > a, #work .bottomContent dl, .deviceBg").css("opacity",0);


	$("#nav a:eq(0)").click(function(){
		timerStop();

		$("#contact .bottomContent").css("zIndex", 40000);
		$("#work .bottomContent").css("zIndex", 50000);

		$("#contact h1, #contact .topContent p, #contact ul li, #contact .bottomContent p, #middle, .blackDeco").css("opacity",0);

		$("#middle").css("left",-100+"%");



		$("#middle").animate({left:0},200);

		$(".workTopBg").addClass("contactSlide");
		$(".workBtmBg").addClass("contactSlide");
		$(".workMiddleBg").addClass("contactSlide");

		$(".deviceBg").delay(2000).animate({opacity:1, bottom:-17+"%"},2000);


		$("#contact .topContent").removeClass("toTheLeftOff");
		$("#contact .bottomContent").removeClass("toTheRightOff");

		$(".contactBtmBg").removeClass("contactSlide");
		$(".contactTopBg > span").removeClass("contactSlideRight");

		$("#work h1, #work .topContent p").delay(1000).animate({opacity:1},1000);

		$("#work ul li > a").delay(2000).animate({opacity:1},1000);
		$("#work .bottomContent dl, .blackDeco").delay(3000).animate({opacity:1},1000);

		$("#about .topContent").addClass("toTheLeft");
		$("#about .bottomContent").addClass("toTheRight");

		$("#contact .topContent").addClass("toTheLeft");
		$("#contact .bottomContent").addClass("toTheRight");

		$("#work .topContent").addClass("toTheLeftOff");
		$("#work .bottomContent").addClass("toTheRightOff");
		$("#work .middleContent").addClass("toTheLeftOff");

		$(".contactTopBg > span").removeClass("contactSlideRight");

		
		
		return false;
	});

	// contact 클릭시

	$("#contact .topContent").addClass("toTheLeft");
	$("#contact .bottomContent").addClass("toTheRight");


	$("#contact h1, #contact .topContent p, #contact ul li, #contact .bottomContent p").css("opacity",0);

	$("#nav a:eq(1)").click(function(){
		timerStop();

		$("#work .bottomContent").css("zIndex", 40000);
		$("#contact .bottomContent").css("zIndex", 50000);

		$("#work h1, #work .topContent p, #work ul > li > a, #work .bottomContent dl").css("opacity",0);
		$("#middle").css("opacity",1);


		$("#middle").css("left",-100+"%");

		$("#middle").animate({left:0},200);


		$("#contact h1").delay(1000).animate({opacity:1},1000);
		$("#contact .topContent p").delay(2000).animate({opacity:1},1000);
		$("#contact ul li").delay(3000).animate({opacity:1},1000);
		$("#contact .bottomContent p").delay(4000).animate({opacity:1},1000);

		$("#about .topContent").addClass("toTheLeft");
		$("#about .bottomContent").addClass("toTheRight");

		$(".workTopBg").removeClass("contactSlide");
		$(".workBtmBg").removeClass("contactSlide");
		$(".workMiddleBg").removeClass("contactSlide");

		$("#contact .topContent").addClass("toTheLeftOff");
		$("#contact .bottomContent").addClass("toTheRightOff");

		$(".contactBtmBg").addClass("contactSlide");
		$(".contactTopBg > span").addClass("contactSlideRight");

		$("#work .topContent").removeClass("toTheLeftOff");
		$("#work .bottomContent").removeClass("toTheRightOff");
		$("#work .middleContent").removeClass("toTheLeftOff");

		$("#work .topContent").addClass("toTheLeft");
		$("#work .bottomContent").addClass("toTheRight");
		$("#work .middleContent").addClass("toTheLeft");


		

		return false;
	});




	
	// // work list 클릭시
	
	// $("#work .bottomContent ul li > a").click(function(){
	// 	$(this).parent().siblings().find(">a").removeClass("selected");
	// 	$(this).addClass("selected");

	// 	var listNum = $(this).parent().index();

	// 	$(".handler .mouse").eq(listNum).siblings().removeClass("active");
	// 	$(".handler .mouse").eq(listNum).addClass("active");

	// 	$(".devices .laptop > div, .devices .pad > div, .devices .mobile > div").removeClass();

	// 	$(".devices .laptop > div").addClass("lapPosition"+listNum);
	// 	$(".devices .pad > div").addClass("padPosition"+listNum);
	// 	$(".devices .mobile > div").addClass("mobilePosition"+listNum);

	// 	$("#work .forRel > div").removeClass();
	// 	$("#work .forRel > div").addClass("liPosition"+listNum);


	// 	return false;
	// });



	// var auto;
	// var current = 0;
	// var listNum = $("#banner > ul > li").length; 


	
	// $(".num").eq(current).addClass("numOn");
	// $(".next").click(function(){

	// 	$("#banner > ul > li")
	// 		.eq(current).css("left","0").stop().animate({left:"-100%"},800)
	// 		.next().css("left","100%").stop().animate({left:"0"},800);

	// 	current++; 
	// 	$(".num").eq(current).addClass("numOn").siblings().removeClass("numOn");

	// 	if(current>listNum-1) {
	// 		current = 0;
	// 		$("#banner > ul > li")
	// 		.eq(current).css("left","100%").stop().animate({left:"0"},800);
	// 		$(".num").eq(current).addClass("numOn").siblings().removeClass("numOn");
	// 	}
	// 	return false;
	// });









	// touch swipe

     
      //Enable swiping...

	var count = 0;



    $(".workMiddleBg").swipe( {
        //Generic swipe handler for all directions
       
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
        	

        	$("#work .bottomContent ul li").eq(count).siblings().find(">a").removeClass("selected");
			$(".handler .mouse").eq(count).siblings().removeClass("active");


			$("#work .bottomContent ul li").eq(count).find(">a").addClass("selected");
			$("#work .mouse").eq(count).addClass("active");


        	$(".handler .mouse").eq(count).siblings().removeClass("active");
			$(".handler .mouse").eq(count).addClass("active");

			$(".devices .laptop > div, .devices .pad > div, .devices .mobile > div").removeClass();

			$(".devices .laptop > div").addClass("lapPosition"+count);
			$(".devices .pad > div").addClass("padPosition"+count);
			$(".devices .mobile > div").addClass("mobilePosition"+count);

			$("#work .forRel > div").removeClass();
			$("#work .forRel > div").addClass("liPosition"+count);

			count++;

			if(count>8) {
				count = 0;
				
			}
	
   //      },

   //      swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
   //      	count = 6;
			
   //      	$("#work .bottomContent ul li").eq(count).siblings().find(">a").removeClass("selected");
			// $(".handler .mouse").eq(count).siblings().removeClass("active");


			// $("#work .bottomContent ul li").eq(count).find(">a").addClass("selected");
			// $("#work .mouse").eq(count).addClass("active");


   //      	$(".handler .mouse").eq(count).siblings().removeClass("active");
			// $(".handler .mouse").eq(count).addClass("active");

			// $(".devices .laptop > div, .devices .pad > div, .devices .mobile > div").removeClass();

			// $(".devices .laptop > div").addClass("lapPosition"+count);
			// $(".devices .pad > div").addClass("padPosition"+count);
			// $(".devices .mobile > div").addClass("mobilePosition"+count);

			// $("#work .forRel > div").removeClass();
			// $("#work .forRel > div").addClass("liPosition"+count);

			// count--;
			
			// if(count<0) {
			// 	count = 6;
				
			// }
	


        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold: 0
      });

	
	// mouse 클릭시

	$("#work .mouse").click(function(){
		count = $(this).index();
		var thisIndex = $("#work .mouse.active").index();

		$(this).siblings().removeClass("active");
		$(this).addClass("active");

		$("#work .bottomContent ul li").eq(count).siblings().find(">a").removeClass("selected");
		$("#work .bottomContent ul li").eq(count).find(">a").addClass("selected");

		$(".devices .laptop > div, .devices .pad > div, .devices .mobile > div").removeClass();

		$(".devices .laptop > div").addClass("lapPosition"+count);
		$(".devices .pad > div").addClass("padPosition"+count);
		$(".devices .mobile > div").addClass("mobilePosition"+count);

		$("#work .forRel > div").removeClass();
		$("#work .forRel > div").addClass("liPosition"+count);
		

		return false;
	});


	// work list 클릭시
	
	$("#work .bottomContent ul li > a").click(function(){
		$(this).parent().siblings().find(">a").removeClass("selected");
		$(this).addClass("selected");

		count = $(this).parent().index();

		$(".handler .mouse").eq(count).siblings().removeClass("active");
		$(".handler .mouse").eq(count).addClass("active");

		$(".devices .laptop > div, .devices .pad > div, .devices .mobile > div").removeClass();

		$(".devices .laptop > div").addClass("lapPosition"+count);
		$(".devices .pad > div").addClass("padPosition"+count);
		$(".devices .mobile > div").addClass("mobilePosition"+count);

		$("#work .forRel > div").removeClass();
		$("#work .forRel > div").addClass("liPosition"+count);


		return false;
	});


	// 	$("#work .mouse").click(function(){
	// 	count = $(this).index();
	// 	var thisIndex = $("#work .mouse.active").index();

	// 	$(this).siblings().removeClass("active");
	// 	$(this).addClass("active");

	// 	if () {
	// 		$("#work .bottomContent ul li").eq(thisIndex).siblings().find(">a").removeClass("selected");
	// 		$("#work .bottomContent ul li").eq(thisIndex).find(">a").addClass("selected");

	// 		$(".devices .laptop > div, .devices .pad > div, .devices .mobile > div").removeClass();

	// 		$(".devices .laptop > div").addClass("lapPosition"+thisIndex);
	// 		$(".devices .pad > div").addClass("padPosition"+thisIndex);
	// 		$(".devices .mobile > div").addClass("mobilePosition"+thisIndex);

	// 		$("#work .forRel > div").removeClass();
	// 		$("#work .forRel > div").addClass("liPosition"+thisIndex);
		
	// 	} else if () {

	// 		$("#work .bottomContent ul li").eq(thisIndex).siblings().find(">a").removeClass("selected");
	// 		$("#work .bottomContent ul li").eq(thisIndex).find(">a").addClass("selected");

	// 		$(".devices .laptop > div, .devices .pad > div, .devices .mobile > div").removeClass();

	// 		$(".devices .laptop > div").addClass("lapPosition"+thisIndex);
	// 		$(".devices .pad > div").addClass("padPosition"+thisIndex);
	// 		$(".devices .mobile > div").addClass("mobilePosition"+thisIndex);

	// 		$("#work .forRel > div").removeClass();
	// 		$("#work .forRel > div").addClass("liPosition"+thisIndex);

	// 	}

	// 	return false;
	// });


	// $(".num").click(function(){
	// 	current = $(this).index();
	// 	var onIndex = $(".num.numOn").index();

	// 	if (current<onIndex) { 
	// 		$("#banner > ul > li").eq(onIndex).css("left","0").animate({left:"100%"},800);
	// 		$("#banner > ul > li").eq(current).css("left","-100%").animate({left:"0"},800);
	// 		$(this).addClass("numOn").siblings().removeClass("numOn");

	// 	} else if (current>onIndex) { 
	// 		$("#banner > ul > li").eq(onIndex).css("left","0").animate({left:"-100%"},800);
	// 		$("#banner > ul > li").eq(current).css("left","100%").animate({left:"0"},800);
	// 		$(this).addClass("numOn").siblings().removeClass("numOn");
	// 	} 

	// 	return false;
	// });









	// 로딩시 기본 세팅

	// if( $(window).width() < 2000 ) {
	// 		$(".seeMore").show();
	// 	} else { 
	// 		$(".seeMore").hide();
	// 	}

	

	$(window).resize(function(){
		var wWidth = $(window).width();
		// if( wWidth < 2000 ) {
		// 	$(".seeMore").show();
		// } else { 
		// 	$(".seeMore").hide();
		// }

		if ( wWidth < 767 ) {
			timerStop();
		} else {
			timer();
		}
	});

});