
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

		$(".deviceBg").delay(2000).animate({opacity:1, bottom:-23+"%"},2000);


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



	
	// work list 클릭시
	
	$("#work .bottomContent ul li > a").click(function(){
		$(this).parent().siblings().find(">a").removeClass("selected");
		$(this).addClass("selected");

		var listNum = $(this).parent().index();

		$(".handler .mouse").eq(listNum).siblings().removeClass("active");
		$(".handler .mouse").eq(listNum).addClass("active");

		if ( listNum == 0 ) {
	
			$(".devices .laptop .imgBg").removeClass("lapUcompany lapSendFaster lapMoosic lapRosie lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padUcompnay padSendFaster padMoosic padRosie padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileUcompany mobileSendFaster mobileMoosic mobileRosie mobileLorem mobileWeather");

			$(".devices .laptop .imgBg").addClass("lapNoCoy");
			$(".devices .pad .imgBg").addClass("padNoCoy");
			$(".devices .mobile .imgBg").addClass("mobileNoCoy");

			$("#work .forAb").removeClass("listUcompany listSendFaster listMoosic listRosie listLorem listWeather")

			$("#work .forAb").addClass("listNoCoy");
	

		} else if ( listNum == 1 ) {
			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapSendFaster lapMoosic lapRosie lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padSendFaster padMoosic padRosie padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileSendFaster mobileMoosic mobileRosie mobileLorem mobileWeather");

			$(".devices .laptop .imgBg").addClass("lapUcompany");
			$(".devices .pad .imgBg").addClass("padUcompnay");
			$(".devices .mobile .imgBg").addClass("mobileUcompany");

			$("#work .forAb").removeClass("listNoCoy listSendFaster listMoosic listRosie listLorem listWeather")

			$("#work .forAb").addClass("listUcompany");

		} else if ( listNum == 2 ) {
			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapMoosic lapRosie lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padMoosic padRosie padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileMoosic mobileRosie mobileLorem mobileWeather");

			$(".devices .laptop .imgBg").addClass("lapSendFaster");
			$(".devices .pad .imgBg").addClass("padSendFaster");
			$(".devices .mobile .imgBg").addClass("mobileSendFaster");

			$("#work .forAb").removeClass("listNoCoy listUcompany listMoosic listRosie listLorem listWeather")

			$("#work .forAb").addClass("listSendFaster");

		} else if ( listNum == 3 ) {
			
			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapRosie lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padRosie padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileRosie mobileLorem mobileWeather");

			$(".devices .laptop .imgBg").addClass("lapMoosic");
			$(".devices .pad .imgBg").addClass("padMoosic");
			$(".devices .mobile .imgBg").addClass("mobileMoosic");

			$("#work .forAb").removeClass("listNoCoy listUcompany listSendFaster listRosie listLorem listWeather")

			$("#work .forAb").addClass("listMoosic");

		} else if ( listNum == 4 ) {
			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapMoosic lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padMoosic padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileMoosic mobileLorem mobileWeather");
	
			
			$(".devices .laptop .imgBg").addClass("lapRosie");
			$(".devices .pad .imgBg").addClass("padRosie");
			$(".devices .mobile .imgBg").addClass("mobileRosie");

			$("#work .forAb").removeClass("listNoCoy listUcompany listSendFaster listMoosic listLorem listWeather")

			$("#work .forAb").addClass("listRosie");

		} else if ( listNum == 5 ) {

			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapMoosic lapRosie padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padMoosic padRosie padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileMoosic mobileRosie mobileWeather");
	
			
			$(".devices .laptop .imgBg").addClass("lapLorem");
			$(".devices .pad .imgBg").addClass("padLorem");
			$(".devices .mobile .imgBg").addClass("mobileLorem");

			$("#work .forAb").removeClass("listNoCoy listUcompany listSendFaster listMoosic listRosie listWeather")

			$("#work .forAb").addClass("listLorem");
		} else if ( listNum == 6 ) {

			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapMoosic lapRosie lapLorem padLorem");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padMoosic padRosie padLorem");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileMoosic mobileRosie mobileLorem");
	
			$(".devices .laptop .imgBg").addClass("lapWeather");
			$(".devices .pad .imgBg").addClass("padWeather");
			$(".devices .mobile .imgBg").addClass("mobileWeather");

			$("#work .forAb").removeClass("listNoCoy listUcompany listSendFaster listMoosic listRosie listLorem")

			$("#work .forAb").addClass("listWeather");
		}


		return false;
	});
	
	
	// mouse 클릭시

	$("#work .mouse").click(function(){
		var thisIndex = $(this).index();

		$(this).siblings().removeClass("active");
		$(this).addClass("active");

		if ( thisIndex == 0 ) {
			
			$("#work .bottomContent ul li").eq(0).siblings().find(">a").removeClass("selected");
			$("#work .bottomContent ul li").eq(0).find(">a").addClass("selected");

			$(".devices .laptop .imgBg").removeClass("lapUcompany lapSendFaster lapMoosic lapRosie lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padUcompnay padSendFaster padMoosic padRosie padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileUcompany mobileSendFaster mobileMoosic mobileRosie mobileLorem mobileWeather");

			$(".devices .laptop .imgBg").addClass("lapNoCoy");
			$(".devices .pad .imgBg").addClass("padNoCoy");
			$(".devices .mobile .imgBg").addClass("mobileNoCoy");

			$("#work .forAb").removeClass("listUcompany listSendFaster listMoosic listRosie listLorem listWeather")

			$("#work .forAb").addClass("listNoCoy");
	

		} else if ( thisIndex == 1 ) {
			$("#work .bottomContent ul li").eq(1).siblings().find(">a").removeClass("selected");
			$("#work .bottomContent ul li").eq(1).find(">a").addClass("selected");

			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapSendFaster lapMoosic lapRosie lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padSendFaster padMoosic padRosie padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileSendFaster mobileMoosic mobileRosie mobileLorem mobileWeather");

			$(".devices .laptop .imgBg").addClass("lapUcompany");
			$(".devices .pad .imgBg").addClass("padUcompnay");
			$(".devices .mobile .imgBg").addClass("mobileUcompany");

			$("#work .forAb").removeClass("listNoCoy listSendFaster listMoosic listRosie listLorem listWeather")

			$("#work .forAb").addClass("listUcompany");

		} else if ( thisIndex == 2 ) {

			$("#work .bottomContent ul li").eq(2).siblings().find(">a").removeClass("selected");
			$("#work .bottomContent ul li").eq(2).find(">a").addClass("selected");

			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapMoosic lapRosie lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padMoosic padRosie padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileMoosic mobileRosie mobileLorem mobileWeather");

			$(".devices .laptop .imgBg").addClass("lapSendFaster");
			$(".devices .pad .imgBg").addClass("padSendFaster");
			$(".devices .mobile .imgBg").addClass("mobileSendFaster");

			$("#work .forAb").removeClass("listNoCoy listUcompany listMoosic listRosie listLorem listWeather")

			$("#work .forAb").addClass("listSendFaster");

		} else if ( thisIndex == 3 ) {
			
			$("#work .bottomContent ul li").eq(3).siblings().find(">a").removeClass("selected");
			$("#work .bottomContent ul li").eq(3).find(">a").addClass("selected");

			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapRosie lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padRosie padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileRosie mobileLorem mobileWeather");

			$(".devices .laptop .imgBg").addClass("lapMoosic");
			$(".devices .pad .imgBg").addClass("padMoosic");
			$(".devices .mobile .imgBg").addClass("mobileMoosic");

			$("#work .forAb").removeClass("listNoCoy listUcompany listSendFaster listRosie listLorem listWeather")

			$("#work .forAb").addClass("listMoosic");

		} else if ( thisIndex == 4 ) {

			$("#work .bottomContent ul li").eq(4).siblings().find(">a").removeClass("selected");
			$("#work .bottomContent ul li").eq(4).find(">a").addClass("selected");

			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapMoosic lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padMoosic padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileMoosic mobileLorem mobileWeather");
	
			
			$(".devices .laptop .imgBg").addClass("lapRosie");
			$(".devices .pad .imgBg").addClass("padRosie");
			$(".devices .mobile .imgBg").addClass("mobileRosie");

			$("#work .forAb").removeClass("listNoCoy listUcompany listSendFaster listMoosic listLorem listWeather")

			$("#work .forAb").addClass("listRosie");

		} else if ( thisIndex == 5 ) {

			$("#work .bottomContent ul li").eq(5).siblings().find(">a").removeClass("selected");
			$("#work .bottomContent ul li").eq(5).find(">a").addClass("selected");

			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapMoosic lapRosie padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padMoosic padRosie padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileMoosic mobileRosie mobileWeather");
	
			
			$(".devices .laptop .imgBg").addClass("lapLorem");
			$(".devices .pad .imgBg").addClass("padLorem");
			$(".devices .mobile .imgBg").addClass("mobileLorem");

			$("#work .forAb").removeClass("listNoCoy listUcompany listSendFaster listMoosic listRosie listWeather")

			$("#work .forAb").addClass("listLorem");
		} else if ( thisIndex == 6 ) {

			$("#work .bottomContent ul li").eq(6).siblings().find(">a").removeClass("selected");
			$("#work .bottomContent ul li").eq(6).find(">a").addClass("selected");

			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapUcompany lapSendFaster lapMoosic lapRosie lapLorem padLorem");
			$(".devices .pad .imgBg").removeClass("padNoCoy padUcompnay padSendFaster padMoosic padRosie padLorem");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileUcompany mobileSendFaster mobileMoosic mobileRosie mobileLorem");
	
			$(".devices .laptop .imgBg").addClass("lapWeather");
			$(".devices .pad .imgBg").addClass("padWeather");
			$(".devices .mobile .imgBg").addClass("mobileWeather");

			$("#work .forAb").removeClass("listNoCoy listUcompany listSendFaster listMoosic listRosie listLorem")

			$("#work .forAb").addClass("listWeather");
		}


		return false;
	});

	
	// work 더보기 클릭시

	$(".seeMore").click(function(){
		$(this).toggleClass("seeMoreArrow");
		$("#work .bottomContent .forAb").toggleClass("seeMoreClass");

	});





	// touch swipe

	$(function() {      
      //Enable swiping...
      $(".workMiddleBg").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
         	$("#work .bottomContent ul li").eq(1).siblings().find(">a").removeClass("selected");
			$("#work .bottomContent ul li").eq(1).find(">a").addClass("selected");

			$(".devices .laptop .imgBg").removeClass("lapNoCoy lapSendFaster lapMoosic lapRosie lapLorem padLorem lapWeather");
			$(".devices .pad .imgBg").removeClass("padNoCoy padSendFaster padMoosic padRosie padLorem padWeather");
			$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileSendFaster mobileMoosic mobileRosie mobileLorem mobileWeather");

			$(".devices .laptop .imgBg").addClass("lapUcompany");
			$(".devices .pad .imgBg").addClass("padUcompnay");
			$(".devices .mobile .imgBg").addClass("mobileUcompany");

			$("#work .forAb").removeClass("listNoCoy listSendFaster listMoosic listRosie listLorem listWeather");

			$("#work .forAb").addClass("listUcompany");
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });
    });
  






	// $("#workMiddleBg .deviceBg").on("swipeleft", function(){

	// 		$("#work .bottomContent ul li").eq(1).siblings().find(">a").removeClass("selected");
	// 		$("#work .bottomContent ul li").eq(1).find(">a").addClass("selected");

	// 		$(".devices .laptop .imgBg").removeClass("lapNoCoy lapSendFaster lapMoosic lapRosie lapLorem padLorem lapWeather");
	// 		$(".devices .pad .imgBg").removeClass("padNoCoy padSendFaster padMoosic padRosie padLorem padWeather");
	// 		$(".devices .mobile .imgBg").removeClass("mobileNoCoy mobileSendFaster mobileMoosic mobileRosie mobileLorem mobileWeather");

	// 		$(".devices .laptop .imgBg").addClass("lapUcompany");
	// 		$(".devices .pad .imgBg").addClass("padUcompnay");
	// 		$(".devices .mobile .imgBg").addClass("mobileUcompany");

	// 		$("#work .forAb").removeClass("listNoCoy listSendFaster listMoosic listRosie listLorem listWeather");

	// 		$("#work .forAb").addClass("listUcompany");
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