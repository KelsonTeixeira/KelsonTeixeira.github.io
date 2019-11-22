const ul = document.getElementById('ul');
const listNumber = document.getElementById('listNumber');
var contador = 0;
firebase.database().ref('lista').on('value', function(snapshot){
    snapshot.forEach(function(item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name));
        ul.appendChild(li);
        contador += 1;
    });
    listNumber.textContent = (`Número de convidados: ${contador}`);
});