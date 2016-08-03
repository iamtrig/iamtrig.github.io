$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.


  // main menu 

  $("#mainMenu").click(function(){
  	$(".navBg, .navA").toggleClass("firstHide");

  	$(this).find("span:eq(0)").toggleClass("navTop");
  	$(this).find("span:eq(1)").toggleClass("navMid");
  	$(this).find("span:eq(2)").toggleClass("navBttm");

  	return false;
  });

  $(".btm .prevNext a.next").click(function(){

  	$(this).siblings().show();


  	return false;
  });





  // info planets


  $("#talk a").click(function(){

      $(this).toggleClass("changeBg");

      $("#talkSection, .hideRightBtm, .hideRightTop").toggleClass("showNow");

    return false;
  });



});


