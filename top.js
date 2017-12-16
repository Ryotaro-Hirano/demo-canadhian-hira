// JavaScript Document

$(function() {
	
	
	$(".gl-navigation-list__top a").attr("href", "#top");
	$(".gl-navigation-list__message a").attr("href", "#message");
	$(".gl-navigation-list__philosophy a").attr("href", "#philosophy");
	$(".gl-navigation-list__policy a").attr("href", "#policy");
	$(".gl-navigation-list__company a").attr("href", "#company");
	$(".gl-navigation-list__organization a").attr("href", "#organization");
	
	$(".scroll_btn a").click(function(){
		$.scrollTo("#message" , {duration: 1000, axis:"y"});
	});

	
	
});
