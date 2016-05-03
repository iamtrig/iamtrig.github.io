
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








	


// main banner sliding effect_BEST ITEMS
	
	var auto;
	var current = 0;
	var listNum = $(".banFirstUl > li:eq(0) .banThirdUl li").length; 

	
	$(".pagination.page0 a").eq(current).addClass("paginationClass");

	$(".next").click(function(){

		$(".banFirstUl > li:eq(0) .banThirdUl li").siblings().removeClass("moveUp").eq(current).next().addClass("moveUp")
			;
		// $(".banFirstUl > li:eq(0) .banSecondUl > li").eq(0).addClass("showing");

		current++; 
		$(".pagination.page0 a").eq(current).addClass("paginationClass").siblings().removeClass("paginationClass");

		if(current==3) {
			$(".banFirstUl > li:eq(0) .banSecondUl > li").eq(0).find(">a").removeClass("showing");
			$(".banFirstUl > li:eq(0) .banThirdUl.marginTop li").addClass("moveUp");
			$(".banFirstUl > li:eq(0) .banSecondUl > li:eq(1) > a").addClass("showing");
		}

		if(current>listNum-1) {
			$(".banFirstUl > li:eq(0) .banSecondUl > li").eq(0).find(">a").addClass("showing");
			$(".banFirstUl > li:eq(0) .banSecondUl > li:eq(1) > a").removeClass("showing");
			$(".banFirstUl > li:eq(0) .banThirdUl.marginTop li").removeClass("moveUp");
			current = 0;
			$(".banFirstUl > li:eq(0) .banThirdUl li").siblings().removeClass("moveUp")
			.eq(current).addClass("moveUp");
			$(".pagination.page0 a").eq(current).addClass("paginationClass").siblings().removeClass("paginationClass");
		}
		return false;
	});

	$(".pagination.page0 a").click(function(){
		current = $(this).index();
		var onIndex = $(".pagination.page0 a.paginationClass").index();

		if (current<onIndex) { 
			$(".banFirstUl > li:eq(0) .banThirdUl li").eq(onIndex).addClass("moveUp");
			$(".banFirstUl > li:eq(0) .banThirdUl li").eq(current).removeClass("moveUp");
			$(this).addClass("paginationClass").siblings().removeClass("paginationClass");

		} else if (current>onIndex) { 
			$(".banFirstUl > li:eq(0) .banThirdUl li").eq(onIndex).addClass("moveUp");
			$(".banFirstUl > li:eq(0) .banThirdUl li").eq(current).removeClass("moveUp");
			$(this).addClass("paginationClass").siblings().removeClass("paginationClass");
		} 

		return false;
	});

	function autoClick() {
		$(".next").trigger("click");
	}

	function timer() {
		auto = setInterval(function(){autoClick()},2500);
	}

	function timerStop() {
		clearInterval(auto);
	}

	$(".banFirstUl > li:eq(0) .banThirdUl li").mouseenter(function(){
		timerStop()
	});
	$(".banFirstUl > li:eq(0) .banThirdUl li").mouseleave(function(){
		timer();
	});

	timer();










