
function contDays(day, month){
    var thirty = [4, 6, 9, 11];
    var thirtyOne = [1, 3, 5, 7, 8, 10, 12];
    var data = new Date();
    var days = 0;
    var thisMonth = data.getMonth() + 1;

    if (month != thisMonth){
        days += day;
        if (thirty.includes(thisMonth)){
            days += 30 - data.getDate();
        }else if (thirtyOne.includes(thisMonth)){
            days += 31 - data.getDate();
        }
        thisMonth += 1;

        for (let i = thisMonth; i < month; i++){
            if (thirty.includes(i)){
                days += 30;
            }else if (thirtyOne.includes(i)){
                days +=31;
            }else{
                //nada
            }
        }

    }else{
        days += day - data.getDate();
    }
    return days;
}

function theDays(){
    var restDays = document.getElementById('restDays');
    var restDays2 = document.getElementById('restDays2');
    let day = contDays(28, 9);
    let string = '';
    if (day==1){
        string = 'dia';
    }else{
        string = 'dias'
    }
    restDays.textContent = (`Faltam ${day} ${string}`);
    restDays2.textContent = (`Faltam ${day} ${string}`);
}

theDays();



// ----------- ALERT -----------------
function alerta() {
    if (confirm("Confirme sua presença nesse dia especial :)")) {
        var elmnt = document.getElementById("presenca");
        elmnt.scrollIntoView();
      } else {
        console.log("mais tarde!")
      }
}

//setTimeout(alerta, 60000);

// ----------------MENU ---------------

const menu = document.getElementById('menu');
const links = document.getElementsByClassName('linkToSection');
var show = 0;

menu.addEventListener('click', menuShow);

function menuShow(){
    console.log('funcionou');
    if(show == 0){
        document.getElementById('please').style.display = "flex";
        document.getElementById('barra').style.opacity = "0.9";
        show = 1;
    }else{
        document.getElementById('please').style.display = "none";
        document.getElementById('barra').style.opacity = "1";
        show = 0;
    }
}

// -------------- inspire-se functions -----------

function openMan(){
    window.open('https://pin.it/nubumjgpsq3pwv');
}

function openWomen(){
    window.open('https://pin.it/odo6el2asqjzd6');
}