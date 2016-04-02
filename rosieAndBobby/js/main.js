$(document).ready(function(){
	
	for (var i = 0; i < 7; i++) {
		$("#qna li").eq(i).find(">a").css("left","9"*i+"%");
	}


	$("#books .topFiveUl ol li > a").mouseenter(function(){

		$(this).parent().siblings("li").find("dl").hide();
		$(this).siblings("dl").show();

		if ($(window).width() >= 721) {

			$(this).parent().siblings("li").find(">a").css({"width":"25px","height":"25px","lineHeight":"25px","margin":"0 0","fontSize":"1em","color":"#fff"});
			$(this).css({"width":"45px","height":"45px","lineHeight":"45px","fontSize":"1.3em","transition":"0.3s"});

		} else if ($(window).width() > 570 && $(window).width() < 720) {

			$(this).parent().siblings("li").find(">a").css({"width":"55px","height":"55px","lineHeight":"55px","margin":"0 0","fontSize":"1em"});
			$(this).css({"width":"45px","height":"45px","lineHeight":"45px","fontSize":"1.3em"});
			$(this).parent().siblings().find("dl").hide();
			$(this).parent().find("dl").show();
			$(this).parent().siblings().find(">a").css({"color":"#fff","borderBottom":"1px solid #fff"});
			$(this).css({"color":"#DF0F00","borderBottom":"1px solid #DF0F00"});
		} 
	});


	if ( $(window).width() >= 720 ) {


		$("#nav ul li:eq(0)").click(function(){
			$(this).find("dl").show(300);
			return false;
		});

		$("#nav ul li:eq(0) dl dd").click(function(){
			$(this).parent().hide(300);

			return false;
		});

		$("#nav ul li:eq(6)").mouseenter(function(){
			$(".contact").css({"color":"#DF0F00","transition":"0.5s"});
		});
		$("#nav ul li:eq(6)").mouseleave(function(){
			$(".contact").css("color","#fff");
		});


		$("#books .newArrivalsLi li > a").click(function(){
			$(this).parent().siblings("li").find("dl").hide();
			$(this).parent().find("dl").show();

			$(this).css({"opacity":"1","box-shadow":"#A6A6A6 0px 14px 26px -7px"});
			$(this).parent().siblings("li").find(">a").css({"opacity":"0.6","box-shadow":" 0px 0px 0px 0px"});
			return false;
		});

		$("#books .recomLi dt").mouseenter(function(){
			$(this).css({"opacity":"0.5","transition":"0.5s"});
			$(this).siblings(".price, .saveIt, .getIt, .giftIt").fadeIn();
			return false;
		});
		$("#books .recomLi dt").mouseleave(function(){
			$(this).css({"opacity":"1","transition":"0.5s"});
			$(this).siblings(".price, .saveIt, .getIt, .giftIt").fadeOut();
			return false;
		});


		$("#myPage p a").click(function(){
			$("#signUp").slideDown(1000);
			return false;
		});


		$("#myPage .ddSignIn input").click(function(){
			$(".beforeLoggingIn").hide();
			$("#myPage").css("height","1050px");
			$("#signUp").slideUp();
			$(".afterLoggingIn").slideDown();
			return false;
		});


		$("#myPage .myPageUl > .myFirstLi > a").click(function(){
			$(this).parent().siblings(".myFirstLi").find(">a").css({"color":"#fff","borderBottom":"1px solid #fff","transition":"0.2s"});
			$(this).css({"color":"#DF0F00","borderBottom":"1px solid #DF0F00","transition":"0.5s"});

				$(this).parent().siblings().find(".giftnDeleteIcons").hide();
				$(this).parent().find(".giftnDeleteIcons").show();
				$(this).parent().siblings().find("form").hide();
				$(this).parent().find("form").show();

				$(this).parent().siblings(".myFirstLi").find(".gradiBg").hide();
				$(this).parent().find(".gradiBg").show();

				$(this).parent().siblings(".myFirstLi").find("ol").hide();
				$(this).parent().find("ol").show();
			
			
			return false;
		});


		$("#myPage .myPageUl > .mySecondLi > a").click(function(){
			$(this).parent().siblings(".mySecondLi").find(">a").css({"color":"#fff","borderBottom":"1px solid #fff","transition":"0.2s"});
			$(this).css({"color":"#DF0F00","borderBottom":"1px solid #DF0F00","transition":"0.5s"});


				$(this).parent().siblings(".mySecondLi").find(".gradiBg").hide();
				$(this).parent().find(".gradiBg").show();

				$(this).parent().siblings(".mySecondLi").find("ol").hide();
				$(this).parent().find("ol").show();

			return false;
		});



		$("#myPage .myFirstLi ol li > a").click(function(){
			$(this).find(".chooseLi").toggleClass("redInside");
			$(this).toggleClass("red");
			
			return false;
		});

		$("#myPage .gradiBg a:eq(1)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"-180px"},900);
			return false;
		});
		$("#myPage .gradiBg a:eq(3)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"-180px"},900);
			return false;
		});
		$("#myPage .gradiBg a:eq(0)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"0"},700);
			return false;
		});
		$("#myPage .gradiBg a:eq(2)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"0"},700);
			return false;
		});


		$("#myPage .gradiBg a:eq(5)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"-180px"},900);
			return false;
		});
		$("#myPage .gradiBg a:eq(7)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"-180px"},900);
			return false;
		});
		$("#myPage .gradiBg a:eq(4)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"0"},700);
			return false;
		});
		$("#myPage .gradiBg a:eq(6)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"0"},700);
			return false;
		});

		$(".logOutBtn > a").click(function(){
			$("#signUp").slideDown();
			$("#myPage .afterLoggingIn").slideUp();
			$("#myPage").css("height","auto");
			$("#myPage .beforeLoggingIn").slideDown();
			
			return false;
		});



		$("#cancel").click(function(){
			$("#signUp").slideUp(1000);
			return false;
		});

		$("#qna li > a").click(function(){
			$(this).css("backgroundColor","#DF0F00");
			$(this).parent().siblings().find(">a").css("backgroundColor","#fff")
			$(this).parent().find("dl").show();
			$(this).parent().siblings().find("dl").hide();
			return false;
		});

		$("#qna dt").click(function(){
			$(this).siblings().find("dt>span").css("borderBottom","0 none");
			$(this).find(">span").css("borderBottom","1px solid #fff");
			$(this).siblings("dd").slideUp();
			$(this).next().slideDown();
			// $("#qna ul").animate({height:"530px"},300);

			return false;
		});



	} else if ( $(window).width() > 570 && $(window).width() < 720 ) {  


		$("#nav h2 a").click(function(){
			$(this).hide();
			$(this).parent().parent().find(".closeMenu a").show();
			$("#nav ul").slideDown();
			return false;
		});

		$("#nav .closeMenu a").click(function(){
			$(this).hide();
			$(this).parent().parent().find("h2 a").show();
			$("#nav ul").slideUp(300);

			return false;
		});


		$("#myPage p a").click(function(){
			$("#signUp").slideDown(1000);
			return false;
		});


		$("#myPage .ddSignIn input").click(function(){
			$(".beforeLoggingIn").hide();
			$("#myPage").css("height","1050px");
			$("#signUp").slideUp();
			$(".afterLoggingIn").slideDown();
			return false;
		});


		$("#myPage .myPageUl > .myFirstLi > a").click(function(){
			$(this).parent().siblings(".myFirstLi").find(">a").css({"color":"#fff","borderBottom":"1px solid #fff","transition":"0.2s"});
			$(this).css({"color":"#DF0F00","borderBottom":"1px solid #DF0F00","transition":"0.5s"});

				$(this).parent().siblings().find(".giftnDeleteIcons").hide();
				$(this).parent().find(".giftnDeleteIcons").show();
				$(this).parent().siblings().find("form").hide();
				$(this).parent().find("form").show();

				$(this).parent().siblings(".myFirstLi").find(".gradiBg").hide();
				$(this).parent().find(".gradiBg").show();

				$(this).parent().siblings(".myFirstLi").find("ol").hide();
				$(this).parent().find("ol").show();
			
			
			return false;
		});


		$("#myPage .myPageUl > .mySecondLi > a").click(function(){
			$(this).parent().siblings(".mySecondLi").find(">a").css({"color":"#fff","borderBottom":"1px solid #fff","transition":"0.2s"});
			$(this).css({"color":"#DF0F00","borderBottom":"1px solid #DF0F00","transition":"0.5s"});


				$(this).parent().siblings(".mySecondLi").find(".gradiBg").hide();
				$(this).parent().find(".gradiBg").show();

				$(this).parent().siblings(".mySecondLi").find("ol").hide();
				$(this).parent().find("ol").show();

			return false;
		});



		$("#myPage .myFirstLi ol li > a").click(function(){
			$(this).find(".chooseLi").toggleClass("redInside");
			$(this).toggleClass("red");
			
			return false;
		});

		$("#myPage .gradiBg a:eq(1)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"-180px"},900);
			return false;
		});
		$("#myPage .gradiBg a:eq(3)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"-180px"},900);
			return false;
		});
		$("#myPage .gradiBg a:eq(0)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"0"},700);
			return false;
		});
		$("#myPage .gradiBg a:eq(2)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"0"},700);
			return false;
		});


		$("#myPage .gradiBg a:eq(5)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"-180px"},900);
			return false;
		});
		$("#myPage .gradiBg a:eq(7)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"-180px"},900);
			return false;
		});
		$("#myPage .gradiBg a:eq(4)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"0"},700);
			return false;
		});
		$("#myPage .gradiBg a:eq(6)").click(function(){
			$(this).parent().parent().find(".overFlowHiddenBox > ol").animate({"margin-top":"0"},700);
			return false;
		});

		$(".logOutBtn > a").click(function(){
			$("#signUp").slideDown();
			$("#myPage .afterLoggingIn").slideUp();
			$("#myPage").css("height","auto");
			$("#myPage .beforeLoggingIn").slideDown();
			
			return false;
		});



		$("#cancel").click(function(){
			$("#signUp").slideUp(1000);
			return false;
		});


	} else {

		$(".myPageUl > li > a").css({"color":"#fff","borderBottom":"1px solid #fff"});
		$(".myPageUl > li:first-child > a").css({"color":"#DF0F00","borderBottom":"1px solid #DF0F00"});

		$("#nav h2 a").click(function(){
			$(this).hide();
			$(this).parent().parent().find(".closeMenu a").show();
			$("#nav ul").slideDown();
			return false;
		});

		$("#nav .closeMenu a").click(function(){
			$(this).hide();
			$(this).parent().parent().find("h2 a").show();
			$("#nav ul").slideUp(300);

			return false;
		});

		$("#myPage .myFirstLi ol li > a").click(function(){
			$(this).find(".chooseLi").toggleClass("redInside");
			$(this).toggleClass("red");
			
			return false;
		});

		$(".myPageUl > li > a").click(function(){
			$(this).parent().siblings("li").find(".overFlowHiddenBox, .giftnDeleteIcons, form").hide();
			$(this).parent().find(".overFlowHiddenBox, .overFlowHiddenBox ol").show();
			$(this).parent().find(".giftnDeleteIcons, form").show();
			$(this).css({"color":"#DF0F00","borderBottom":"1px solid #DF0F00"});
			$(this).parent().siblings("li").find(">a").css({"color":"#fff","borderBottom":"1px solid #fff"});
			
			return false;
		});


		$("#myPage .ddSignIn input").click(function(){
			$(".beforeLoggingIn").hide();
			$("#myPage").css("height","auto");
			$("#signUp").slideUp();
			$(".afterLoggingIn").slideDown();
			return false;
		});

		$(".logOutBtn > a").click(function(){
			$("#signUp").slideDown();
			$("#myPage .afterLoggingIn").slideUp();
			$("#myPage").css("height","auto");
			$("#myPage .beforeLoggingIn").slideDown();
			
			return false;
		});

		$(".topFiveUl li:eq(0) ol li dl dt img").click(function(){
			$(this).parent().parent().parent().siblings("li").find("dl dd").hide();
			$(this).parent().parent().find("dd").show();
			$(this).parent().parent().parent().siblings("li").find("dl dt img").css({"opacity":0.6,"boxShadow":"0px 0px 0px","transition":"0.4s"});
			$(this).css({"opacity":1,"boxShadow":"#A6A6A6 0px 14px 26px -7px","transition":"0.4s"});

			return false;
		});


	}


