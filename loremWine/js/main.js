$(document).ready(function(){
	
	$("#news article").append("<p></p>");

	for (var i = 0; i < $("#news li").length; i++) {
		$("#news p").append("<a href=''>"+(i+1)+"</a>");

	}

	if ($(window).width() < 800 ) {
		$(".navUl").css("opacity","0.9");
		$("#header h2 a ").click(function(){
		$(this).hide();
		$("#header h3 a").show();
		$(".navUl").slideDown(700);
		$(".chooseLang p").slideDown(1000);
		return false;
	});
	} else  { 
		$(".navUl").show();
	}

	

	$("#header h3 a ").click(function(){
		$(this).hide();
		$("#header h2 a").show();
		$(".navUl").slideUp(500);
		$(".chooseLang p").hide();
		return false;
	});



	$("#news p a").click(function(){
			var num = $(this).index();
			$(this).css("color","#691A19");
			$(this).siblings().css("color","#4F4F4F");
			$("#news ol li").eq(num).show();
			$("#news li").eq(num).siblings().hide();
		return false;
		});

	

});