const name = document.getElementById('nameInp');
const btn = document.getElementById('getBtn');
const key = document.getElementById('key');

btn.addEventListener('click', function() {
    create(name.value);
    name.value = '';
});

key.onkeypress = function(){
      if (event.which == '13') {
        create(name.value);
        name.value = '';
          event.preventDefault();
      }
  }

function create(name) {
    var data = {
        name: name,
    };
    return firebase.database().ref().child('lista').push(data);
};