/* ===========================================================

	Title: common.js
	Last Created: 2016-12-19
	
=========================================================== */

(function($){
	/* trigger when page is ready */
	$(document).ready(function (){
		
		user_agent();
		window_fixer();
		
		
	});
	
	
	
	
	$(window).load(function() {
		window_fixer();
		
		var url = $(location).attr('href');
		if(url.indexOf("?id=") != -1){
			var id = url.split("?id=");
			var $target = $('#' + id[id.length - 1]);
			if($target.length){
				var pos = $target.offset().top;
				$("html, body").animate({scrollTop:pos}, 800, 'swing');
			}
		}
		
		
	});
	
	
	
	
	
	
	
	
	
	
	$(window).resize(function() {
		window_fixer();
	});
	
	/* window_fixer */
	function window_fixer() {
		var header_h = $('.gl-header').outerHeight();
		var footer_h = $('.gl-footer').outerHeight();
		var hsize = $(window).height();
		var contents_h = hsize - footer_h;
		$('body').not('.local-home').find(".gl-main").css({
			"min-height": contents_h
		});
	}
	/* user_agent */
	function user_agent() {
			var ua = navigator.userAgent;
			if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
				$('body').addClass('mobile');
			} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
				$('body').addClass('tablet');
			} else {
				$('body').addClass('pc');
			}
	}
	
	

})(window.jQuery);