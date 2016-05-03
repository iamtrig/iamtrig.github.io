
$(document).ready(function(){

	
	

	$(".firstNav > li > a").click(function(){
		var thisOne = $(this).parent().index();

		$(this).parent().siblings().find(">a").removeClass("navyColour");
		$(this).addClass("navyColour");
		$(this).parent().find("ul").show();
		$(this).parent().siblings().find("ul").hide();

		if ( thisOne == 0 ) {
			$("#logIn").addClass("accLog");
			$(".headerBg h2").addClass("accH2");
			$("#logIn").removeClass("homeLog");
			$(".headerBg h2").removeClass("homeH2");
		} else if (thisOne == 1) {
			$("#logIn").removeClass("accLog");
			$(".headerBg h2").removeClass("accH2");
			$("#logIn").addClass("homeLog");
			$(".headerBg h2").addClass("homeH2");
		} else {
			$("#logIn").removeClass("homeLog accLog");
			$(".headerBg h2").removeClass("homeH2 accH2");
		}
		return false;
	});


	$(".pagination.page0 a").click(function(){
		var thisNum = $(this).index();

		$(this).siblings().removeClass("paginationClass");
		$(this).addClass("paginationClass");
	

		if ( thisNum == 3 ) {
			$(".banFirstUl > li.banner0 .banSecondUl >  li").eq(0).find(".banThirdUl li").removeClass("moveUp");
			$(".banFirstUl > li.banner0 .banSecondUl >  li").eq(1).find(".banThirdUl li").addClass("moveUp");
			$(".banFirstUl > li.banner0 .banSecondUl > li").eq(1).find(">a").addClass("showing");
			$(".banFirstUl > li.banner0 .banSecondUl > li").eq(0).find(">a").removeClass("showing");
		} else {
			$(".banFirstUl > li.banner0 .banSecondUl > li").eq(0).find(".banThirdUl li").eq(thisNum).addClass("moveUp");
			$(".banFirstUl > li.banner0 .banSecondUl > li").eq(0).find(".banThirdUl li").eq(thisNum).siblings().removeClass("moveUp");
			$(".banFirstUl > li.banner0 .banSecondUl >  li").eq(1).find(".banThirdUl li").removeClass("moveUp");
			$(".banFirstUl > li.banner0 .banSecondUl > li").eq(0).find(">a").addClass("showing");
			$(".banFirstUl > li.banner0 .banSecondUl > li").eq(1).find(">a").removeClass("showing");
			// $(".banSecondUl >  li").eq(1).find(".banThirdUl").hide();
			// $(".banSecondUl >  li").eq(0).find(".banThirdUl").show();
			// $(".banThirdUl li").eq(thisNum).show();
			
		}

		return false;
	});


	$(".pagination.page1 a").click(function(){
		var thisNum = $(this).index();

		$(this).siblings().removeClass("paginationClass");
		$(this).addClass("paginationClass");
	

		if ( thisNum == 3 ) {
			$(".banFirstUl > li.banner1 .banSecondUl >  li").eq(0).find(".banThirdUl li").removeClass("moveUp");
			$(".banFirstUl > li.banner1 .banSecondUl >  li").eq(1).find(".banThirdUl li").addClass("moveUp");
		} else {
			$(".banFirstUl > li.banner1 .banSecondUl > li").eq(0).find(".banThirdUl li").eq(thisNum).addClass("moveUp");
			$(".banFirstUl > li.banner1 .banSecondUl > li").eq(0).find(".banThirdUl li").eq(thisNum).siblings().removeClass("moveUp");
			$(".banFirstUl > li.banner1 .banSecondUl >  li").eq(1).find(".banThirdUl li").removeClass("moveUp");
			// $(".banSecondUl >  li").eq(1).find(".banThirdUl").hide();
			// $(".banSecondUl >  li").eq(0).find(".banThirdUl").show();
			// $(".banThirdUl li").eq(thisNum).show();
		}

		if ( thisNum == 2 ) {
			$(".banFirstUl > li.banner1 .banSecondUl > li").eq(1).find(">a").addClass("showing");
			$(".banFirstUl > li.banner1 .banSecondUl > li").eq(0).find(">a").removeClass("showing");
		} else {
			$(".banFirstUl > li.banner1 .banSecondUl > li").eq(0).find(">a").addClass("showing");
			$(".banFirstUl > li.banner1 .banSecondUl > li").eq(1).find(">a").removeClass("showing");
		}

		return false;
	});


	$(".banFirstUl > li > a").click(function(){

		var thisIndex = $(this).parent().index();
		
		if ( thisIndex == 0 ) { 
			$("li.banner0 > ul").show();
			$("li.banner1 > ul").hide();
			$(".pagination.page0").show();
			$(".pagination.page1").hide();
			$(".banner1 .banSecondUl > li > a").hide();
			$(".banner0 .banSecondUl > li > a").show();
		} else { 
			$("li.banner0 > ul").hide();
			$("li.banner1 > ul").show();
			$(".pagination.page1").show();
			$(".pagination.page0").hide();
			$(".banner0 .banSecondUl > li > a").hide();
			$(".banner1 .banSecondUl > li > a").show();
		}

		$(this).parent().siblings().find(">a").removeClass("navyColour");
		$(this).addClass("navyColour");


		return false;
	});


	// navigation
	$('.navDeco').click(function(){

		if ($(window).innerWidth() <= 700 ) {
			$(".navBg, .navNavy, .headerBg h2, .headerBg #logIn").toggleClass('navBack');
			$(this).toggleClass('open');
			$("header nav").toggleClass('navBack');

		} else {
			$(".navBg, .navNavy").toggleClass('navBack');
			$(this).toggleClass('open');
			$("header nav").toggleClass('navBack');
			// $(".headerBg h2, .headerBg #logIn").removeClass('navBack');

		}
		return false;
	});



});

