
$(document).ready(function(){

	// 기본 세팅
	$("#contents section div.venusItself").css("top","100%");


	$("#contents section h1, #contents section > div, #contents section#teach ul, nav, header, footer, .containerBg").css("opacity",0);
	$("header").animate({opacity:1},800);
	$("nav").delay(800).animate({opacity:1},500);
	$("#contents section h1").delay(1300).animate({opacity:1},500);
	$("footer, .containerBg").delay(1800).animate({opacity:1},1000);
	$("#contents section .eachBg").delay(2800).animate({opacity:1},1000);
	$("#contents section div.venusBg").delay(2800).animate({opacity:1},1000);
	$("#contents section div.venusItself").delay(3200).animate({opacity:1, top: "23%"},2000);
	$("#contents section ul").delay(4900).animate({opacity:1},1000);


	



	// #teach list effect

	$("#teach ul li").css("opacity",0.3);
	function autoClick() {

		for (var i = 0; i < $(".deco div span").length; i++ ) {
			var ranNum = 1 + Math.floor(Math.random() * 30 );
			$(".deco div").eq(i).find("span").eq(ranNum).animate({opacity:0.1},500);
			$(".deco div").eq(i).find("span").eq(ranNum+5).animate({opacity:0.1},500);
			$(".deco div").eq(i).find("span").eq(ranNum-5).animate({opacity:0.1},500);
			$(".deco div").eq(i).find("span").eq(ranNum+11).animate({opacity:0.1},500);
			$(".deco div").eq(i).find("span").eq(ranNum-11).animate({opacity:0.1},500);

			$(".deco div").eq(i).find("span").delay(2000).eq(ranNum).animate({opacity:1},700);
			$(".deco div").eq(i).find("span").delay(2000).eq(ranNum+5).animate({opacity:1},700);
			$(".deco div").eq(i).find("span").delay(2000).eq(ranNum-5).animate({opacity:1},700);
			$(".deco div").eq(i).find("span").delay(2000).eq(ranNum+11).animate({opacity:1},700);
			$(".deco div").eq(i).find("span").delay(2000).eq(ranNum-11).animate({opacity:1},700);

		}

	}

	function timer() {
		auto = setInterval(function(){autoClick()},3000);
	}

	function timerStop() {
		clearInterval(auto);
	}

	timer();
	


	// rolling eyes


	function rollingEyes() {

		for (var t = 0; t < $("#teach ul li").length; t++ ) {
			$("#teach ul li").delay(1000).eq(t).siblings().animate({opacity: 0.3},700);
			$("#teach ul li").delay(1000).eq(t).animate({opacity: 1},700);


			if ( t == 0 ) {
				
				$(".venus span").delay(2200).eq(0).animate({top:"164px",left:"74px"}, 500);
				$(".venus span").eq(1).animate({top:"166px",right:"72px"}, 500);

			} else if ( t == 1 ) {
				
				$(".venus span").delay(2200).eq(0).animate({top:"166px",left:"71px"}, 500);
				$(".venus span").eq(1).animate({top:"168px",right:"75px"}, 500);

			} else if ( t == 2 ) {
			
				$(".venus span").delay(2200).eq(0).animate({top:"168px",left:"73px"}, 500);
				$(".venus span").eq(1).animate({top:"170px",right:"72px"}, 500);

			} else if ( t == 3 ) {
				
				$(".venus span").delay(2200).eq(0).animate({top:"164px",left:"82px"}, 500);
				$(".venus span").eq(1).animate({top:"166px",right:"63px"}, 500);

			} else if ( t == 4 ) {
			
				$(".venus span").delay(2200).eq(0).animate({top:"166px",left:"85px"}, 500);
				$(".venus span").eq(1).animate({top:"168px",right:"60px"}, 500);

			} else if ( t == 5 ) {
			
				$(".venus span").delay(2200).eq(0).animate({top:"168px",left:"82px"}, 500);
				$(".venus span").eq(1).animate({top:"170px",right:"62px"}, 500);

			}

		
		}
	}

	function letsRoll() {
		roll = setInterval(function(){rollingEyes()},4900);
	}

	function letsRollStop() {
		clearInterval(roll);
	}



	letsRoll();


	




	// hamburger 클릭시 메뉴

	$('.navDeco').click(function(){
		$(".navBg").toggleClass('navBack');
		$(this).toggleClass('open');
		$("header nav").toggleClass('navBack');
		if ($("#nav").hasClass('navOn')) {
			$("#nav").removeClass('navOn');
		} else {
			$("#nav").delay(500).addClass('navOn');
		}

		// timerStop();
		// letsRollStop();

		
	});


	$("#contents section#teach").mouseenter(function(){
		timer();
		letsRoll();
	});

	// #contents section h1 a 클릭시

	$("#contents section h1 a").click(function(){

		$(this).parent().parent().siblings().find("h1 a").removeClass("selected");
		$(this).addClass('selected');

		var thisIndex = $(this).parent().parent().index();

		$("#contents section").eq(thisIndex).siblings().css("zIndex",100);
		$("#contents section").eq(thisIndex).css("zIndex",100000);

		$(this).parent().parent().siblings().find(".eachBg").removeClass("top");
		$(this).parent().parent().find(".eachBg").addClass("top");

		if ( thisIndex == 0 ) { 
			
			timer();
			letsRoll();
		} else if ( thisIndex == 1 )  {

			// $(this).parent().parent().find(".eachBg").addClass("top");
			timerStop();
			letsRollStop();
		} else if ( thisIndex == 2 )  {

			// $(this).parent().parent().find(".eachBg").addClass("top");
			timerStop();
			letsRollStop();
		} else if ( thisIndex == 3)  {

			// $(this).parent().parent().find(".eachBg").addClass("top");
			timerStop();
			letsRollStop();
		}


		return false;
	});





});

