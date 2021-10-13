"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formulario1 = document.getElementById("formulario1");
var formulario2 = document.getElementById("formulario2");
var inputs = document.querySelectorAll("#formulario1 input");
var inputs1 = document.querySelectorAll("#formulario2 input");
var mensaje = document.getElementById("mensaje");
var expresiones = {
    rut: /^[a-zA-Z0-9\_\-\.]{8,13}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    edad: /^[0-9]$/
};
function revisarCheckbox(grupo) {
    for (var _i = 0, grupo_1 = grupo; _i < grupo_1.length; _i++) {
        var elemento = grupo_1[_i];
        if (elemento.checked)
            return true;
    }
    return false;
}
formulario1.addEventListener('submit', );
{
    var nombre = document.getElementById("nombre");
    var edad = document.getElementById("edad");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var rut = document.getElementById("rut");
    if (expresiones.nombre.test(nombre.value)) {
        nombre.setCustomValidity("");
    }
    else
        nombre.setCustomValidity("incorrecto");
    if (expresiones.edad.test(edad.value)) {
        edad.setCustomValidity("");
    }
    else
        edad.setCustomValidity("incorrecto");
    if (expresiones.correo.test(correo.value)) {
        correo.setCustomValidity("");
    }
    else
        correo.setCustomValidity("incorrecto");
    if (expresiones.telefono.test(telefono.value)) {
        telefono.setCustomValidity("");
    }
    else
        telefono.setCustomValidity("incorrecto");
    if (expresiones.rut.test(rut.value)) {
        rut.setCustomValidity("");
    }
    else
        rut.setCustomValidity("incorrecto");
    formulario1.classList.add('was-validated');
    formulario1.style.display = "none";
    mensaje.style.display = "block";
}
var listaInfo = Array();
var listaValpo = Array();
var listaRM = Array();
listaInfo = [{
        "nombre": "Pepito Perez",
        "edad": 43,
        "genero": "masculino",
        "fecha": "21/09/1979",
        "correo": "correo@hotmail.com",
        "numero": "+56912312312",
        "rut": "1234567-7",
        "region": "valparaiso",
        "comuna": "valparaiso"
    }];
listaValpo = [{
        "comuna1": "valparaiso",
        "comuna2": "vina del mar",
        "comuna3": "quilpue",
        "comuna4": "casa blanca",
        "comuna5": "san felipe"
    }];
listaRM = [{
        "comuna1": "santiago",
        "comuna2": "huechuraba",
        "comuna3": "providencia",
        "comuna4": "las condes",
        "comuna5": "macul"
    }];
function menu() {
    var info = document.getElementById("info");
    var signos = document.getElementById("signos");
    for (var i = 0; i < listaInfo.length; i++) {
        var li = document.createElement("li");
        info.appenChild(li).innerHTML = "<a href='#' id='" + info[i].id + "'>" + info[i].nombre + "</a>";
        li.addEventListener("click", function () {
            var e = document.querySelector();
        });
    }
}
