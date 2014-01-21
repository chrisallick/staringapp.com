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
			$("#about").fadeIn();
		} else if( $(this).hasClass("instructions") ) {
			$("#logo").fadeOut();
			$("#instructions").fadeIn();
			$("#about").fadeOut();
		}
	});

	// $("#mobile_instructions").click(function() {
	// 	if( $(".active", this).next().next().length == 0 ) {
	// 		$(".active", this).removeClass("active");
	// 		$(".one", this).addClass("active");
	// 	} else {
	// 		$(".active", this).removeClass("active").next().next().addClass("active");	
	// 	}

	// 	if( $(".active-text", this).next().next().length == 0 ) {
	// 		$(".active-text", this).removeClass("active-text");
	// 		$(".one-text", this).addClass("active-text");
	// 	} else {
	// 		$(".active-text", this).removeClass("active-text").next().next().addClass("active-text");
	// 	}
	// });

    var hammertime = $("#mobile_instructions").hammer();

	// Hammer($("#mobile_instructions")[0]).on("swipeleft", function() {
	//     alert('you swiped left!');
	// });

    hammertime.on("swipeleft", function(ev) {
		if( $(".active", this).next().next().length == 0 ) {
			$(".active", this).removeClass("active");
			$(".one", this).addClass("active");
		} else {
			$(".active", this).removeClass("active").next().next().addClass("active");	
		}

		if( $(".active-text", this).next().next().length == 0 ) {
			$(".active-text", this).removeClass("active-text");
			$(".one-text", this).addClass("active-text");
		} else {
			$(".active-text", this).removeClass("active-text").next().next().addClass("active-text");
		}
    }).on("swiperight", function(ev) {
		if( $(".active", this).prev().prev().length == 0 ) {
			$(".active", this).removeClass("active");
			$(".four", this).addClass("active");
		} else {
			$(".active", this).removeClass("active").prev().prev().addClass("active");	
		}

		if( $(".active-text", this).prev().prev().length == 0 ) {
			$(".active-text", this).removeClass("active-text");
			$(".four-text", this).addClass("active-text");
		} else {
			$(".active-text", this).removeClass("active-text").prev().prev().addClass("active-text");
		}
    });
});