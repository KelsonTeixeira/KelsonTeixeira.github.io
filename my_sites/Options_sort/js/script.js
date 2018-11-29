

//------------------variables-------------
var options = [];

var verify = 0;



//------------------functions----------------

function add() {
    var op = document.forms["get_option"]["new_option"].value;
    options.push(" "+op);
    console.log(options);
    $(".the_list").text(options)
    document.forms["get_option"]["new_option"].value = "";
}

function new_list(rnd){
    var more = [];
    for (var i = 0; i < options.length; i++){
        if (options[i] != options[rnd]){
            more.push(options[i]);
        }
    }
    return more;
}

function define (rnd){
    if (options.length == 0){
        $("h5").text("Sem Opção");
    }else{
        $("h5").text(options[rnd]);
    }
}

function show (rnd){
    define(rnd);
    options = new_list(rnd);
    $(".the_list").text(options);
    $(".show").css("display", "block");
}

function vanish (){
    $("h3").text("Restante:");
    $(".the_list").css("margin-bottom", "0");
    $(".vanish").css("display", "none");
}


function luck(){
    var rnd = Math.floor(Math.random() * options.length);
    console.log(rnd);
    show(rnd);
    vanish();
}

function reload_sort(){
        location.reload();
}


function display_text(){
    if (!verify){
        $("#doubt").css("display","block");
        verify = 1;
    }else{
        $("#doubt").css("display","none");
        verify = 0;
    }
}

//---------------------Event--------------

$('form').keypress(
  function(event){
    if (event.which == '13') {
        add();
        event.preventDefault();
    }
});

$(".doubt").mouseout(function(){
    if (verify == 1){
        $("body").click(function(){
            $("#doubt").css("display","none");
            verify = 0;
        })
    }
})