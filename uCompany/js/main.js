$(document).ready(function(){

// 기본 세팅
	$("#banner").css("opacity",0);
	$("#banner .link p").hide();
	$("#banner .link h1").hide();
	$("#banner .link a").hide();
	$("#banner").animate({"opacity":1},1000);
	$("#banner .link h1").delay(1000).slideDown(1000);
	$("#banner .link p").delay(1300).slideDown(1300);
	$("#banner .link a").delay(1500).fadeIn(700);


// 배너 슬라이딩
	var auto;
	var current = 0;
	var listNum = $("#banner > ul > li").length; 


	for(var i = 0; i < listNum; i++) {
		$("#banner > ul > li").eq(i).css("left",(i*100)+"%");
	}
	
	$(".pagination a").eq(current).addClass("selected");

	$(".next").click(function(){

		$("#banner > ul > li")
			.eq(current).css("left","0").stop().animate({left:"-100%"},800)
			.next().css("left","100%").stop().animate({left:"0"},800);

		current++; 
		$(".pagination a").eq(current).addClass("selected").siblings().removeClass("selected");

		if(current>listNum-1) {
			current = 0;
			$("#banner > ul > li")
			.eq(current).css("left","100%").stop().animate({left:"0"},800);
			$(".pagination a").eq(current).addClass("selected").siblings().removeClass("selected");
		}
		return false;
	});

	$(".prev").click(function(){

		$("#banner > ul > li")
			.eq(current).css("left","0").stop().animate({left:"100%"},800)
			.prev().css("left","-100%").stop().animate({left:"0"},800);

		current--; //current = current+1;
		$(".pagination a").eq(current).addClass("selected").siblings().removeClass("selected");

		if(current < 0) {
			current = listNum-1;
			$("#banner > ul > li")
			.eq(current).css("left","-100%").stop().animate({left:"0"},800);
			$(".pagination a").eq(current).addClass("selected").siblings().removeClass("selected");
		}
		return false;
	});

	$(".pagination a").click(function(){
		current = $(this).index();
		var onIndex = $(".paginaton a.selected").index();

		if (current<onIndex) { 
			$("#banner > ul > li").eq(onIndex).css("left","0").animate({left:"100%"},800);
			$("#banner > ul > li").eq(current).css("left","-100%").animate({left:"0"},800);
			$(this).addClass("selected").siblings().removeClass("selected");

		} else if (current>onIndex) { 
			$("#banner > ul > li").eq(onIndex).css("left","0").animate({left:"-100%"},800);
			$("#banner > ul > li").eq(current).css("left","100%").animate({left:"0"},800);
			$(this).addClass("selected").siblings().removeClass("selected");
		} 

		return false;
	});

	function autoClick() {
		$(".next").trigger("click");
	}

	function timer() {
		auto = setInterval(function(){autoClick()},4000);
	}

	function timerStop() {
		clearInterval(auto);
	}

	$("#banner > ul > li").mouseenter(function(){
		timerStop()
	});
	$("#banner > ul > li").mouseleave(function(){
		timer();
	});

	timer();




// 프로젝트 년도 클릭
	$("#project .width1000 ul li img").click(function(){
		$(this).parent().siblings().find("img").removeClass("hoverOver");
		$(this).addClass("hoverOver");
		$(this).parent().siblings().find(".description").hide();
		$(this).parent().find(".description").show();

		return false;
	});

// 프로젝트 메뉴
	$("#project .pagination a").click(function(){
		var projectNum = $(this).index();
		$(this).siblings().removeClass("selected");
		$(this).addClass("selected");
		$(".projectOl > li").hide();
		$(".projectOl > li").eq(projectNum).show();
		$(".projectOl > li").eq(projectNum).find("ul").show();
		return false;
	});





// 페이지 리사이즈시 스크롤메뉴
	$(window).resize(function() {
		w = $(window).width();
		height = $(window).height();
		getHeaderHeight = $('#banner').outerHeight();
		lastScrollPosition = 0;
		
		$(window).scroll(function(){
			
			var currentScrollPosition = $(window).scrollTop();

			if ( w >= 701 ) {
				if(currentScrollPosition > getHeaderHeight) {
					$(".bg").addClass("scrollCss");
					$(".bg1").addClass("scrollCss1");
					$("#header h1").addClass("scrollCssH1");
					$("#header h1 img").addClass("headerImgCss");
					$("#header nav").addClass("navTop");
					$("#header nav > a").addClass("navADeco");
					
				} else {
					$(".bg").removeClass("scrollCss");
					$(".bg1").removeClass("scrollCss1");
					$("#header nav").removeClass("navTop");
					$("#header h1").removeClass("scrollCssH1");
					$("#header h1 img").removeClass("headerImgCss");
					$("#header nav > a").removeClass("navADeco");
					
				} 
				lastScrollPosition = currentScrollPosition;
				
			} else if ( w <= 700 ) {
				$(".bg").removeClass("scrollCss");
				$(".bg1").removeClass("scrollCss1");
				$("#header nav").removeClass("navTop");
				$("#header h1").removeClass("scrollCssH1");
				$("#header h1 img").removeClass("headerImgCss");
				$("#header nav > a").removeClass("navADeco");
				
			} else {

			}


		});				
	});

// 스크롤 메뉴_페이지로드
	
	$(window).scroll(function(){
		w = $(window).width();
		height = $(window).height();
		getHeaderHeight = $('#banner').outerHeight();
		lastScrollPosition = 0;
		currentScrollPosition = $(window).scrollTop();

		if ( w >= 701 ) {
			
			if(currentScrollPosition > getHeaderHeight) {
				$(".bg").addClass("scrollCss");
				$(".bg1").addClass("scrollCss1");
				$("#header h1").addClass("scrollCssH1");
				$("#header h1 img").addClass("headerImgCss");
				$("#header nav").addClass("navTop");
				$("#header nav > a").addClass("navADeco");
				
			} else {
				$(".bg").removeClass("scrollCss");
				$(".bg1").removeClass("scrollCss1");
				$("#header nav").removeClass("navTop");
				$("#header h1").removeClass("scrollCssH1");
				$("#header h1 img").removeClass("headerImgCss");
				$("#header nav > a").removeClass("navADeco");
				
			} 
			lastScrollPosition = currentScrollPosition;
		} else {
			$(".bg").removeClass("scrollCss");
			$(".bg1").removeClass("scrollCss1");
			$("#header nav").removeClass("navTop");
			$("#header h1").removeClass("scrollCssH1");
			$("#header h1 img").removeClass("headerImgCss");
			$("#header nav > a").removeClass("navADeco");
			
		}


	});
	

	
	// 메뉴 버튼

	$("#header h2 a").click(function(){
		$(this).hide();
		$("#header nav").slideDown(300);
		return false;
	});
	$("#header h3 a").click(function(){
		$("#header h2 a").show();
		$("#header nav").slideUp(300);
		return false;
	});


});