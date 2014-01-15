$(document).ready(function() {
	$(".leftLine").css({
		height: $(window).height() - (58*2)
	});

	$(".rightLine").css({
		height: $(window).height() - (58*2)
	});

	$(".topLine").css({
		width: $(window).width() - (64*2)
	});

	$(".bottomLine").css({
		width: $(window).width() - (64*2)
	});

	$(".center").each(function(value,index){
		$(this).css({
			left: $(document).width()/2 - $(this).width()/2	
		});
	});

	$(window).resize(function(){
		$(".leftLine").css({
			height: $(window).height() - (58*2)
		});

		$(".rightLine").css({
			height: $(window).height() - (58*2)
		});

		$(".topLine").css({
			width: $(window).width() - (64*2)
		});

		$(".bottomLine").css({
			width: $(window).width() - (64*2)
		});

		$(".center").each(function(value,index){
			$(this).css({
				left: $(document).width()/2 - $(this).width()/2	
			});
		});
	});

	$(".button").click(function(e) {
		if( $(this).hasClass("website") || $(this).hasClass("download") ){
			return true;
		}

		e.preventDefault();

		$(".button").removeClass("active");
		$(this).addClass("active");

		if( $(this).hasClass("about") ) {
			$("#logo").fadeOut();
			$("#instructions").fadeOut();
			$("#about").fadeIn();
		} else if( $(this).hasClass("instructions") ) {
			$("#logo").fadeOut();
			$("#instructions").fadeIn();
			$("#about").fadeOut();
		}
	});

	$("body").animate({
		opacity: 1
	});
});