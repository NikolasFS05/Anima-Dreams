document.addEventListener("DOMContentLoaded", function (event) {
    var divOpiniones = document.getElementById("opiniones");

    var array = [];
    if (localStorage.getItem("arrayOpiniones") == null) {
        array = [];
        localStorage.setItem("arrayOpiniones", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayOpiniones"));
    }

    var listOpinion = JSON.parse(localStorage.getItem("arrayOpiniones"));
    var divOpiniones = document.getElementById("opiniones");

    if (listOpinion != null) {
        listOpinion.forEach(element => {
            divOpiniones.innerHTML = divOpiniones.innerHTML
                + '<div class="d-flex text-muted pt-3">'
                + '<svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"> <title>Placeholder</title> <rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>'
                + '</svg>'

                + '<p class="pb-3 mb-0 small lh-sm border-bottom">'
                + '<strong class="d-block text-gray-dark">@' + element["nombre"] + '<span class="text-muted fw-light">:' + element["servicio"] + '</span></strong>'
                + element["opinion"]
                + '</p>'
                + '</div>'
        });
        return false;
    }
});

function registrarOpinion() {
    var texto = document.getElementById("texto_opinion");
    var nombre = document.getElementById("nombre");
    var servicio = document.getElementById("servicio");

    var array = [];
    if (localStorage.getItem("arrayOpiniones") == null) {
        array = [];

        localStorage.setItem("arrayOpiniones", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayOpiniones"));
    }

    array.push({ "opinion": texto.value, "nombre": nombre.value, "servicio": servicio.value });

    localStorage.setItem("arrayOpiniones", JSON.stringify(array));

    var listOpinion = JSON.parse(localStorage.getItem("array"));
    var divOpiniones = document.getElementById("opiniones");

    if (listOpinion != null) {
        listOpinion.forEach(element => {
            divOpiniones.innerHTML = divOpiniones.innerHTML
                + '<div class="d-flex text-muted pt-3">'
                + '<svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"> <title>Placeholder</title> <rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>'
                + '</svg>'

                + '<p class="pb-3 mb-0 small lh-sm border-bottom">'
                + '<strong class="d-block text-gray-dark">@' + element["nombre"] + '<span class="text-muted fw-light">:' + element["servicio"] + '</span></strong>'
                + element["opinion"]
                + '</p>'
                + '</div>'
        });
        return false;
    }
}