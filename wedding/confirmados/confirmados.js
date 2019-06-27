const ul = document.getElementById('ul');
firebase.database().ref('confirmados').on('value', function(snapshot){
    snapshot.forEach(function(item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name));
        ul.appendChild(li);
    });
});