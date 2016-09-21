$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.


	$(document).ready(function(){

		$(".popularSec > ul > li > a").mouseenter(function(){
			if ($(this).parent().hasClass("active")) {

			} else {
				$(this).parent().find(" .pickMonth a").css("color","#fff");
			}
		});

		$(".popularSec > ul > li > a").mouseleave(function(){
			if ($(this).parent().hasClass("active")) {

			} else {
				$(this).parent().find(" .pickMonth a").css("color","#131313");
			}
		});

		$(".popularSec > ul ol li a").click(function(){
			$(this).addClass("active");
			$(this).parent().siblings().find(">a").removeClass("active");

			return false;
		});
	});




});






