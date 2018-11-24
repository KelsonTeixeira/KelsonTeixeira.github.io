//variables
var options = [];

var verify = 0;


//functions

function add() {
    var op = document.forms["get_option"]["new_option"].value;
    options.push(" "+op);
    console.log(options);
    $(".the_list").text(options)
    document.forms["get_option"]["new_option"].value = "";
}

function sort (){
    var opp = options.length + 1;
    var rnd = Math.floor(Math.random() * opp);
    rnd = rnd - 1;
    return rnd;
}

function show (rnd){
    $("h5").text(options[rnd]);
    $("h5").css("display", "block");
    $("h4").css("display", "block");
    $(".button3").css("display", "block");
}

function vanish (){
    $("h3").css("display", "none");
    $(".the_list").css("display", "none");
    $(".button2").css("display", "none");
    $(".button").css("display", "none");
    $(".explain").css("display", "none");
    $("input").css("display", "none");
}

function luck(){
    rnd = sort();
    show(rnd);
    vanish();   
}


//Event

$(".button").click(add);


$(".button2").click(
    function(){
        if (options.length == 0){
            return false;
        }else{
            luck();
        }
});


$(".button3").click(
    function(){
        location.reload();
});


$('form').keypress(
  function(event){
    if (event.which == '13') {
        add();
        event.preventDefault();
    }
});

$(".doubt").click(
    function(){
        if (!verify){
            $("#doubt").css("display","block");
            verify = 1;
        }else{
            $("#doubt").css("display","none");
            verify = 0;
        }
})