$("#books .newArrivalsLi li > a").click(function(){
	$(this).parent().siblings("li").find("dl").hide();
	$(this).parent().find("dl").show();

	$(this).css({"opacity":"1","box-shadow":"#A6A6A6 0px 14px 26px -7px"});
	$(this).parent().siblings("li").find(">a").css({"opacity":"0.6","box-shadow":" 0px 0px 0px 0px"});
	return false;
});


$(".topFiveUl > li:eq(0) .gradiSeeMore a.right").click(function(){
	
	$(".topFiveUl > li ol li").eq(0).find("dl dt").animate({left:"-160px"},300);
	$(".topFiveUl > li ol li").eq(1).find("dl dt").animate({left:"-160px"},300);
	$(".topFiveUl > li ol li").eq(2).find("dl dt").animate({left:"0"},300);
	$(".topFiveUl > li ol li").eq(3).find("dl dt").animate({left:"160px"},300);
	$(".topFiveUl > li ol li").eq(4).find("dl dt").animate({left:"320px"},300);

	$(this).hide();
	$(this).parent().find("a.left").css({"display":"block","marginTop":"130px","marginLeft":"10px"}).show();

	return false;
});


$(".topFiveUl > li:eq(0) .gradiSeeMore a.left").click(function(){
	
	$(".topFiveUl > li ol li").eq(0).find("dl dt").animate({left:"0"},300);
	$(".topFiveUl > li ol li").eq(1).find("dl dt").animate({left:"160px"},300);
	$(".topFiveUl > li ol li").eq(2).find("dl dt").animate({left:"320px"},300);
	$(".topFiveUl > li ol li").eq(3).find("dl dt").animate({left:"480px"},300);
	$(".topFiveUl > li ol li").eq(4).find("dl dt").animate({left:"640px"},300);

	$(this).hide();
	$(this).parent().find("a.right").css({"display":"block","marginTop":"130px","marginLeft":"10px"}).show();

	return false;
});




