
$(document).ready(function(){


$("#banner ul li:first-child dl dd").addClass("defaultAni");




$(".pagination a").click(function(){
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	return false;
});

$('.menu').click (function(){
  $(this).toggleClass('open');
});



function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 500);
	    }
	});
}

smoothScroll();






// $(window).resize(function() {
// 	w = $(window).width();
// 	height = $(window).height();
// 	getHeaderHeight = $('#banner').outerHeight()-20;
// 	lastScrollPosition = 0;
	
// 	$(window).scroll(function(){
		
// 		var currentScrollPosition = $(window).scrollTop();

// 		if ( w >= 800 ) {
// 			if(currentScrollPosition > getHeaderHeight) {
// 				$(".headerBg").addClass("fixedPos");
// 				$("header h1 a svg").addClass("svgChange");
				
// 			} else {
// 				$(".headerBg").removeClass("fixedPos");
// 				$("header h1 svg").removeClass("svgChange");
				
// 			} 
// 			lastScrollPosition = currentScrollPosition;
// 		}
			
// 		// } else if ( w <= 700 ) {
// 		// 	$(".bg").removeClass("scrollCss");
// 		// 	$(".bg1").removeClass("scrollCss1");
// 		// 	$("#header nav").removeClass("navTop");
// 		// 	$("#header h1").removeClass("scrollCssH1");
// 		// 	$("#header h1 img").removeClass("headerImgCss");
// 		// 	$("#header nav > a").removeClass("navADeco");
			
// 		// } else {

// 		// }


// 	});				
// });



$(window).scroll(function(){
	w = $(window).width();

	getHeaderHeight = $('#banner').outerHeight();
	lastScrollPosition = 0;
	currentScrollPosition = $(window).scrollTop();

	getHeaderHeight = getHeaderHeight-10;


	if(currentScrollPosition > getHeaderHeight) {
		$(".headerBg").addClass("fixedPos");
		$("header").addClass("headerChange");
		$("header h1 a").addClass("svgChange");
		$(".btn0").addClass("hamChange");
		$("#mainFind").addClass("formChange");
		
	} else {
		$(".headerBg").removeClass("fixedPos");
		$("header").removeClass("headerChange");
		$("header h1 a").removeClass("svgChange");
		$(".btn0").removeClass("hamChange");
		$("#mainFind").removeClass("formChange");
		
	} 
	lastScrollPosition = currentScrollPosition;


});


$(window).scroll(function(){
	w = $(window).width();

	getHeaderHeight = $('#banner').outerHeight();
	lastScrollPosition = 0;
	currentScrollPosition = $(window).scrollTop();

	getHeaderHeight = getHeaderHeight-10;


	if(currentScrollPosition > getHeaderHeight) {
		$(".headerBg").addClass("fixedPos");
		$("header").addClass("headerChange");
		$("header h1 a").addClass("svgChange");
		$(".btn0").addClass("hamChange");
		$("#mainFind").addClass("formChange");
		
	} else {
		$(".headerBg").removeClass("fixedPos");
		$("header").removeClass("headerChange");
		$("header h1 a").removeClass("svgChange");
		$(".btn0").removeClass("hamChange");
		$("#mainFind").removeClass("formChange");
		
	} 
	lastScrollPosition = currentScrollPosition;


});

// default settting for animation

$(".attenTrans, .whoImg, .mobile, .tmImg0, .tmImg1, .tmImg2, .upImg0, .upImg1, .upImg2, .upImg3, .upImg4, .upImg5, .upImg6").addClass("basicSettingY");
$(".tmP, .upP, .artistImg, .submitBg, .appBg, .appBg1, .bannerBg span, .rec5, rec6").addClass("basicSettingX");

$(".tmImg0, .tmImg1, .tmImg2, .upImg0, .upImg1, .upImg2, .upImg3, .upImg4, .upImg5, .upImg6, .artistImg, .mobile").addClass("default");
$(".tmP, .attenTrans, .upP, .appBg, .appBg1").addClass("defaultTmP");


// $(".bannerBg span, .rec5, .rec6, .rec0, .rec1, .rec2, .rec3, .rec4").addClass("opacityDown");
$(".bannerBg span:eq(0)").addClass("leftZero");
$(".bannerBg span:eq(1)").addClass("rightZero");

// $(".bannerBg span").delay(500).queue(function(next) {
//   $(".bannerBg span").removeClass("opacityDown");

//   next();
// });

// $(".bannerBg span").delay(1500).queue(function(next) {

// 	$(".pastPresentFuture > span").removeClass("opacityDown");

// 	// $(".rec:eq(i)").removeClass("opacityDown");
// 	// $(".rec5, .rec6, .rec0, .rec1, .rec2, .rec3, .rec4").removeClass("opacityDown");
//   $(".bannerBg span:eq(0)").removeClass("leftZero");
// 	$(".bannerBg span:eq(1)").removeClass("rightZero");
//   next();
// });

