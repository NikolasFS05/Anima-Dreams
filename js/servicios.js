document.addEventListener("DOMContentLoaded", function (event) {
    var divServicio = document.getElementById("servicios");

    var array = [];
    if (localStorage.getItem("arrayServicio") == null) {
        array = [];
        localStorage.setItem("arrayServicio", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayServicio"));
    }

    var listServicio = JSON.parse(localStorage.getItem("arrayServicio"));
    var divServicio = document.getElementById("servicios");

    if (listServicio != null) {
        listServicio.forEach(element => {
            divServicio.innerHTML = divServicio.innerHTML
                + '<div class="col">'
                + '<div class="card mb-4 rounden-3 shadow-sm">'
                + '<div class="card-header py-3">'
                + '<h4 class="my-0 fw-normal">' + element["nombre"] + '</h4>'
                + '</div>'
                + '<div class="card-body-s">'
                + '<h1 class="card-title pricing-card-title">$' + element["valor"] + '<small class="text-muted fw-light">/co</small>'
                + '</h1>'
                + '<ul class="list-unstyled mt-3 mb-4">'
                + '<li>10 animadores incluidos</li>'
                + '<li>Duración de ' + element["duracion"] + ' horas</li>'
                + '<li>Contacto:' + element["correo"] + '</li>'
                + '</ul>'
                + '</div>'
                + '</div>'
                + '</div>';
        });
        return false;
    }
});

function agregarServicio() {
    var nombre = document.getElementById("nombreS");
    var valor = document.getElementById("valorS");
    var duracion = document.getElementById("duracionS");
    var correo = document.getElementById("correoS")

    var array = [];
    if (localStorage.getItem("arrayServicio") == null) {
        array = [];

        localStorage.setItem("arrayServicio", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayServicio"));
    }

    array.push({ "nombre": nombre.value, "valor": valor.value, "duracion": duracion.value, "correo": correo.value });

    localStorage.setItem("arrayServicio", JSON.stringify(array));

    var listServicio = JSON.parse(localStorage.getItem("array"));
    var divServicio = document.getElementById("servicios");

    if (listServicio != null) {
        listServicio.forEach(element => {
            divServicio.innerHTML = divServicio.innerHTML
                + '<div class="col">'
                + '<div class="card mb-4 rounden-3 shadow-sm">'
                + '<div class="card-header py-3">'
                + '<h4 class="my-0 fw-normal">' + element["nombre"] + '</h4>'
                + '</div>'
                + '<div class="card-body-s">'
                + '<h1 class="card-title pricing-card-title">$' + element["valor"] + '<small class="text-muted fw-light">/co</small>'
                + '</h1>'
                + '<ul class="list-unstyled mt-3 mb-4">'
                + '<li>10 animadores incluidos</li>'
                + '<li>Duración de' + element["duracion"] + ' horas</li>'
                + '<li>Contacto:' + element["correo"] + '</li>'
                + '</ul>'
                + '</div>'
                + '</div>'
                + '</div>';
        });
        return false;
    }
}