$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.

	$(window).load(function(){
		// $(".loading").hide();


	        if ($(window).width() <= 1024) {

	        	$(".loading").hide();
	        	$("#wrapper nav a:eq(0)").addClass("nav1024Active");

	        } else {
	        	$("#wrapper nav a:eq(0)").removeClass("nav1024Active");

	        	$(".program").addClass("programSvgAni");
				$(".language").addClass("languageSvgAni");
				$(".focus").addClass("focusSvgAni");

				$("#about .groupping > ul > li:eq(0) > ul").addClass("programSvgAni");
				$("#about .groupping > ul > li:eq(1) > ul").addClass("focusSvgAni");
				$("#about .groupping > ul > li:eq(2) > ul").addClass("languageSvgAni");

				$(".about1").addClass("about1Ani");

				$(".seperLine").animate({opacity:0}, 500);

				$("header, #about .groupping").css("opacity",0);

				$("header h1, header ul li:eq(1) a, header ul li:eq(0) a, header ul li:eq(2) a, nav a, #about a.arrow, header ul li:eq(3) a, .cross > span").addClass("basicSetting");

				$("header h1, .cross > span:eq(0)").addClass("programSvgAni");

				$("header ul li:eq(0) a, header ul li:eq(1) a, header ul li:eq(0) a, .cross > span:eq(2)").addClass("languageSvgAni");

				$("header ul li:eq(2) a, .cross > span:eq(1)").addClass("focusSvgAni");

				$("nav a").addClass("fromLeft");

				$("header ul li:eq(3) a").addClass("fromRight");

				$("#about a.arrow, .cross > span:eq(3)").addClass("fromRightBottom");

				$("section").addClass("defaultSetting");

				$("section:eq(1) .groupping, section:eq(2) .groupping").fadeOut(0);

				// loading page

				$(".loading span:eq(0), .loading span:eq(1), .loading span:eq(2), .loading span:eq(3), .loading span:eq(4), .loading span:eq(5)").delay(800).animate({"width":0, "opacity":0},500);
				$(".loading p").fadeOut(2000);

	        }

    	

	        $(window).resize(function() {
	        	var thisWidth = $(window).width();
	        	if (thisWidth <= 1024) {
	        		$("#wrapper nav a:eq(0)").addClass("nav1024Active");
	        	} else {
	        		$("#wrapper nav a:eq(0)").removeClass("nav1024Active");

	        	}

	        });
		

		

	});

	$(document).ready(function(){


		$(window).scroll(function() {

			var aboutHeight = $("#about").innerHeight();
			var workHeight = $("#work").innerHeight();
			var contactHeight = $("#contact").innerHeight();


			var navIndex = $(this).index();
					
			$(this).siblings().removeClass("navActive");
			$(this).siblings().find("span").removeClass("spanActive");

			$(this).addClass("navActive");
			$(this).find("span").addClass("spanActive");



			if ( $(window).width() <= 1024 ) {
				$("#wrapper nav a").removeClass("nav1024Active");
				$("#wrapper nav a:eq(0)").addClass("nav1024Active");
				$("#wrapper nav a:eq(1), #wrapper nav a:eq(2)").addClass("nav1024ActiveOff");	

				if ( $(window).scrollTop() > 30 ) {

					$(".navBg, header h3, header ul, nav, span.navUnderline, #wrapper header h1, header ul li a").addClass("fixedOne");
					

					if ( $(window).scrollTop() <= aboutHeight ) {
						$("#about, #work, #contact").removeClass();

						$("nav a:eq(0)").addClass("nav1024Active");
						$("nav a:eq(0)").removeClass("nav1024ActiveOff");
						$("nav a:eq(1),nav a:eq(2) ").addClass("nav1024ActiveOff");


						$("#about").addClass("zero");
						$("#work").addClass("ninetyFive");

					} else if ( $(window).scrollTop() <= aboutHeight+workHeight ) {
						$("#about, #work, #contact").removeClass();

						$("nav a:eq(1)").addClass("nav1024Active");
						$("nav a:eq(1)").removeClass("nav1024ActiveOff");
						$("nav a:eq(0), nav a:eq(2)").addClass("nav1024ActiveOff");


						$("#about").addClass("minus100");
						$("#work").addClass("zero");

						$("#contact").addClass("ninetyFive");
					} else if ( $(window).scrollTop() <= aboutHeight+workHeight+contactHeight ) {
						$("#about, #work, #contact").removeClass();

						$("nav a:eq(2)").addClass("nav1024Active");
						$("nav a:eq(2)").removeClass("nav1024ActiveOff");
						$("nav a:eq(0),nav a:eq(1) ").addClass("nav1024ActiveOff");

						
						$("#about").addClass("minus100");
						$("#work").addClass("minus100");
						$("#contact").addClass("zero");
					} else if ( $(window).scrollTop() <= 29 ) {
						$("nav a").removeClass("nav1024Active");
						$("nav a:eq(0)").addClass("nav1024Active");
						$("nav a:eq(1),nav a:eq(2)").addClass("nav1024ActiveOff");	
					}


				} else {
					$(".navBg, header h3, header ul, nav, span.navUnderline, #wrapper header h1, header ul li a").removeClass("fixedOne");

					$("nav a").removeClass("nav1024Active, nav1024ActiveOff");

				}

			}
		});
		




		$("section").delay(2500).queue(function(next){

			$("section:eq(2)").removeClass("defaultSetting");


		   	next();
		});


		$("section").delay(100).queue(function(next){

			$("section:eq(1)").removeClass("defaultSetting");


		   	next();
		});

		$("section").delay(200).queue(function(next){

		   	$("section:eq(0)").removeClass("defaultSetting"); 

		   	next();
		});


		$("header, #about .groupping").delay(3000).queue(function(next){

		    $("header, #about .groupping").css("opacity",1);
		    $("section:eq(1) .groupping, section:eq(2) .groupping").fadeIn(500);
		   
		    next();
		});

		$("header, #about .groupping").delay(100).queue(function(next){

		    $("header h1, .cross > span:eq(0)").removeClass("programSvgAni");

		    $("header ul li:eq(0) a, header ul li:eq(1) a, header ul li:eq(0) a, .cross > span:eq(2)").removeClass("languageSvgAni");
		    $("nav a").removeClass("fromLeft");
		    $("header ul li:eq(2) a, .cross > span:eq(1)").removeClass("focusSvgAni");

		    $("header ul li:eq(3) a").removeClass("fromRight");

		    $("#about a.arrow, .cross > span:eq(3)").removeClass("fromRightBottom");

		    next();
		});

		$("#about").delay(1400).queue(function(next){

		    $(".about1").removeClass("about1Ani");


		    next();
		});

		
		$("#about").delay(300).queue(function(next){

		    $(".program").removeClass("programSvgAni");


			$("#about .groupping > ul > li:eq(0) > ul").removeClass("programSvgAni");

			$("#about .groupping > ul > li:eq(0) .seperLine").animate({opacity:1}, 500);


			next();

		});
		

		$("#about").delay(200).queue(function(next){

			$(".focus").removeClass("focusSvgAni");

			$("#about .groupping > ul > li:eq(1) > ul").removeClass("focusSvgAni");

			$("#about .groupping > ul > li:eq(1) .seperLine").animate({opacity:1}, 800);
		    next();
		});

		$("#about").delay(200).queue(function(next){

			$(".language").removeClass("languageSvgAni");
			$("#about .groupping > ul > li:eq(2) > ul").removeClass("languageSvgAni");
			$("#about .groupping > ul > li:eq(2) .seperLine").animate({opacity:1}, 800);

		    next();
		});

		






		// /*
  


		// var count = 0;
		// $("#wrapper").bind('DOMMouseScroll mousewheel', function(e){

  //           if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 && count == 0) {

  //               $("#about").removeClass("aboutAni");
		// 		$("#work").removeClass("workAni");
		// 		$("#contact").removeClass("contactAni");
		// 		$("#work").removeClass("lastAni2");
		// 		$("#contact").removeClass("lastAni");

		// 		$("nav a").removeClass("navActive");
		// 		$("nav a span").removeClass("spanActive");

		// 		$("nav a:eq(0)").addClass("navActive");
		// 		$("nav a:eq(0) span").addClass("spanActive");

		// 		$("#work .groupping").hide();

		// 		count = 1;

  //           } else if(e.originalEvent.wheelDelta > 60 || e.originalEvent.detail < 0 && count == 1) {

  //           	$("#about").addClass("aboutAni");
		// 		$("#work").addClass("workAni");
		// 		$("#work .groupping").show();
		// 		$("#contact").addClass("contactAni");

		// 		$("nav a").removeClass("navActive");
		// 		$("nav a span").removeClass("spanActive");

		// 		$("nav a:eq(1)").addClass("navActive");
		// 		$("nav a:eq(1) span").addClass("spanActive");

		// 		count = 2;

		// 	} else if (e.originalEvent.wheelDelta > 120 || e.originalEvent.detail < 0 && count == 2) {
  //           	$("nav a").removeClass("navActive");
		// 		$("nav a span").removeClass("spanActive");

  //           	$("#about").removeClass("aboutAni");
		// 		$("#work").removeClass("workAni");
		// 		$("#contact").removeClass("contactAni");

		// 		$("#about").addClass("aboutAni");
		// 		$("#work").addClass("lastAni2");
		// 		$("#contact").addClass("lastAni");

		// 		$("#contact .groupping").show();				

		// 		$("nav a:eq(2)").addClass("navActive");
		// 		$("nav a:eq(2) span").addClass("spanActive");
		// 		count --;
  //   		} else {
  //           	$("nav a").removeClass("navActive");
		// 		$("nav a span").removeClass("spanActive");

  //           	$("#about").removeClass("aboutAni");
		// 		$("#work").removeClass("workAni");
		// 		$("#contact").removeClass("contactAni");

		// 		$("#about").addClass("aboutAni");
		// 		$("#work").addClass("lastAni2");
		// 		$("#contact").addClass("lastAni");

		// 		$("#contact .groupping").show();				

		// 		$("nav a:eq(2)").addClass("navActive");
		// 		$("nav a:eq(2) span").addClass("spanActive");

  //           } 
            
  //       });

			function naviA (duration) {
				$('nav a').on('click', function(event) {

					var navIndex = $(this).index();
					
					$(this).siblings().removeClass("navActive");
					$(this).siblings().find("span").removeClass("spanActive");

					$(this).addClass("navActive");
					$(this).find("span").addClass("spanActive");

					$("#about, #work, #contact").removeClass();

					if ( navIndex == 0 ) {
						$("#about").addClass("zero");
						$("#work").addClass("ninetyFive");


					} else if ( navIndex == 1 ) {
						$("#about").addClass("minus100");
						$("#work").addClass("zero");
	
						$("#contact").addClass("ninetyFive");


					} else if ( navIndex == 2 ) {


						$("#about").addClass("minus100");
						$("#work").addClass("minus100");
						$("#contact").addClass("zero");
					} else {

					}

				    var target = $( $(this).attr('href') );

				    if( target.length ) {
				        event.preventDefault();
				        $('html, body').animate({
				            scrollTop: target.offset().top
				        }, duration);
				    }
				});
			}

			
			naviA();



		// prev and next button on each page

		$("#about .arrow").click(function(){
			$("#about, #work, #contact").removeClass();

			$("#about").addClass("minus100");
			$("#work").addClass("zero");
			$("#contact").addClass("ninetyFive");

			$("nav a").removeClass("navActive");
			$("nav a span").removeClass("spanActive");

			$("nav a:eq(1)").addClass("navActive");
			$("nav a:eq(1) span").addClass("spanActive");

		
			return false;
		});



		$("#work .arrow").click(function(){

			var thisNm = $(this).index();
			
			$("nav a").removeClass("navActive");
			$("nav a span").removeClass("spanActive");

			if (thisNm == 0) {
				$("#about, #work, #contact").removeClass();

				$("nav a:eq(0)").addClass("navActive");
				$("nav a:eq(0) span").addClass("spanActive");

			} else {
				$("#about, #work, #contact").removeClass();

				$("#about").addClass("minus100");
				$("#work").addClass("minus100");
				$("#contact").addClass("zero");
		
				$("nav a:eq(2)").addClass("navActive");
				$("nav a:eq(2) span").addClass("spanActive");

			}
		

			return false;
		});


		$("#contact .arrow").click(function(){

				$("#about, #work, #contact").removeClass();

				$("#work").addClass("zero");
				$("#contact").addClass("ninetyFive");

				$("nav a").removeClass("navActive");
				$("nav a span").removeClass("spanActive");

				$("nav a:eq(1)").addClass("navActive");
				$("nav a:eq(1) span").addClass("spanActive");

			

			return false;
		});





		// #work nav

		function workNav() {

			$("#work .group1 ul > li > a").on('click', function(){



				var listIndex = $(this).parent().index();

				$(".prevNext a").removeClass("noPrev");

				if ( listIndex == 0 ) {

					$(".prevNext a.prev").addClass("noPrev");

				} else if ( listIndex == 8 ) {
					$(".prevNext a.next").addClass("noPrev");
				}

				$(this).addClass("workOn");
				$(this).parent().siblings().find(">a").removeClass("workOn");


				$(this).siblings().addClass("eachOn");
				$(this).parent().siblings().find(".eachWork").removeClass("eachOn");
				
				$(".laptop").show();

				if ($(".mobiles").show()) {

					$(".mobiles").hide();

						$(".navForImg span:eq(1)").removeClass("navForImgActive");
						$(".navForImg span:eq(1)").siblings().addClass("navForImgActive");
				}

				// $(".mobiles").hide();

				$("#wrapper #screen").removeClass();
				$("#workImgBg").removeClass();


				$("#workImgBg").addClass("bgColour"+listIndex);
				$(".laptop #screen").addClass("lapPos"+listIndex);

				$(".pad #screen").addClass("padPos"+listIndex);
				$(".phone #screen").addClass("phonePos"+listIndex);


				if ($(window).width() <= 820 && $(window).width() >= 721 ) {
					// if (listIndex == 6 || listIndex == 7 || listIndex == 6 || listIndex == 5 || listIndex == 8 ) {
					// 	$("#work .group1 ul > li > a:eq(0)").animate({left: "-51px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(1)").animate({left: 0}, 300);
					// 	$("#work .group1 ul > li > a:eq(2)").animate({left: "81px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(3)").animate({left: "135px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(4)").animate({left: "204px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(5)").animate({left: "303px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(6)").animate({left: "402px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(7)").animate({left: "472px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(8)").animate({left: "595px"}, 300);

					// 	$(".whiteGradi.second").hide();
					// 	$(".whiteGradi.first").show();
					// } else if (listIndex == 0 || listIndex == 1 || listIndex == 2 || listIndex == 3 || listIndex == 4 ) {
					// 	$("#work .group1 ul > li > a:eq(0)").animate({left: 0}, 300);
					// 	$("#work .group1 ul > li > a:eq(1)").animate({left: "51px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(2)").animate({left: "135px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(3)").animate({left: "187px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(4)").animate({left: "256px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(5)").animate({left: "355px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(6)").animate({left: "459px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(7)").animate({left: "531px"}, 300);
					// 	$("#work .group1 ul > li > a:eq(8)").animate({left: "656px"}, 300);

					// 	$(".whiteGradi.second").show();
					// 	$(".whiteGradi.first").hide();
					// } 
					
				} else {

				}

				


				
				return false;
			});

		}

		$(".navForImg span").on('click', function(){
			
			$(this).addClass("navForImgActive");
			$(this).siblings().removeClass("navForImgActive");
			

			if ( $(this).index() == 0 ) {
				$(this).parent().siblings(".laptop").show();
				$(this).parent().siblings(".mobiles").hide();

			} else {
				$(this).parent().siblings(".mobiles").show();
				$(this).parent().siblings(".laptop").hide();

			}



			return false;
		});


		
		function prevNextBtn() {

			$(".prevNext a.next").on('click', function(){

				var nextList = $("#work .group1 ul > li > a.workOn").parent().index();

				$("#wrapper #screen").removeClass();
				$("#workImgBg").removeClass();

				

				if ( nextList == 8 ) {		

					$("#work .group1 > ul > li").find(">a").removeClass();
					$("#work .group1 > ul > li").eq(nextList).find(">a").addClass("workOn");

					$("#work .group1 ul > li").eq(nextList).find(">a").siblings().addClass("eachOn");
					$("#work .group1 ul > li").eq(nextList).find(">a").parent().siblings().find(".eachWork").removeClass("eachOn");
					

					$("#wrapper #screen").removeClass();
					$("#workImgBg").removeClass();


					$("#workImgBg").addClass("bgColour"+nextList);
					$(".laptop #screen").addClass("lapPos"+nextList);

					$(".pad #screen").addClass("padPos"+nextList);
					$(".phone #screen").addClass("phonePos"+nextList);

					nextList -= 1;

				} else if ( nextList == 7 ) {
					$(this).addClass("noPrev");
					$(this).siblings().removeClass("noPrev");
				} else {
					$(this).removeClass("noPrev");
				}


				$("#work .group1 > ul > li").eq(nextList).find(">a").removeClass("workOn");
				$("#work .group1 > ul > li").eq(nextList).next().find(">a").addClass("workOn");


				$("#work .group1 ul > li").eq(nextList+1).find(">a").siblings().addClass("eachOn");
				$("#work .group1 ul > li").eq(nextList+1).find(">a").parent().siblings().find(".eachWork").removeClass("eachOn");
				

				$("#workImgBg").addClass("bgColour"+(nextList+1));
				$(".laptop #screen").addClass("lapPos"+(nextList+1));

				$(".pad #screen").addClass("padPos"+(nextList+1));
				$(".phone #screen").addClass("phonePos"+(nextList+1));

				if ( nextList == 0 ) {
						nextList = 0;
					}

				if ( nextList >= 0 ) {
					$(".prevNext a.prev").removeClass("noPrev");

				} else {

					$(".prevNext a.prev").addClass("noPrev");
				}

				console.log(nextList);
				return false;

			});

		}
		
		function prevPrevtBtn() {
			$(".prevNext a.prev").on('click', function(){
				var prevList = $("#work .group1 ul > li > a.workOn").parent().index();
					$("#wrapper #screen").removeClass();
					$("#workImgBg").removeClass();

				if (prevList == 0 ) {
					$(this).addClass("noPrev");
					$(this).siblings().removeClass("noPrev");
					

					$("#work .group1 > ul > li").find(">a").removeClass();
					$("#work .group1 > ul > li").eq(prevList).find(">a").addClass("workOn");

					$("#work .group1 ul > li").eq(prevList).find(">a").siblings().addClass("eachOn");
					$("#work .group1 ul > li").eq(prevList).find(">a").parent().siblings().find(".eachWork").removeClass("eachOn");
					

					$("#workImgBg").addClass("bgColour"+prevList);
					$(".laptop #screen").addClass("lapPos"+prevList);

					$(".pad #screen").addClass("padPos"+prevList);
					$(".phone #screen").addClass("phonePos"+prevList);

				} else {

					$(this).removeClass("noPrev");

					$("#work .group1 > ul > li").eq(prevList).find(">a").removeClass("workOn");
					$("#work .group1 > ul > li").eq(prevList).prev().find(">a").addClass("workOn");

					$("#work .group1 ul > li").eq(prevList-1).find(">a").siblings().addClass("eachOn");
					$("#work .group1 ul > li").eq(prevList-1).find(">a").parent().siblings().find(".eachWork").removeClass("eachOn");

					$("#workImgBg").addClass("bgColour"+(prevList-1));
					$(".laptop #screen").addClass("lapPos"+(prevList-1));

					$(".pad #screen").addClass("padPos"+(prevList-1));
					$(".phone #screen").addClass("phonePos"+(prevList-1));

					if ( prevList == 8 ) {
						prevList = 8;

					} else if ( prevList == 0 ) {
						prevList = 0;
					}
				}

				if (prevList == 1){

					$(this).addClass("noPrev");
					$(this).siblings().removeClass("noPrev");

				} else if (prevList == 8) {
					$(this).siblings().removeClass("noPrev");
				}

				console.log(prevList);
				return false;

			});
	
		}


	prevNextBtn();
	
	prevPrevtBtn();

	workNav();

	$(window).resize(function() {

		workNav();
	});	



	$("#wrapper header h3").click(function() {

		$("header ul").toggleClass("burger");
		$(this).find("span span:eq(0)").toggleClass("activeTop");
		$(this).find("span span:eq(1)").toggleClass("activeMid");
		$(this).find("span span:eq(2)").toggleClass("activeBtm");

		return false;
	});







	});
	





});






