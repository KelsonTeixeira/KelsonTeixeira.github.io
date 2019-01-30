var list_variable = 0;
var next_position = 0;
var sections = [".home", ".about", ".hability", ".interest"];


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

function value_receive(x){
    next_position = x;
    pass_next();
}

function pass_next(){
    next_position++;
    if (next_position == 4){
        next_position = 0;
    }
       for (var i = 0; i < sections.length; i++){
            if (i == next_position){
                $(sections[i]).css("display", "block");
            }else{
                $(sections[i]).css("display", "none");
            }            
        }
}
