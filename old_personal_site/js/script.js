$(window).on("scroll", function(){
	if($(window).scrollTop()){
        $(".barra").css("background-color", "rgb(0, 0, 0, 0.8)");
    }else{
        $(".barra").css("background-color", "transparent"); 
    }
})