$(".topFiveUl > li:eq(1) .gradiSeeMore a.right").click(function(){
	
	$(".topFiveUl > li ul li").eq(0).find(">a").animate({left:"-160px"},100);
	$(".topFiveUl > li ul li").eq(1).find(">a").animate({left:"-160px"},100);
	$(".topFiveUl > li ul li").eq(2).find(">a").animate({left:"0"},300);
	$(".topFiveUl > li ul li").eq(3).find(">a").animate({left:"160px"},300);

	$(this).hide();
	$(this).parent().find("a.left").css({"display":"block","marginTop":"130px","marginLeft":"10px"}).show();


	return false;
});

$(".topFiveUl > li:eq(1) .gradiSeeMore a.left").click(function(){
	
	$(".topFiveUl > li ul li").eq(0).find(">a").animate({left:"0"},100);
	$(".topFiveUl > li ul li").eq(1).find(">a").animate({left:"160px"},100);
	$(".topFiveUl > li ul li").eq(2).find(">a").animate({left:"320px"},300);
	$(".topFiveUl > li ul li").eq(3).find(">a").animate({left:"480px"},300);

	$(this).hide();
	$(this).parent().find("a.right").css({"display":"block","marginTop":"130px","marginLeft":"10px"}).show();

		
	return false;
});




