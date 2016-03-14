$(document).ready(function(){

// 메인메뉴 
	$("#mainNav > ul > li > a").mouseenter(function(){
		$("#mainNav > ul > li > ul").show();
		$(".mainNav_ul_bg").show();
	});

	$(".mainNav_ul_bg, #mainNav").mouseleave(function(){
		$(".mainNav_ul_bg").hide();
		$("#mainNav > ul > li > ul").hide();
	});


// 날씨종합 초기상태
	$(".timesWeather > li > ul").hide();
	$(".timesWeather > li:eq(1) > ul").show();
	$(".timesWeather > li:eq(1) > a").css("backgroundColor","#4f9bc5");
	$(".timesWeather > li:eq(1) > ul > li:eq(0)> a").css({"color":"#fff"});
	$(".timesWeather > li:eq(1) > ul > li:eq(0) > ul").show();



	// 첫번째 리스트
	$(".timesWeather > li").click(function(){

	// 리스트 > 링크 클릭시 색변화
	$(this).find(">a").css("backgroundColor","#4f9bc5");
	$(this).siblings().find(">a").css("backgroundColor","#84b9d8");

	//클릭시 다른 리스트로 변화

	if ($(this).hasClass("long")) {
		$(this).find(">ul").show();
		$(this).siblings().find(">ul").hide();
		$(this).find(">ul>li>ul").hide();
		$(this).find(">ul>li:eq(0)>ul").show();
		$(this).find(">ul>li>a").css({"color":"#4f9bc5"});
		$(this).find(">ul>li:eq(0)>a").css({"color":"#fff"});
		$(this).find(">ul>li:eq(0)>ul>li:eq(0)").show();
		$(this).find(">ul>li:eq(0)>ul>li:eq(0)>a").css({"color":"#4f9bc5"});
		$(this).find(">ul>li:eq(0)>ul>li>ul").hide();
		$(this).find(">ul>li:eq(0)>ul>li:eq(0)>ul").show();
	} else {
		$(this).find(">ul").show();
		$(this).siblings().find(">ul").hide();
		$(this).find(">ul>li>ul").hide();
		$(this).find(">ul>li:eq(0)>ul").show();
		$(this).find(">ul>li>a").css({"color":"#4f9bc5"});
		$(this).find(">ul>li:eq(0)>a").css({"color":"#fff"});
	}
	return false;
});



	// 두번째 리스트 링크
	$(".timesWeather > li > ul > li").click(function(){
		if ($(this).find("> ul > li").has("ul")) {
			$(this).find("ul").show();
			$(this).siblings().find("ul").hide();
			$(this).find(">a").css("color","#fff");
			$(this).siblings().find(">a").css("color","#4f9bc5");
			$(this).find(">ul>li").siblings().find(">a").css("color","#fff");
			$(this).find(">ul>li:eq(0)>a").css("color","#4f9bc5");
			$(this).find(">ul>li").siblings().find("ul").hide();
			$(this).find(">ul>li:eq(0)>ul").show();

		} else {
			$(this).siblings().find(">a").css("color","#4f9bc5");
			$(this).find(">a").css("color","#fff");
			$(this).find("ul").show();
			$(this).siblings().find("ul").hide();
		}
			
		return false;
	});

	// ul이 하나 더 있는 long 리스트 링크 

	$(".long ul ul li").click(function(){
		$(this).find(">a").css("color","#4f9bc5");
		$(this).siblings().find(">a").css("color","#fff");
		$(this).find("ul").show();
		$(this).siblings().find("ul").hide();
		return false;
	});

	// 영상

	$(".vid > ul > li").click(function(){
		$(this).find("dd").css("z-index","10");
		$(this).siblings().find("dd").css("z-index","1");
		return false;
	});








	// section3




	$(".news > ul > li > ul").hide();
	$(".news > ul > li:first > ul").show();


	$(".news > ul > li").click(function(){
		$(this).find(">a").css("color","#fff");
		$(this).siblings().find(">a").css("color","#e3e3e3");
		$(this).find(">ul").show();
		$(this).siblings().find(">ul").hide();
		$(this).find(".see_more").css("z-index","10");
		$(this).siblings().find(".see_more").css("z-index","1");
		return false;
	});


	var current = 0;

	// 재생 정지 버튼
	$(".photoNews").append("<p class='playPause'><a href='' class='play'>재생</a><a href='' class='pause'>정지</a></p>");
	$(".photoNews ul").after("<p class='listNumbers'></p>");
	
	// 포토뉴스 이미지 펼치기
	for(var i = 0; i < $(".photoNews ul li").length; i++) {
		$(".photoNews .listNumbers").append("<span class='listNum'><a href=''>"+(i+1)+"</a></span>");

		$(".photoNews ul li").eq(i).css("left",i*100+"%");
		$(".photoNews .listNum a").eq(i).css("right","-"+(i*20)+"px");
	}

	$(".playPause").clone().insertAfter(".imgList");

	// 알림판 이미지 펼치기
	for(var f = 0; f < $(".imgList li").length; f++) {
		$(".imgList li").eq(f).append("<span class='listNum'><a href=''>"+(f+1)+"</a></span>");


		$(".imgList li span a").eq(f).css("right","-"+(f*20)+"px");

	}

	
	$(".photoNews .listNum a").eq(0).addClass("nav_on");
	$(".event_service .listNum a").eq(0).addClass("nav_on");
	




	// $(".listNum a").mouseenter(function(){
	// 	$(this).css("backgroundPositionX","0");
	// });
	// $(".listNum a").mouseleave(function(){
	// 	$(this).css("backgroundPositionX","-16px");
	// });




	// 포토뉴스 재생버튼 슬라이더
	$(".photoNews .playPause a:first").click(function(){
		$(this).css("backgroundPositionX","-64px");
		$(".photoNews .playPause a:eq(1)").css("backgroundPositionX","-48px");
		$(".photoNews ul li").eq(current).css("left","0").stop().animate({left:"-100%"},600)
		.next().css("left","100%").stop().animate({left:"0"},600);

		current++;
		$(".photoNews .listNum a").eq(current).addClass("nav_on").parent().siblings().find("a").removeClass("nav_on");

		if(current > $(".photoNews ul li").length-1) {
			current = 0;
			$(".photoNews ul li").eq(current).css("left","100%").stop().animate({left:"0"},600);
			$(".photoNews .listNum a").eq(current).addClass("nav_on").parent().siblings().find("a").removeClass("nav_on");
		}
		return false;
	});

	$(".photoNews .listNum a").click(function(){
		current = $(this).parent().index();
	 	var onIndex = $(".photoNews .listNum a.nav_on").parent().index();

		if (current<onIndex) {
			$(".photoNews ul li").eq(onIndex).css("left","0").stop().animate({left:"100%"},600);
			$(".photoNews ul li").eq(current).css("left","-100%").stop().animate({left:"0"},600);
			$(this).addClass("nav_on").parent().siblings().find("a").removeClass("nav_on");

		} else if (current>onIndex) {
			$(".photoNews ul li").eq(onIndex).css("left","0").stop().animate({left:"-100%"},600);
			$(".photoNews ul li").eq(current).css("left","100%").stop().animate({left:"0"},600);
			$(this).addClass("nav_on").parent().siblings().find("a").removeClass("nav_on");
		} 
		return false;
	});



	

	$(".photoNews .playPause a:eq(1)").click(function(){
		$(this).css("backgroundPositionX","-80px");
		$(".photoNews .playPause a:first").css("backgroundPositionX","-32px");
		timerStop();
		return false;
	});

	// 실행할 함수정리
		function autoClick() {
			$(".playPause a:first").trigger("click");
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

	// 알림판

	$(".event_service .playPause a:first").click(function(){

		$(this).css("backgroundPositionX","-64px");
		$(".event_service .playPause a:eq(1)").css("backgroundPositionX","-48px");

		$(".imgList li").eq(current).find("a img").css("zIndex","1");
		$(".imgList li").eq(current+1).find("a img").animate({zIndex:"10"},600);

		current++;
		$(".event_service .listNum a").eq(current).addClass("nav_on").parent().parent().siblings().find("a").removeClass("nav_on");

		if(current > $(".event_service .imgList li").length-1) {
			current = 0;
			$(".imgList li").eq(current).find("a img").css("zIndex","10");
			$(".imgList li").eq(current+1).find("a img").animate({zIndex:"1"},600);
			$(".event_service .listNum a").eq(current).addClass("nav_on").parent().parent().siblings().find("a").removeClass("nav_on");
		}
		return false;
	});


	// 알림판 클릭

	$(".event_service .listNum a").click(function(){
		var event_pic_num = $(this).index();
		$(this).parent().parent().find("a img").css("zIndex","15");
		$(this).parent().parent().siblings().find("a img").css("zIndex","1");
		$(this).css("backgroundPositionX","0");
		$(this).parent().parent().siblings().find("span a").css("backgroundPositionX","-16px");

		return false;
	});

});