var list_variable = 0;

function about(){
    
    $(".interest").css("display", "none");
    $(".hability").css("display", "none");
    $(".project").css("display", "none");
    $(".home").css("display", "none");
    $(".about").fadeIn(400);
    
}
function hability(){
    
    $(".home").css("display", "none");
    $(".about").css("display", "none");
    $(".interest").css("display", "none");
    $(".project").css("display", "none");
    $(".hability").fadeIn(400);
    
}
function interest(){
    
    $(".home").css("display", "none");
    $(".about").css("display", "none");
    $(".hability").css("display", "none");
    $(".project").css("display", "none");
    $(".interest").fadeIn(400);
    
}
function project(){
    
    $(".home").css("display", "none");
    $(".about").css("display", "none");
    $(".hability").css("display", "none");
    $(".interest").css("display", "none");
    $(".project").fadeIn(400);
    
}
function home(){
    
    $(".about").css("display", "none");
    $(".hability").css("display", "none");
    $(".interest").css("display", "none");
    $(".project").css("display", "none");
    $(".home").fadeIn(400);
    
}

function list(){
    if (list_variable == 0){
        $(".navbar").css("display", "block");
        $(".list").css("color", "#ecf0f1");
        list_variable = 1;
    }else{
        $(".navbar").css("display", "none");
        $(".list").css("color", "#12191f");
        list_variable = 0;
    }
}
