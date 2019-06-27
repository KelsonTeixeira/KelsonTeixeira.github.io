

function alerta() {
    if (confirm("Confirme sua presença nesse dia especial :)")) {
        var elmnt = document.getElementById("presenca");
        elmnt.scrollIntoView();
      } else {
        console.log("mais tarde!")
      }
}

setTimeout(alerta, 60000);
