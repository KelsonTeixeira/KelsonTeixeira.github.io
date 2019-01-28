//------------GAME----------------
$('#game_li').mouseenter(function(){
    $('#game').css('display', 'block')
    $('h2').css('display', 'none')
})

$('#game_li').mouseleave(function(){
    $('#game').css('display', 'none')
    $('h2').css('display', 'block')
})

//--------------form------------------
$('#form_li').mouseenter(function(){
    $('#form').css('display', 'block')
    $('h2').css('display', 'none')
})

$('#form_li').mouseleave(function(){
    $('#form').css('display', 'none')
    $('h2').css('display', 'block')
    
})

//-------------Embaixadores-----------
$('#embaixadores_li').mouseenter(function(){
    $('#embaixadores').css('display', 'block')
    $('h2').css('display', 'none')
})

$('#embaixadores_li').mouseleave(function(){
    $('#embaixadores').css('display', 'none')
    $('h2').css('display', 'block')
})

