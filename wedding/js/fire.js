/*_______________Variaveis_____________*/

const searchBtn = document.getElementById('searchBtn');
const searchName = document.getElementById('nameInput');
var liArray = [];
const liI = document.getElementById('liI');
const liII = document.getElementById('liII');
const liIII = document.getElementById('liIII');
const liIV = document.getElementById('liIV');
const liV = document.getElementById('liV');
const hfd = document.getElementById('hfd');
const btnCon = document.getElementById('btnc');
const key = document.getElementById('key');
const select = document.getElementById('select');
const msgBtn = document.getElementById('msgBtn');
const msgInput = document.getElementById('msgInput');
const msgAdvise = document.getElementById('msgAdvise');
const msgAuthor = document.getElementById('msgAuthor');

var a = 0;
const data = {
    name: ''
};

/*___________________Functions___________________*/

function clear () {
    liI.style.color = '#163e3a'
    liII.style.color = '#163e3a';
    liIII.style.color = '#163e3a';
    liIV.style.color = '#163e3a'
    liV.style.color = '#163e3a'
    liI.textContent=('');
    liII.textContent=('');
    liIII.textContent=('');
    liIV.textContent=('');
    liV.textContent=('');
    select.textContent=('')
    data.name = '';
}

function capitalize (string){
    let upperString = string[0].toUpperCase() + string.slice(1);
    return upperString;
}


function buscar(){
    clear();
    if (searchName.value === ''){
        hfd.textContent=('*O campo de busca está vazio');
    }else{
        hfd.textContent=('Buscando...');
        let valor = capitalize(searchName.value);
        let verify = '';

        firebase.database().ref('lista').on('value', function(snapshot){
            snapshot.forEach(function(item){
                verify = item.val().name;

                if (verify.includes(valor)){
                    if(a == 0){
                        liI.textContent=(verify);
                    }else if (a == 1){
                        liII.textContent=(verify);
                    }else if(a == 2) {
                        liIII.textContent=(verify);
                    }else if(a == 3){
                        liIV.textContent=(verify);
                    }else{
                        liV.textContent=(verify);
                    }
                    a += 1;
                }
            });
            if(a == 0){
                hfd.textContent=('Não encontrado');
                clear();
            }else{
                select.textContent=('Selecione seu nome:');
                hfd.textContent=('');
            }
        }); 
    }   
    a = 0;
}

function send() {
    let nome = data.name;
    firebase.database().ref().child('confirmados').push(data, function(error) {
        if (error) {
            hfd.textContent = (`Ops, ${nome}, algo deu errado! (tente de novo)`);
        } else {
            hfd.textContent = (`Yeah, ${nome}, sua presença está confirmada!`);
        }
    });
    clear();
}

function youSure(){
    if (confirm(`Confirmar a presença de ${data.name}?`)) {
        send();
    } else {
        console.log("canceld")
    }
}

function empty(){
    if (data.name === ''){
        hfd.textContent=('*Nenhum nome selecionado');
    }else{
        youSure();
    }
}


/*_______________Listener Events___________________*/

btnCon.addEventListener('click', empty);

searchBtn.addEventListener('click', buscar);

key.onkeypress = function(){
    if (event.which == '13') {
        buscar();
        event.preventDefault();
    }
}

liI.addEventListener('click', function(){
    liI.style.color = 'rgb(11, 58, 50, 0.3)'
    liII.style.color = 'rgb(11, 58, 50)';
    liIII.style.color = 'rgb(11, 58, 50)';
    liIV.style.color = 'rgb(11, 58, 50)';
    liV.style.color = 'rgb(11, 58, 50)';
    data.name = liI.textContent;
    console.log(data);
});

liII.addEventListener('click', function(){
    liII.style.color = 'rgb(11, 58, 50, 0.3)';
    liIII.style.color = 'rgb(11, 58, 50)';
    liI.style.color = 'rgb(11, 58, 50)';
    liIV.style.color = 'rgb(11, 58, 50)';
    liV.style.color = 'rgb(11, 58, 50)';
    data.name = liII.textContent;
    console.log(data);
});

liIII.addEventListener('click', function(){
    liIII.style.color = 'rgb(11, 58, 50, 0.3)'
    liI.style.color = 'rgb(11, 58, 50)';
    liII.style.color = 'rgb(11, 58, 50)';
    liIV.style.color = 'rgb(11, 58, 50)';
    liV.style.color = 'rgb(11, 58, 50)';
    data.name = liIII.textContent;
    console.log(data);
});

liIV.addEventListener('click', function(){
    liI.style.color = 'rgb(11, 58, 50)'
    liII.style.color = 'rgb(11, 58, 50)';
    liIII.style.color = 'rgb(11, 58, 50)';
    liIV.style.color = 'rgb(11, 58, 50, 0.3)';
    liV.style.color = 'rgb(11, 58, 50)'
    data.name = liIV.textContent;
    console.log(data);
});

liV.addEventListener('click', function(){
    liI.style.color = 'rgb(11, 58, 50)'
    liII.style.color = 'rgb(11, 58, 50)';
    liIII.style.color = 'rgb(11, 58, 50)';
    liIV.style.color = 'rgb(11, 58, 50)'
    liV.style.color = 'rgb(11, 58, 50, 0.3)';
    data.name = liV.textContent;
    console.log(data);
});


// ________________________ Message ___________________________


function sendMessage(){
    let message = {
        messagem: msgInput.value,
        author: msgAuthor.value
    };
    if (message.messagem == ''){
        msgAdvise.textContent = ('Ué, cadê a mensagem?');
    }else{
        firebase.database().ref().child('message').push(message, function(error) {
            if (error) {
                msgAdvise.textContent = (`Ops, algo deu errado! (tente de novo)`);
            } else {
                msgAdvise.textContent = (`Obrigado pela mensagem!`);
                msgInput.value = ('');
                msgAuthor.value = ('');
            }
        });
    }
}

msgBtn.addEventListener('click', sendMessage);

// ___________________________Mural ____________________

const muralText = document.getElementById('muralText');
const muralAuthor = document.getElementById('muralAuthor');

function muralRandon(){
    let a = 0;
    let b = 0;
    firebase.database().ref('message').on('value', function(snapshot){
        snapshot.forEach(function(item){
            a += 1;
        });
        let rnd = Math.floor(Math.random() * a);
        snapshot.forEach(function(item){
            if (b == rnd){
                muralText.textContent = item.val().messagem;
                muralAuthor.textContent = (`- ${item.val().author}`);
            }
            b += 1;
        });
    });
}

setInterval(muralRandon, 10000);