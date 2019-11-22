const ul = document.getElementById('ul');
firebase.database().ref('message').on('value', function(snapshot){
    snapshot.forEach(function(item){
        var li = document.createElement('li');
        var p = document.createElement('p');
        li.appendChild(document.createTextNode(`${item.val().messagem}`));
        p.appendChild(document.createTextNode(`Autor: ${item.val().author}`));
        ul.appendChild(li);
        ul.appendChild(p);
    });
});

