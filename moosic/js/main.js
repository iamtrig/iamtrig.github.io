$(document).ready(function(){

			for (var i = 0; i < 4; i++) {
				$(".ifSearched ol > li").find(">a").eq(i).css({"marginLeft":13*i+"%"});
				$("#faq ol > li").find(">a").eq(i).css({"marginLeft":13*i+"%"});
				$("#news .firstOl > li").find(">a").eq(i).css({"marginLeft":13*i+"%"});

			}


			$("#header h2 a").click(function(){
				$(this).hide();
				$("#header h3 a").show();
				$("#nav ul").slideDown();

				return false;
			});

			$("#header h3 a").click(function(){
				$(this).hide();
				$("#header h2 a").show();
				$("#nav ul").slideUp();

				return false;
			});


			$("#nav ul li:eq(0) > a").click(function(){
				$(this).parent().find("form").toggleClass("showAndHide");
				return false;
			});


			$(".ifSearched ol li.numbers > a").click(function(){
				$(this).parent().siblings("li.numbers").find(">a").css("backgroundColor","#CC73E9");
				$(this).css("backgroundColor","#BA3194");
				$(this).parent().find("ul").show();
				$(this).parent().siblings("li").find("ul").hide();

				return false;
			});

			$(".ifSearched .play").click(function(){
				
				$(this).next(".pause").show();
				$(this).hide();

				return false;
			});

			$(".ifSearched .pause").click(function(){
				$(this).hide();
				$(this).prev(".play").show();
				

				return false;
			});

			$(".ifSearched .closeBtnInMusic a").click(function(){
				$(".ifSearched").slideUp(500);
				$(".mainMusicDeco").animate({marginTop:"0"},400);
				$(".aboutUsFullWidth").animate({top:"3475px"},400);
				return false;
			});


		if ($(window).width()>721) {
			
			var auto;
			var current = 0;
			var listNum = $("#mainMusic > ul > li").length; 

			for(var e = 0; e < listNum; e++) {
					$("#mainMusic > ul > li").eq(e).css("left",(e*100)+"%");
			}

			$("#mainMusic .leftRight a.right").click(function(){

					$("#mainMusic > ul > li")
						.eq(current).css("left","0").stop().animate({left:"-100%"},600)
						.next().css("left","100%").stop().animate({left:"0"},600);

					current++; //current = current+1;
					

					if(current>listNum-1) {
						current = 0;
						$("#mainMusic > ul > li")
						.eq(current).css("left","100%").stop().animate({left:"0"},600);
						
					}
					return false;
				});

			$("#mainMusic .leftRight a.left").click(function(){

					$("#mainMusic > ul > li")
						.eq(current).css("left","0").stop().animate({left:"100%"},600)
						.prev().css("left","-100%").stop().animate({left:"0"},600);

					current--; //current = current+1;
					

					if(current < 0) {
						current = listNum-1;
						$("#mainMusic > ul > li")
						.eq(current).css("left","-100%").stop().animate({left:"0"},600);
					
					}
					return false;
				});

			function autoClick() {
					$("#mainMusic .leftRight a.right").trigger("click");
				}

				// 타이머 실행
				function timer() {
					auto = setInterval(function(){autoClick()},4000);
				}

				// 타이머 정지(제거)
				function timerStop() {
					clearInterval(auto);
				}

				timer();

				$("#mainMusic > ul > li").mouseenter(function(){
				timerStop();

				});

				$("#mainMusic > ul > li").mouseleave(function(){
				timer();

				});


			} else {
				var auto;
				var current = 0;
				var listNum = $("#mainMusic > ul > li").length; 

				for(var e = 0; e < listNum; e++) {
						$("#mainMusic > ul > li").eq(e).css("left",(e*100)+"%");
				}

				$("#mainMusic .leftRight a.right").click(function(){

						$("#mainMusic > ul > li")
							.eq(current).css("left","0").stop().animate({left:"-100%"},600)
							.next().css("left","100%").stop().animate({left:"0"},600);

						current++; //current = current+1;
						

						if(current>listNum-1) {
							current = 0;
							$("#mainMusic > ul > li")
							.eq(current).css("left","100%").stop().animate({left:"0"},600);
							
						}
						return false;
					});

				$("#mainMusic .leftRight a.left").click(function(){

						$("#mainMusic > ul > li")
							.eq(current).css("left","0").stop().animate({left:"100%"},600)
							.prev().css("left","-100%").stop().animate({left:"0"},600);

						current--; //current = current+1;
						

						if(current < 0) {
							current = listNum-1;
							$("#mainMusic > ul > li")
							.eq(current).css("left","-100%").stop().animate({left:"0"},600);
						
						}
						return false;
					});
			}

			




			$("#mainMusic .play a").click(function(){
				// $(this).parent().find(".play").css("opacity",1);
				$(this).parent().parent().find(".audioTool a").animate({marginLeft:"100%"},30000);

				return false;
			});

			$("#mainMusic .albumCover").click(function(){
				$(this).parent().siblings().find("dl").hide();
				$(this).siblings("dl").show();

				return false;
			});


			$("#news .firstOl > li > a").click(function(){
				$(this).css("backgroundColor","#BA3194");
				$(this).parent().siblings().find(">a").css("backgroundColor","#CC73E9");
				$(this).parent().siblings().find("ol").hide();
				$(this).parent().find("ol").show();
				return false;
			});


			$("#news .firstOl li:first-child ol li:first-child").find(".date").css({"display":"block"});
			$("#news .firstOl li:first-child ol li:first-child").find("dl .descrip").css("padding","10px 0").slideDown(300);
			
			$("#news .firstOl li:first-child ol li:first-child").find(".seeMore").slideDown(300);
			$("#news .firstOl ol li").css("cursor","pointer");
			$("#news .firstOl ol li:first-child").css("cursor","default");

			$("#news .firstOl ol li").click(function(){
				$(this).siblings().css("cursor","pointer");

				$(this).css("cursor","defualt");
				$(this).find(".date").slideDown(300);
				$(this).find("dl .descrip").css("padding","10px 0").slideDown(300);
				$(this).find(".newsPic").slideDown(300);
				$(this).find(".seeMore").slideDown(300);


				$(this).siblings().find(".date").css({"display":"block","marginTop":"0"});
				$(this).siblings().find("dl .descrip").hide();
				$(this).siblings().find(".newsPic").hide();
				$(this).siblings().find(".seeMore").hide();

				return false;

			});

			$("#faq ol > li > a").click(function(){
				$(this).parent().siblings().find(">a").css("backgroundColor","#CC73E9");
				$(this).css("backgroundColor","#BA3194");
				$(this).parent().siblings().find("dl").hide();
				$(this).parent().find("dl").show();
				return false;
			});

			$("#faq ol > li dl dt").click(function(){
				$(this).siblings("dt").find(">a").css("color","#CC73E9");
				$(this).find("a").css("color","#BA3194");
				$(this).siblings("dt").find("a .arrowRight").css("backgroundPosition","top left");
				$(this).find("a .arrowRight").css("backgroundPosition","center center");
				$(this).siblings("dd").slideUp();
				$(this).next().slideDown();
				return false;
			});


			$(".subMusicNext a:eq(0)").click(function(){
				$(this).hide();
				$(this).siblings().show();
				$("#subNav ul").animate({left:"-250px"},400);
				return false;
			});

			$(".subMusicNext a:eq(1)").click(function(){
				$(this).hide();
				$(this).siblings().show();
				$("#subNav ul").animate({left:"0"},400);
				return false;
			});

	
		var getHeaderHeight = $('#nav').outerHeight();
		var lastScrollPosition = 0;

// mainMenu
		$(window).scroll(function() {
			var currentScrollPosition = $(window).scrollTop();

			if ($(window).width() > 1000) {
				$("#nav").show();

				if($(window).scrollTop() > getHeaderHeight) {
					$("#nav").show();
					$("#nav").css("position","fixed");
					$("#nav, #nav ul .forAb").css({"zIndex":"1000","paddingTop":"10px","paddingBottom":"10px","backgroundColor": "#001329","transition":"0.5s"});
					$("#logIn").css("top","50px");
					if (currentScrollPosition < lastScrollPosition) {
						$("#nav").css({"top":"-40px"});
						
					} else {
						$("#nav").css({"top":"0"});
						$("#nav, #nav ul .forAb").css({"zIndex":"1000","paddingTop":"10px","paddingBottom":"10px","backgroundColor": "#001329","transition":"0.5s"});

					}
					lastScrollPosition = currentScrollPosition;
				} else {
					$("#logIn").css("top","135px");
					$("#nav, #nav ul .forAb").css({"zIndex":1000,"paddingTop":"100px","paddingBottom":"0","backgroundColor":"transparent","transition":"0.5s"});

				}



			} else if ($(window).width() < 1000) {
				$("#nav, #nav ul .forAb").css({"paddingTop":"0","paddingBottom":"0","backgroundColor":"transparent","transition":"0.5s"});
			}

		});
		
	
	if ($(window).width() <= 400 ) {


		$(".subInMusic input").click(function(){
			$(".ifSearched").slideDown(500);
			$(".ifSearched ol li:first-child ul").show();
			return false;
		});

		$(".ifSearched ol li ul li").css("cursor","pointer");
		$(".ifSearched ol li ul li:first-child").css("cursor","default");

		$(".ifSearched ol li ul li").click(function(){

				$(this).css({"paddingTop":"10px","height":"120px","cursor":"default"});
				$(this).find("dl").css({"marginLeft":"20px","float":"left"});
				$(this).find("dl dt").show();
				$(this).find(".get").css({"position":"static","marginRight":"9px","float":"left","marginTop":"10px"});
				$(this).find("dl .save").css({"display":"inline-block","marginTop":"10px"});
				$(this).find("dl .gift").css({"display":"inline-block","marginTop":"10px","marginLeft":"4px"});
				$(this).find(".albumCover").css("float","left").show();
				$(this).find(".play").css({"top":"40px","right":"auto","left":"6%"});
				$(this).find(".pause").css({"top":"40px","right":"auto","left":"6%"});
				$(this).find(".play img").css({"width":"60px"});
				$(this).find(".pause img").css({"width":"60px"});
				

			
				$(this).siblings("li").css({"paddingTop":"10px","height":"55px","cursor":"pointer"});
				// $(this).prev("li").css({"borderBottom":"0 none","borderTop":"0 none"});
				// $(this).prev("li").css("borderTop","3px solid #001329");
				$(this).siblings("li").find("dl").css({"marginLeft":"0","float":"left","width":"50%"})
				$(this).siblings("li").find("dl dt").hide();
				$(this).siblings("li").find(".get").css({"position":"absolute","marginRight":"0","float":"none","marginTop":"0"});
				$(this).siblings("li").find("dl .save").hide();
				$(this).siblings("li").find("dl .gift").hide();
				$(this).siblings("li").find(".albumCover").hide();
				$(this).siblings("li").find(".play").css({"top":"17px","right":"0","left":"auto"});
				$(this).siblings("li").find(".pause").css({"top":"17px","right":"0","left":"auto"});
				$(this).siblings("li").find(".play img").css({"width":"30px"});
				$(this).siblings("li").find(".pause img").css({"width":"30px"});

				return false;

			});


	} else {

			$(".play, .pause, .prev, .forward").css("opacity","0.5");
			$(".play, .pause, .prev, .forward").mouseenter(function(){
				$(this).css({"transition":"0.3s","opacity":"1"});
			});
			$(".play, .pause, .prev, .forward").mouseleave(function(){
				$(this).css({"transition":"0.3s","opacity":"0.5"});
			});


			$(".subInMusic input").click(function(){
				$(".ifSearched").slideDown(500);
				$(".ifSearched ol li:first-child ul").show();
				$(".mainMusicDeco").animate({marginTop:"600px"},400);
				$(".aboutUsFullWidth").animate({top:"4075px"},400);
				return false;
			});

			$(".ifSearched ol li ul li").css("cursor","pointer");
			$(".ifSearched ol li ul li:first-child").css("cursor","default");
			$(".ifSearched ol li ul li").click(function(){

				$(this).css({"paddingTop":"10px","height":"120px","cursor":"default"});
				$(this).find("dl").css({"marginLeft":"20px","float":"left"});
				$(this).find("dl dt").show();
				$(this).find(".get").css({"position":"static","marginRight":"9px","float":"left","marginTop":"10px"});
				$(this).find("dl .save").css({"display":"inline-block","marginTop":"10px"});
				$(this).find("dl .gift").css({"display":"inline-block","marginTop":"10px","marginLeft":"4px"});
				$(this).find(".albumCover").css("float","left").show();
				$(this).find(".play").css({"top":"35px"});
				$(this).find(".pause").css({"top":"35px"});
				$(this).find(".play img").css({"width":"60px"});
				$(this).find(".pause img").css({"width":"60px"});
				

			
				$(this).siblings("li").css({"paddingTop":"10px","height":"55px","cursor":"pointer"});
				// $(this).prev("li").css({"borderBottom":"0 none","borderTop":"0 none"});
				// $(this).prev("li").css("borderTop","3px solid #001329");
				$(this).siblings("li").find("dl").css({"marginLeft":"0","float":"left","width":"50%"})
				$(this).siblings("li").find("dl dt").hide();
				$(this).siblings("li").find(".get").css({"position":"absolute","marginRight":"0","float":"none","marginTop":"0"});
				$(this).siblings("li").find("dl .save").hide();
				$(this).siblings("li").find("dl .gift").hide();
				$(this).siblings("li").find(".albumCover").hide();
				$(this).siblings("li").find(".play").css({"top":"17px"});
				$(this).siblings("li").find(".pause").css({"top":"17px"});
				$(this).siblings("li").find(".play img").css({"width":"30px"});
				$(this).siblings("li").find(".pause img").css({"width":"30px"});

				return false;

			});






			
	}

});