$(".gradiSeeMoreNav a.right").click(function(){
	$(this).hide();
	$(this).siblings().css("display","block");
	$("#books .navInBooks").animate({marginLeft:"-280px"},300);
	return false;
});

$(".gradiSeeMoreNav a.left").click(function(){
	$(this).hide();
	$(this).siblings().show();
	$("#books .navInBooks").animate({marginLeft:"0"},300);
	return false;
});





// nav


$("#nav h2 a").click(function(){
	$(this).hide();
	$(this).parent().parent().find(".closeMenu a").show();
	$("#nav ul").slideDown();
	return false;
});

$("#nav .closeMenu a").click(function(){
	$(this).hide();
	$(this).parent().parent().find("h2 a").show();
	$("#nav ul").slideUp(300);

	return false;
});

$("#books .recomLi dt").mouseenter(function(){
	$(this).css({"opacity":"0.5","transition":"0.5s"});
	$(this).siblings(".price, .saveIt, .getIt, .giftIt").fadeIn();
	return false;
});
$("#books .recomLi dt").mouseleave(function(){
	$(this).css({"opacity":"1","transition":"0.5s"});
	$(this).siblings(".price, .saveIt, .getIt, .giftIt").fadeOut();
	return false;
});


function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {

		    var target = $( $(this).attr('href') );

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, duration);
		    }
		});
	}

	smoothScroll();


// #qna

$("#qna li > a").click(function(){
	$(this).css("backgroundColor","#DF0F00");
	$(this).parent().siblings().find(">a").css("backgroundColor","#fff")
	$(this).parent().find("dl").show();
	$(this).parent().siblings().find("dl").hide();
	return false;
});

$("#qna dt").click(function(){
	$(this).siblings().find("dt>span").css("borderBottom","0 none");
	$(this).find(">span").css("borderBottom","1px solid #fff");
	$(this).siblings("dd").slideUp();
	$(this).next().slideDown();
	// $("#qna ul").animate({height:"530px"},300);

	return false;
});


});