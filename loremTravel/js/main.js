// burger

$(".mainNav").hide();

$("#header h2").click(function(){
	$(".mainNav").show();
	$("#header p").show();
	return false;
});

$("#header p").click(function(){
	$(".mainNav").hide();
	$(this).hide();
	return false;
});


// checkbox

$(".resultsList li").click(function(){
	$(this).find(".checkBox").css("backgroundColor","#F21515");
	$(this).find(">a").css("color","#F21515");
	return false;
});


// interest 

$(".interest li").click(function(){
	$(this).find("dl").toggleClass("toggleBlock");
	return false;
});







if ($(window).width() >=850) {
	$(".num span").show();
	$("#section1 h3, #section1 p").hide();
	$(".num span:eq(0)").css("z-index","30");
	$(".num span:eq(1)").css("z-index","20");
	$(".num span:eq(2)").css("z-index","10");

	setInterval(function() {
		$(".num span:eq(0)").fadeOut(1000);
	}, 1000);

	setInterval(function() {
	$(".num span:eq(1)").fadeOut(1000);
	}, 2000);

	setInterval(function() {
	$(".num span:eq(2)").fadeOut(1000);
	}, 3000);


	setInterval(function() {
		$("#section1 h3").fadeIn(1000);
	}, 4500);
	
	setInterval(function() {
		$("#section1 p").fadeIn(1000);
	}, 4900);

	setInterval(function() {
		$(".plane").animate({marginLeft:"100%"},5000);

	}, 5000);

	setInterval(function() {
		$("#section1 h3").css("color","#855F5F");
	}, 7800);

	setInterval(function() {
		$(".ticket_bg p").animate({marginTop:"-30px"},1000);
	}, 9000);

	setInterval(function() {
		$("#section1 h3").animate({paddingTop:"40px"},1500);
		$("#section1").animate({height:"300px"},1500);
		$(".ticket_bg p").css("color","#B3A0A0");
	// 	// $("#section1").css("background","url('imgs/swirl-973775_1920.jpg') no-repeat");
	}, 10000);


	


} else if ($(window).width() <=849) {
	$(".ticket_bg p").css({"marginTop":"-30px","color":"#B3A0A0"});
	$("#section1 h3").css("color","#855F5F");
}

// setInterval(function() {
// 	$(".ticket_bg p").animate({marginTop:"-30px"},1000);
// }, 3500);

// setInterval(function() {
// 	$(".ticket_bg p").css("color","#C37B7B");
// 	$("#section1").css("background","url('imgs/new-york-city-336475_1920.jpg') no-repeat");
// }, 4500);



// section3 li imgs 


$("#section3 ul li").mouseenter(function(){
	$(this).animate({backgroundSize:"1100px"},1);
	$(this).find(">a").animate({fontSize:"2.5em",lineHeight:"200px"},300);
	$(this).find(">a").css("background","none");
	$(this).find("dl").show(200);
	// $(this).animate({backgroundSize:"185%"},300);

});

$("#section3 ul li").mouseleave(function(){
	$(this).animate({backgroundSize:"1000px"},1);
	$(this).find(">a").animate({fontSize:"2em",lineHeight:"260px"},100);
	$(this).find(">a").css("background","url('imgs/black_bg.png')");
	$(this).find("dl").hide(100);
	// $(this).animate({backgroundSize:"180%"},100);

});


// for (var i = 1; i < 4; i++) {
// 	$(".ticket_bg").prepend("<span class'num'>"+i+"</span>");
// }




