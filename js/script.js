$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if (scrollPosition === 0) {
	    $(".barra").css("background-color", "transparent");
	}
});