var list_variable = 0;
var next_position = 0;
const navbar = document.getElementById('navbar');
const listIcon = document.getElementById('list');
const sections = document.getElementsByTagName('section');

console.log(navbar);


function list(){
    if (list_variable === 0){
        navbar.style.height = '270px';
        listIcon.style.color = '#ecf0f1';
        list_variable = 1;
    }else{
        navbar.style.height = '0';
        listIcon.style.color = '#12191f';
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
    for(let i = 0; i < sections.length; i++){
        if(i === next_position){
            sections[i].style.display = 'flex';
        }else{
            sections[i].style.display = 'none';
        }
    }
}