// scrolling animation effect

$(window).scroll(function(){
	w = $(window).width();

	getHeaderHeight = $('#banner').outerHeight();
	getThisMonthHeight = $('#thisMonth').outerHeight();
	getUpcomingHeight = $('#upcoming').outerHeight();
	getAttentiongHeight = $('#attention').outerHeight();
	getSubmitgHeight = $('#submit').outerHeight();
	lastScrollPosition = 0;
	currentScrollPosition = $(window).scrollTop();

	getHeaderHeight = getHeaderHeight;
	getThisMonthHeight += getHeaderHeight;
	getUpcomingHeight += getThisMonthHeight;
	getAttentiongHeight += getUpcomingHeight;
	getSubmitgHeight += getAttentiongHeight;


	if(currentScrollPosition > getHeaderHeight-500) {

		$(".tmImg0").removeClass("default");
		$(".firstUl li:eq(1) .tmP").removeClass("defaultTmP");
	}  else {
		$(".tmImg0").addClass("default");
		$(".firstUl li:eq(1) .tmP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition > getHeaderHeight+100) {

		$(".tmImg1").removeClass("default");
		$(".firstUl li:eq(2) .tmP").removeClass("defaultTmP");
	}  else {
		$(".tmImg1").addClass("default");
		$(".firstUl li:eq(2) .tmP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition > getHeaderHeight+800) {

		$(".tmImg2").removeClass("default");
		$(".firstUl li:eq(3) .tmP").removeClass("defaultTmP");
	}  else {
		$(".tmImg2").addClass("default");
		$(".firstUl li:eq(3) .tmP").addClass("defaultTmP");
		
	} 


	if(currentScrollPosition > getThisMonthHeight-400) {

		$(".upImg0").removeClass("default");
		$("#june li:eq(0) .upP").removeClass("defaultTmP");
	}  else {
		$(".upImg0").addClass("default");
		$("#june li:eq(0) .upP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition > getThisMonthHeight+200) {

		$(".upImg1, .upImg2, .upImg3").removeClass("default");
		$("#june li:eq(1) .upP, #june li:eq(2) .upP, #june li:eq(3) .upP").removeClass("defaultTmP");
	}  else {
		$(".upImg1, .upImg2, .upImg3").addClass("default");
		$("#june li:eq(1) .upP, #june li:eq(2) .upP, #june li:eq(3) .upP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition> getThisMonthHeight+1000 ) {

		$(".upImg4, .upImg5, .upImg6").removeClass("default");
		$("#july .upP").removeClass("defaultTmP");
	}  else {
		$(".upImg4, .upImg5, .upImg6").addClass("default");
		$("#july .upP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition> getUpcomingHeight-500 ) {
		$(".artistImg").removeClass("default");
		$(".attenTrans").removeClass("defaultTmP");
	}  else {
		$(".artistImg").addClass("default");
		$(".attenTrans").addClass("defaultTmP");
		
	} 


	if(currentScrollPosition> getAttentiongHeight-500 ) {
		$(".whoImg").removeClass("default");
		$(".submitBg").removeClass("defaultTmP");
	}  else {
		$(".whoImg").addClass("default");
		$(".submitBg").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition> getSubmitgHeight-500 ) {
		$(".mobile").removeClass("default");
		$(".appBg, .appBg1").removeClass("defaultTmP");
	}  else {
		$(".mobile").addClass("default");
		$(".appBg, .appBg1").addClass("defaultTmP");
		
	} 


	// lastScrollPosition = currentScrollPosition;


});

$(".download a").mouseenter(function(){
	$("#app .mobile span").addClass("addApp");
	return false;
});
$(".download a").mouseleave(function(){
	$("#app .mobile span").removeClass("addApp");
	return false;
});


// play and pause btns

$(".preview a").click(function(){
	$(this).hide();
	$(this).siblings().css("display","inline-block");


	$(".playLine .dot").animate({marginLeft:160},30000);


	return false;
});



$("#banner .pagination a").click(function(){
	var thisIndex = $(this).index();

	$("#banner ul li").eq(thisIndex).removeClass("hideLi").addClass("showLi");
	$("#banner ul li").eq(thisIndex).siblings().removeClass("showLi").addClass("hideLi");

	if(thisIndex == 1) {
		$(".bannerBg").addClass("secondBg");
		$(".bannerBg span:eq(0)").removeClass("leftZero");
		$(".bannerBg span:eq(1)").removeClass("rightZero");
	} else {
		$(".bannerBg").removeClass("secondBg");
		$(".bannerBg span:eq(0)").addClass("leftZero");
		$(".bannerBg span:eq(1)").addClass("rightZero");
	}

	return false;
});







});