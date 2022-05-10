document.addEventListener("DOMContentLoaded", function (event) {
    var divofertas = document.getElementById("ofertas");

    var array = [];
    if (localStorage.getItem("arrayofertas") == null) {
        array = [];
        localStorage.setItem("arrayofertas", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayofertas"));
    }

    var listOferta = JSON.parse(localStorage.getItem("arrayofertas"));
    var divofertas = document.getElementById("ofertas");

    if (listOferta != null) {
        listOferta.forEach(element => {
            divofertas.innerHTML = divofertas.innerHTML
                + '<div class="col"> <div class="card mb-4 rounden-3 shadow-sm"> <div class="card-header-op py-3"> <h4>' + element["nombre"] +'</h4> </div>'
                + '<div class="card-body-op"> <p>' + element["opinion"] + ', <br> La oferta cierra: ' + element["fecha"] + '<br> Contacto:' +element["correo"] +'</p> </div></div></div>';
        });
        return false;
    }
});

function registrarOferta() {
    var texto = document.getElementById("texto_desc");
    var nombre = document.getElementById("nombre");
    var fecha = document.getElementById("fecha");
    var correo = document.getElementById("correo")

    var array = [];
    if (localStorage.getItem("arrayofertas") == null) {
        array = [];

        localStorage.setItem("arrayofertas", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayofertas"));
    }

    array.push({ "opinion": texto.value, "nombre": nombre.value, "fecha": fecha.value, "correo": correo.value });

    localStorage.setItem("arrayofertas", JSON.stringify(array));

    var listOferta = JSON.parse(localStorage.getItem("array"));
    var divofertas = document.getElementById("ofertas");

    if (listOferta != null) {
        listOferta.forEach(element => {
            divofertas.innerHTML = divofertas.innerHTML
                + '<div class="col"> <div class="card mb-4 rounden-3 shadow-sm"> <div class="card-header py-3"> <h4>' + element["nombre"] +'</h4> </div>'
                + '<div class="card-body-op"> <p>' + element["opinion"] + ', <br> La oferta cierra: ' + element["fecha"] + '<br> Contacto:' +element["correo"] +'</p> </div></div></div>';
        });
        return false;
    }
}