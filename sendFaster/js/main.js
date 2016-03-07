$(document).ready(function(){

	$("header .burger").click(function(){
		$(this).hide();
		$("header nav").slideDown();
		$(".close").show();

		return false;
	});

	$("header .close").click(function(){
		$(this).hide();
		$("header nav").slideUp();
		$(".burger").show();

		return false;
	});
	
	
	$(".mainUl .subUl > li > h2").click(function(){
		if ( $(window).width() < 680 ) {

			$(this).css("color","#F90D1A");
			$(this).parent().siblings().find("h2").css("color","#919191");
			$(this).parent().find("p, ul").show();
			$(this).parent().siblings().find("p, ul").hide();
			
		} else  {
			$(".mainUl .subUl > li > h2").css("color","#919191");
			$("#wrapper .mainUl .subUl > li p, #wrapper .mainUl .subUl > ul").show();
		}

		return false;
	});
	

	


	


// main banner sliding effect
	
	var auto;
	var current = 0;
	var listNum = $("#banner > ul > li").length; 


	for(var i = 0; i < listNum; i++) {
		$("#banner > ul > li").eq(i).css("left",(i*100)+"%");
	}

	
	$(".num").eq(current).addClass("numOn");
	$(".next").click(function(){

		$("#banner > ul > li")
			.eq(current).css("left","0").stop().animate({left:"-100%"},800)
			.next().css("left","100%").stop().animate({left:"0"},800);

		current++; 
		$(".num").eq(current).addClass("numOn").siblings().removeClass("numOn");

		if(current>listNum-1) {
			current = 0;
			$("#banner > ul > li")
			.eq(current).css("left","100%").stop().animate({left:"0"},800);
			$(".num").eq(current).addClass("numOn").siblings().removeClass("numOn");
		}
		return false;
	});

	$(".prev").click(function(){

		$("#banner > ul > li")
			.eq(current).css("left","0").stop().animate({left:"100%"},800)
			.prev().css("left","-100%").stop().animate({left:"0"},800);

		current--; //current = current+1;
		$(".num").eq(current).addClass("numOn").siblings().removeClass("numOn");

		if(current < 0) {
			current = listNum-1;
			$("#banner > ul > li")
			.eq(current).css("left","-100%").stop().animate({left:"0"},800);
			$(".num").eq(current).addClass("numOn").siblings().removeClass("numOn");
		}
		return false;
	});

	$(".num").click(function(){
		current = $(this).index();
		var onIndex = $(".num.numOn").index();

		if (current<onIndex) { 
			$("#banner > ul > li").eq(onIndex).css("left","0").animate({left:"100%"},800);
			$("#banner > ul > li").eq(current).css("left","-100%").animate({left:"0"},800);
			$(this).addClass("numOn").siblings().removeClass("numOn");

		} else if (current>onIndex) { 
			$("#banner > ul > li").eq(onIndex).css("left","0").animate({left:"-100%"},800);
			$("#banner > ul > li").eq(current).css("left","100%").animate({left:"0"},800);
			$(this).addClass("numOn").siblings().removeClass("numOn");
		} 

		return false;
	});

	function autoClick() {
		$(".next").trigger("click");
	}

	function timer() {
		auto = setInterval(function(){autoClick()},10000);
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


// nav

	$("header nav a").click(function(){
		$(this).css("borderBottom","2px solid #F90D1A");
		$(this).siblings().css("borderBottom","none");
	});

});