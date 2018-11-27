

//------------------variables-------------
var options = [];

var more = [];

var verify = 0;



//------------------functions----------------

function add() {
    var op = document.forms["get_option"]["new_option"].value;
    options.push(" "+op);
    console.log(options);
    $(".the_list").text(options)
    document.forms["get_option"]["new_option"].value = "";
}

function sort (){
    var rnd = Math.floor(Math.random() * options.length);
    return rnd;
}

function show (rnd){
    more = [];
    if (options.length == 0){
        $("h5").text("Sem Opção");
    }else{
        $("h5").text(options[rnd]);
    }
    for (var i = 0; i < options.length; i++){
        if (options[i] != options[rnd]){
            more.push(options[i]);
        }
    }
    options = more;
    $(".the_list").text(options);
    $("h5").css("display", "block");
    $("h4").css("display", "block");
    $(".button3").css("display", "block");
    $(".button4").css("display", "block");
}

function vanish (){
    $("h3").text("Restante:");
    $(".the_list").css("margin-bottom", "0");
    $(".button2").css("display", "none");
    $(".button").css("display", "none");
    $(".explain").css("display", "none");
    $("input").css("display", "none");
}

function luck(){
    rnd = sort();
    console.log(rnd);
    show(rnd);
    vanish();
}


//---------------------Event--------------

$(".button").click(add);


$(".button2").click(
    function(){
        if (options.length == 0){
            return false;
        }else{
            luck();
        }
});


$(".button4").click(
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

$(".button3").click(
    function(){
        luck();
    })