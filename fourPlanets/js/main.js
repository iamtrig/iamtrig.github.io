$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.


  // main menu 

  $("#mainMenu").click(function(){
  	$(".navBg, .navA").toggleClass("firstHide");

  	return false;
  });



});






