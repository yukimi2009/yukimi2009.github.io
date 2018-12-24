$("#back-top").hide();
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$("#back-top").fadeIn()
		} else {
			$("#back-top").fadeOut()
		}
	});
	$("#back-top a").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 800);
		return false
	})
});

// $(document).ready(function() {
// 	var dateBegin = new Date("2015/01/03 23:15:15");
// 	var dateEnd = new Date();
// 	var dateDiff = dateEnd.getTime() - dateBegin.getTime();
// 	var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
// 	var timeLeft = dateDiff % (24 * 3600 * 1000);
// 	var hours = Math.floor(timeLeft / (3600 * 1000));
// 	var time = dayDiff + "d " + hours + "h";
// 	$("#runtime").html(time)
// });

var toc = document.querySelector(".post-toc");
function tocShow() {
  var clientHeight = document.documentElement.clientHeight;	
	var clientWidth = document.documentElement.clientWidth;
	var tocWrapper = document.querySelector(".content-wrapper__inner");
  var leftMargin = (clientWidth - tocWrapper.clientWidth) / 2 - toc.clientWidth - 50;
	if (toc.clientHeight < clientHeight * 0.6 && leftMargin >= 50) {
		toc.style.visibility = "visible";
	} else {
		toc.style.visibility = "hidden";
	}
}
if ( !! toc) {
	window.addEventListener("resize", tocShow, false);
	tocShow()
};

function tocScroll(){
 var alis = $('.post :header');
 var toc_alis = $('.post-toc').find('a');
 var scroll_height = $(window).scrollTop();
 for(var i =0; i<alis.length; i++){
   var a_height = $(alis[i]).offset().top;
   if (a_height < scroll_height){
     toc_alis.removeClass('active');
     $(toc_alis[i]).addClass('active');
   }
 }
}
$(function() {
 $(window).bind('scroll',tocScroll); 
});
