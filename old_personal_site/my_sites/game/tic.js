//---------------------------------//
//            Variables           //
//-------------------------------//

var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");

var d = document.querySelector("#d");
var e = document.querySelector("#e");
var f = document.querySelector("#f");

var g = document.querySelector("#g");
var h = document.querySelector("#h");
var i = document.querySelector("#i");

var all = document.querySelectorAll ("td");

var restart = document.querySelector("h2");
//-----------------------------------//
//              functions           //
//---------------------------------//

// First Row
a.addEventListener ("click", function(){
        a.textContent = "X"
    })
a.addEventListener ("dblclick", function(){
    a.textContent = "O"
})

b.addEventListener ("click", function(){
    b.textContent = "X"
})
b.addEventListener ("dblclick", function(){
    b.textContent = "O"
})

c.addEventListener ("click", function(){
    c.textContent = "X"
})
c.addEventListener ("dblclick", function(){
    c.textContent = "O"
})

//Second Row

d.addEventListener ("click", function(){
    d.textContent = "X"
})
d.addEventListener ("dblclick", function(){
    d.textContent = "O"
})

e.addEventListener ("click", function(){
    e.textContent = "X"
})
e.addEventListener ("dblclick", function(){
    e.textContent = "O"
})

f.addEventListener ("click", function(){
    f.textContent = "X"
})
f.addEventListener ("dblclick", function(){
    f.textContent = "O"
})

//Third Row

g.addEventListener ("click", function(){
    g.textContent = "X"
})
g.addEventListener ("dblclick", function(){
    g.textContent = "O"
})

h.addEventListener ("click", function(){
    h.textContent = "X"
})
h.addEventListener ("dblclick", function(){
    h.textContent = "O"
})

i.addEventListener ("click", function(){
    i.textContent = "X"
})
i.addEventListener ("dblclick", function(){
    i.textContent = "O"
})

//----------------------------------------------//
//                     Restart                 //
//--------------------------------------------//
var all = document.querySelectorAll ("td");

var restart = document.querySelector("h2");

function clear_this(){
    for (var i = 0; i < all.length; i++){
        all[i].textContent = "";
    }
}

restart.addEventListener ("click", clear_this);
