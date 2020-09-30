var list_variable = 0;
var next_position = 0;
const navbar = document.getElementById('navbar');
const listIcon = document.getElementById('list');
const sections = document.getElementsByTagName('section');

console.log(navbar);


function list(){
    if (list_variable === 0){
        navbar.style.height = '320px';
        list_variable = 1;
    }else{
        navbar.style.height = '0';
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



const perfil = {
    element : document.querySelector('.navbar img'),
    toggle: false,
    clicked: function(){
        if(!perfil.toggle){
            perfil.toggle = !perfil.toggle;
            perfil.element.style.width = '80%';
            perfil.element.style.left = '10%';
            perfil.element.style.top = '10%';
        }else{
            perfil.toggle = !perfil.toggle;
            perfil.element.style.width = '50px';
            perfil.element.style.left = '10px';
            perfil.element.style.top = '10px';  
        }
    },
    init : function(){
        if(window.innerWidth <= 480){
            perfil.element.addEventListener('click', this.clicked);
        }
    }
}

perfil.init();