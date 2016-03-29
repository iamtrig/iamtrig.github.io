$(document).ready(function(){
				$("#wrapper").css("opacity",0);
				$("#banner .testi, #banner .groupping, #banner .btns").hide();
				$(".pagination a").hide();
				$("#wrapper").animate({"opacity":1}, 1000);
				$("#banner .testi").delay(1000).fadeIn(2000);
				$("#banner .groupping").delay(1700).slideDown(2000);
				$("#banner .btns").delay(2800).fadeIn(3000);
				$(".pagination a").delay(2800).fadeIn(1000);


				var current = 0;

				$("#banner .pagination a").click(function(){
					current = $(this).index();
					
					$("#banner .forAb > div").fadeOut(10);
					$("#banner .forAb > div").eq(current).fadeIn(500);
					
					$("#header nav a").eq(current).siblings().removeClass("activeNav")
					$("#header nav a").eq(current).addClass("activeNav");
					
					$(this).siblings().removeClass("activeRed");
					$(this).addClass("activeRed");

					if (current == 0) {
							$("#banner .testi, #banner .groupping, #banner .btns").hide();
							$("#wrapper").animate({"backgroundPositionY":"15%"},800);
							$("#banner .testi").delay(500).fadeIn(1700);
							$("#banner .groupping").delay(1000).slideDown(2000);
							$("#banner .btns").delay(2000).fadeIn(3000);
						} else if (current == 1) {
							$(".modelsBanner dl dt, .modelsBanner ol li, .modelsBanner .btns").hide();
							$("#wrapper").animate({"backgroundPositionY":"43%"},800);
							$(".modelsBanner dl dt").delay(500).fadeIn(1000);
							$(".modelsBanner .btns").delay(1100).slideDown(500);
							$(".modelsBanner ol li").delay(1000).fadeIn(1300);
						} else if (current == 2 ) {
							$(".newsBanner dl dt, .newsBanner ul li, .newsBanner .btns").hide();
							$("#wrapper").animate({"backgroundPositionY":"72%"},800);
							$(".newsBanner dl dt").delay(500).fadeIn(1000);
							$(".newsBanner .btns").delay(700).slideDown(500);
							$(".newsBanner ul li").delay(1000).fadeIn(1300);
						} else if (current == 3) {
							$(".contactBanner .map, .contactBanner dl dt, .contactBanner dl dd").hide();
							$("#wrapper").animate({"backgroundPositionY":"95%"},800);
							$(".contactBanner .map").delay(500).fadeIn(1000);
							$(".contactBanner dl dt").delay(1000).slideDown(500);
							$(".contactBanner dl dd").delay(1000).fadeIn(1300);
						} else {

						}
						
					// if ($.browser.mozilla) {      

					//      if (current == 0) {
					// 		$("#banner .testi, #banner .groupping, #banner .btns").hide();
					// 		$("#wrapper").css({"background-position":"top 15%", '-moz-transition':"all 1500ms ease"});
					// 		$("#banner .testi").delay(500).fadeIn(1700);
					// 		$("#banner .groupping").delay(1000).slideDown(2000);
					// 		$("#banner .btns").delay(2000).fadeIn(3000);
					// 	} else if (current == 1) {
					// 		$(".modelsBanner dl dt, .modelsBanner ol li, .modelsBanner .btns").hide();
					// 		$("#wrapper").css({"background-position":"top 43%", '-moz-transition':"all 1500ms ease"});
					// 		$(".modelsBanner dl dt").delay(500).fadeIn(1000);
					// 		$(".modelsBanner .btns").delay(1100).slideDown(500);
					// 		$(".modelsBanner ol li").delay(1000).fadeIn(1300);
					// 	} else if (current == 2 ) {
					// 		$(".newsBanner dl dt, .newsBanner ul li, .newsBanner .btns").hide();
					// 		$("#wrapper").css({"background-position":"top 43%", '-moz-transition':"all 1500ms ease"});
					// 		$(".newsBanner dl dt").delay(500).fadeIn(1000);
					// 		$(".newsBanner .btns").delay(700).slideDown(500);
					// 		$(".newsBanner ul li").delay(1000).fadeIn(1300);
					// 	} else if (current == 3) {
					// 		$(".contactBanner .map, .contactBanner dl dt, .contactBanner dl dd").hide();
					// 		$("#wrapper").css({"background-position":"top 43%", '-moz-transition':"all 1500ms ease"});
					// 		$(".contactBanner .map").delay(500).fadeIn(1000);
					// 		$(".contactBanner dl dt").delay(1000).slideDown(500);
					// 		$(".contactBanner dl dd").delay(1000).fadeIn(1300);
					// 	} else {

					// 	}
					//   } else {
					//      if (current == 0) {
					// 		$("#banner .testi, #banner .groupping, #banner .btns").hide();
					// 		$("#wrapper").animate({"backgroundPositionY":"15%"},800);
					// 		$("#banner .testi").delay(500).fadeIn(1700);
					// 		$("#banner .groupping").delay(1000).slideDown(2000);
					// 		$("#banner .btns").delay(2000).fadeIn(3000);
					// 	} else if (current == 1) {
					// 		$(".modelsBanner dl dt, .modelsBanner ol li, .modelsBanner .btns").hide();
					// 		$("#wrapper").animate({"backgroundPositionY":"43%"},800);
					// 		$(".modelsBanner dl dt").delay(500).fadeIn(1000);
					// 		$(".modelsBanner .btns").delay(1100).slideDown(500);
					// 		$(".modelsBanner ol li").delay(1000).fadeIn(1300);
					// 	} else if (current == 2 ) {
					// 		$(".newsBanner dl dt, .newsBanner ul li, .newsBanner .btns").hide();
					// 		$("#wrapper").animate({"backgroundPositionY":"72%"},800);
					// 		$(".newsBanner dl dt").delay(500).fadeIn(1000);
					// 		$(".newsBanner .btns").delay(700).slideDown(500);
					// 		$(".newsBanner ul li").delay(1000).fadeIn(1300);
					// 	} else if (current == 3) {
					// 		$(".contactBanner .map, .contactBanner dl dt, .contactBanner dl dd").hide();
					// 		$("#wrapper").animate({"backgroundPositionY":"95%"},800);
					// 		$(".contactBanner .map").delay(500).fadeIn(1000);
					// 		$(".contactBanner dl dt").delay(1000).slideDown(500);
					// 		$(".contactBanner dl dd").delay(1000).fadeIn(1300);
					// 	} else {

					// 	}
					//  }

					
					
					return false;
				});

				// function autoClick() {
				// 	$("#banner .pagination a").trigger("click");
				// }
				// function timer() {
				// 	auto = setInterval(function(){autoClick()},3000);
				// }
				// timer();





				// #models

				// male female 버튼, #news year 버튼

				$(".modelsList > li > a, .newsList > li > a").click(function(){
					$(this).addClass("activeNav");
					$(this).parent().siblings("li").find(">a").removeClass("activeNav");

					$(this).parent().siblings().find(">ul").hide();
					$(this).parent().find(">ul").fadeIn(500);
					return false;
				});

				// 더보기 버튼

				$(".modelsList .seeMore > a").click(function(){
					$(this).hide();
					$(this).parent().find("ul").slideDown(1000);
					return false;
				});



				// #news 
			
				for (var i = 0; i < $(".newsList > li").length; i++) {
					if ($(window).width() <= 500 ) {
						$(".newsList > li > a").eq(i).css("marginLeft",(i*45)+"px");
					} else {
						$(".newsList > li > a").eq(i).css("marginLeft",(i*60)+"px");
					}
					
				}


				// 메뉴

				$("#header h2 a").click(function(){
					$("nav.arial").addClass("navOn");
					return false;
				});	
				
				$("#header h3 a").click(function(){
					$("nav.arial").removeClass("navOn");
					return false;
				});	


			});