// SLIDING EVENT


	var auto_;
	var current_ = 0;
	var listNum_ = $(".banFirstUl > li:eq(1) .banThirdUl li").length; 

	
	$(".pagination.page1 a").eq(current_).addClass("paginationClass");

	$(".prev").click(function(){

		$(".banFirstUl > li:eq(1) .banThirdUl li").siblings().removeClass("moveUp").eq(current_).next().addClass("moveUp")
			;
		// $(".banFirstUl > li:eq(0) .banSecondUl > li").eq(0).addClass("showing");

		current_++; 
		$(".pagination.page1 a").eq(current_).addClass("paginationClass").siblings().removeClass("paginationClass");

		if(current_==2) {
			$(".banFirstUl > li:eq(1) .banSecondUl > li").eq(0).find(">a").removeClass("showing");
			$(".banFirstUl > li:eq(1) .banThirdUl.marginTop li").addClass("moveUp");
			$(".banFirstUl > li:eq(1) .banSecondUl > li:eq(1) > a").addClass("showing");
			$(".banFirstUl > li:eq(1) .banThirdUl li").eq(2).removeClass("moveUp");
		} else if(current_==3) {
			$(".banFirstUl > li:eq(1) .banSecondUl > li").eq(0).find(">a").addClass("showing");
			$(".banFirstUl > li:eq(1) .banThirdUl.marginTop li").removeClass("moveUp");
			$(".banFirstUl > li:eq(1) .banSecondUl > li:eq(1) > a").removeClass("showing");
			$(".banFirstUl > li:eq(1) .banThirdUl li").eq(2).addClass("moveUp");
		}

		if(current_>listNum_-1) {
			$(".banFirstUl > li:eq(1) .banSecondUl > li").eq(0).find(">a").addClass("showing");
			$(".banFirstUl > li:eq(1) .banSecondUl > li:eq(1) > a").removeClass("showing");
			$(".banFirstUl > li:eq(1) .banThirdUl.marginTop li").removeClass("moveUp");
			current_ = 0;
			$(".banFirstUl > li:eq(1) .banThirdUl li").siblings().removeClass("moveUp")
			.eq(current_).addClass("moveUp");
			$(".pagination.page1 a").eq(current_).addClass("paginationClass").siblings().removeClass("paginationClass");
		}
		return false;
	});

	$(".pagination.page1 a").click(function(){
		current_ = $(this).index();
		var onIndex_ = $(".pagination.page1 a.paginationClass").index();

		if (current_<onIndex_) { 
			$(".banFirstUl > li:eq(1) .banThirdUl li").eq(onIndex_).removeClass("moveUp");
			$(".banFirstUl > li:eq(1) .banThirdUl li").eq(current_).addClass("moveUp");
			$(this).addClass("paginationClass").siblings().removeClass("paginationClass");

		} else if (current_>onIndex_) { 
			$(".banFirstUl > li:eq(1) .banThirdUl li").eq(onIndex_).removeClass("moveUp");
			$(".banFirstUl > li:eq(1) .banThirdUl li").eq(current_).addClass("moveUp");
			$(this).addClass("paginationClass").siblings().removeClass("paginationClass");
		} 

		return false;
	});

	function autoClick_() {
		$(".prev").trigger("click");
	}

	function timer_() {
		auto_ = setInterval(function(){autoClick_()},2500);
	}

	function timerStop_() {
		clearInterval(auto_);
	}

	$(".banFirstUl > li:eq(1) .banThirdUl li").mouseenter(function(){
		timerStop_()
	});
	$(".banFirstUl > li:eq(1) .banThirdUl li").mouseleave(function(){
		timer_();
	});

	// timer_();









	// $(".pagination.page1 a").click(function(){
	// 	var thisNum = $(this).index();

	// 	$(this).siblings().removeClass("paginationClass");
	// 	$(this).addClass("paginationClass");
	

	// 	if ( thisNum == 3 ) {
	// 		$(".banFirstUl > li.banner1 .banSecondUl >  li").eq(0).find(".banThirdUl li").removeClass("moveUp");
	// 		$(".banFirstUl > li.banner1 .banSecondUl >  li").eq(1).find(".banThirdUl li").addClass("moveUp");
	// 	} else {
	// 		$(".banFirstUl > li.banner1 .banSecondUl > li").eq(0).find(".banThirdUl li").eq(thisNum).addClass("moveUp");
	// 		$(".banFirstUl > li.banner1 .banSecondUl > li").eq(0).find(".banThirdUl li").eq(thisNum).siblings().removeClass("moveUp");
	// 		$(".banFirstUl > li.banner1 .banSecondUl >  li").eq(1).find(".banThirdUl li").removeClass("moveUp");
	// 		// $(".banSecondUl >  li").eq(1).find(".banThirdUl").hide();
	// 		// $(".banSecondUl >  li").eq(0).find(".banThirdUl").show();
	// 		// $(".banThirdUl li").eq(thisNum).show();
	// 	}

	// 	if ( thisNum == 2 ) {
	// 		$(".banFirstUl > li.banner1 .banSecondUl > li").eq(1).find(">a").addClass("showing");
	// 		$(".banFirstUl > li.banner1 .banSecondUl > li").eq(0).find(">a").removeClass("showing");
	// 	} else {
	// 		$(".banFirstUl > li.banner1 .banSecondUl > li").eq(0).find(">a").addClass("showing");
	// 		$(".banFirstUl > li.banner1 .banSecondUl > li").eq(1).find(">a").removeClass("showing");
	// 	}

	// 	return false;
	// });


	$(".banFirstUl > li > a").click(function(){

		var thisIndex = $(this).parent().index();
		
		if ( thisIndex == 0 ) { 
			timerStop_();
			timer();
			$("li.banner0 > ul").show();
			$("li.banner1 > ul").hide();
			$(".pagination.page0").show();
			$(".pagination.page1").hide();
			$(".banner1 .banSecondUl > li > a").hide();
			$(".banner0 .banSecondUl > li > a").show();
		} else { 
			timerStop();
			timer_();
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

