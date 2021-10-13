import { info, RM, valparaiso } from "./info";

let formulario1:any=document.getElementById("formulario1");
let formulario2:any=document.getElementById("formulario2");
const inputs = document.querySelectorAll("#formulario1 input");
const inputs1 = document.querySelectorAll("#formulario2 input");
let mensaje:any=document.getElementById("mensaje");

const expresiones = {
	rut: /^[a-zA-Z0-9\_\-\.]{8,13}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, 
    edad:/^[0-9]$/
}

function revisarCheckbox(grupo:any){
    for(var elemento of grupo){
        if(elemento.checked)
            return true;
    }
    return false;
}

formulario1.addEventListener('submit', function(event:any)){
    let nombre:any=document.getElementById("nombre");
    let edad:any=document.getElementById("edad");
    let correo:any=document.getElementById("correo");
    let telefono:any=document.getElementById("telefono");
    let rut:any=document.getElementById("rut");

    if(expresiones.nombre.test(nombre.value)){
        nombre.setCustomValidity("");
    }else   nombre.setCustomValidity("incorrecto");
    if(expresiones.edad.test(edad.value)){
        edad.setCustomValidity("");
    }else edad.setCustomValidity("incorrecto");
    if(expresiones.correo.test(correo.value)){
        correo.setCustomValidity("");
    }else   correo.setCustomValidity("incorrecto");
    if(expresiones.telefono.test(telefono.value)){
        telefono.setCustomValidity("");
    }else   telefono.setCustomValidity("incorrecto");
    if(expresiones.rut.test(rut.value)){
        rut.setCustomValidity("");
    }else  rut.setCustomValidity("incorrecto");
    
    formulario1.classList.add('was-validated');

    formulario1.style.display="none"
    mensaje.style.display="block"

}














let listaInfo=Array<info>();
let listaValpo=Array<RM>();
let listaRM=Array<valparaiso>();


listaInfo=[{
    "nombre":"Pepito Perez",
    "edad":43,
    "genero":"masculino",
    "fecha":"21/09/1979",
    "correo":"correo@hotmail.com",
    "numero":"+56912312312",
    "rut":"1234567-7",
    "region":"valparaiso",
    "comuna":"valparaiso"
}]

listaValpo=[{
    "comuna1":"valparaiso",
    "comuna2":"vina del mar",
    "comuna3":"quilpue",
    "comuna4":"casa blanca",
    "comuna5":"san felipe"
}]

listaRM=[{
    "comuna1":"santiago",
    "comuna2":"huechuraba",
    "comuna3":"providencia",
    "comuna4":"las condes",
    "comuna5":"macul"
}]

function menu(){

    let info:any=document.getElementById("info");
    let signos:any=document.getElementById("signos");


    for(let i=0;i<listaInfo.length;i++){
        let li:any=document.createElement("li");
        info.appenChild(li).innerHTML="<a href='#' id='"+info[i].id+"'>"+info[i].nombre+"</a>";

        li.addEventListener("click", function(){


            let e=document.querySelector()

        })
    }



}

