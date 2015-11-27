	$("h2.burger a").click(function(){
			$("#mainNav").show();
			return false;
		});

		$("#header p a").click(function(){
			$("#mainNav").hide();
			return false;
		});


		// 날씨종합 초기상태
		$(".timesWeather > li > ul").hide();
		$(".timesWeather > li:eq(1) > ul").show();
		$(".timesWeather > li:eq(1) > a").css("backgroundColor","#4f9bc5");
		$(".timesWeather > li:eq(1) > ul > li:eq(0)> a").css({"color":"#fff"});
		$(".timesWeather > li:eq(1) > ul > li:eq(0) > ul").show();







		$(".timesWeather > li").click(function(){

			if ($(this).hasClass("long")) {
				$(".map").css("height","600px");
				$(this).find(">a").css("backgroundColor","#4F9BC6");
				$(this).siblings().find(">a").css("backgroundColor","#84b9d8");
				$(this).find(">ul").show();
				$(this).siblings().find(">ul").hide();

				$(this).find(">ul>li:first-child>a").css("color","#fff");
				$(this).siblings().find(">ul>li:first-child>a").css("color","#4f9bc5");
				
				$(this).find(">ul>li").siblings().find("ul").hide();
				$(this).find(">ul>li:first-child>ul").show();

				$(this).find(">ul>li:first-child>ul>li").siblings().find(">a").css("color","#4f9bc5");
				$(this).find(">ul>li:first-child>ul>li:first-child>a").css("color","#fff");

				$(this).find(">ul>li").siblings().find("ul").hide();
				$(this).find("ul>li:first-child>ul").show();

			} else {

				$(".map").css("height","640px");
				$(this).find(">a").css("backgroundColor","#4F9BC6");
				$(this).siblings().find(">a").css("backgroundColor","#84b9d8");
				$(this).find(">ul").show();
				$(this).siblings().find(">ul").hide();

				$(this).find(">ul>li:first-child>a").css("color","#fff");
				$(this).siblings().find(">ul>li:first-child>a").css("color","#4f9bc5");
				
				$(this).find(">ul>li").siblings().find("ul").hide();
				$(this).find(">ul>li:first-child>ul").show();

			}

			return false;
		});



		$(".timesWeather > li:eq(3) > ul > li").click(function(){
			$(this).find(">ul>li").siblings().find(">a").css("color","#4f9bc5");
			$(this).find(">ul>li:first-child>a").css("color","#fff");

			$(this).find(">ul>li").siblings().find(">ul").hide();
			$(this).find(">ul>li:first-child>ul").show();
			return false;
		});




		// $(".timesWeather > li > ul > li > ul > li").click(function(){
		// 	$(this).siblings().find("ul").hide();
		// 	$(this).find(">ul").show();

		// 	return false;
		// });

		$(".timesWeather > li > ul dl dd").hide();

		$(".timesWeather > li > ul > li").click(function(){
			$(this).find(">a").css("color","#fff");
			$(this).siblings().find(">a").css("color","#4f9bc5")
			$(this).find("ul").show();
			$(this).find("ul dd").hide();
			$(this).siblings().find("ul").hide();
			return false;
		});

		$(".timesWeather > li > ul dl dt").click(function(){
			$(this).parent().find("dd").show();
			return false;
		});

		$(".timesWeather > li > ul dl dd").click(function(){
			$(this).hide();
			$(this).parent().find("dt").show();
			return false;
		});

		// $(".long > ul > li").click(function(){
		// 	$(this).find("ul").show();
		// 	$(this).siblings().find("ul").hide();
		// 	return false;
		// });

		// $(".long > ul > li > ul > li").click(function(){
		// 	$(this).find("ul").show();
		// 	$(this).siblings().find("ul").hide();
		// 	return false;
		// });

		$(".timesWeather > li.long > ul > li > ul > li").click(function(){
			$(this).find(">ul").show();
			$(this).siblings().find(">ul").hide();

			$(this).find(">a").css("color","#fff");
			$(this).siblings().find(">a").css("color","#4f9bc5");
			return false;
		});

		// $("#section3 > ul > li").click(function(){
		// 	$(this).css("backgroundColor","")
		// 	return false;
		// });
