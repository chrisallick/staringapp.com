center_small = function() {
	$(".leftLine").css({
		height: $(document).height() - (64*2)
	});

	$(".rightLine").css({
		height: $(document).height() - (64*2)
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
}

center_desktop = function() {
	$(".leftLine").css({
		height: $(window).height() - (64*2)
	});

	$(".rightLine").css({
		height: $(window).height() - (64*2)
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
}

$(window).load(function(){
	if( $(window).height() > 731 ) {
		center_desktop();
	} else {
		center_small();
	}

	$("body").animate({
		opacity: 1
	});
});

$(document).ready(function() {
	$(window).resize(function() {
		if( $(window).height() > 731 ) {
			center_desktop();
		} else {
			center_small();
		}

		$(".center").each(function(value,index){
			$(this).css({
				left: $(document).width()/2 - $(this).width()/2	
			});
		});
	});

	$(".button").click(function(e) {
		$(".button").removeClass("active");
		$(this).addClass("active");

		if( $(this).hasClass("website") || $(this).hasClass("download") ){
			return true;
		}

		e.preventDefault();

		if( $(this).hasClass("about") ) {
			$("#logo").fadeOut();
			$("#instructions").fadeOut();
			$("iframe").fadeOut();
			$("#about").fadeIn();
		} else if( $(this).hasClass("instructions") ) {
			$("#logo").fadeOut();
			$("#instructions").fadeIn();
			$("iframe").fadeIn();
			$("#about").fadeOut();
		}
	});
});