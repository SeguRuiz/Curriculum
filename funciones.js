//Agarrando elementos
let hojaCurriculum = document.getElementById("baseCurriculum")
let body = document.getElementById("body")
let imagenC = document.createElement("img")
//Parte del navbar
let nav = document.getElementById("nav")
//graficos
let graficos = document.getElementById("graficos")
//descripcion
let descripcion = document.getElementById("descripcion")
//imagen
let imagen = document.getElementById("imgPersonal")
//footer
let footer = document.getElementById("footer")
//boton
let surpriseBtn = document.getElementById("surprisePrueba")
//boton subir
let botonSubir = document.getElementById("botonSubir")
//inputs
let inputNombre = document.getElementById("inputNombre")
let inputProfesion = document.getElementById("inputProfesion")
let inputFoto = document.getElementById("inputFoto")
let inputTelefono = document.getElementById("inputTelefono")
let inputCorreo = document.getElementById("inputCorreo")
let inputUbicacion = document.getElementById("inputUbicacion")




//boton estructura
surpriseBtn.addEventListener("click", () => {
//ifs devuelta
if (hojaCurriculum.style.gap != '30px') {
    hojaCurriculum.style.gap = '30px'
} else {
    hojaCurriculum.style.gap = ''
}

if (hojaCurriculum.style.border != 'none') {
    hojaCurriculum.style.border = 'none'
} else {
    hojaCurriculum.style.borderColor = 'black'
    hojaCurriculum.style.borderStyle = 'solid'
    hojaCurriculum.style.borderWidth = '2px'
    hojaCurriculum.style.borderRadius = '20px'
}

//nav cambio
if (nav.style.boxShadow != '0px 2px 10px') {
    nav.style.boxShadow = '0px 2px 10px'
} else {
    nav.style.boxShadow = ''
}
//grafico cambio
if (graficos.style.boxShadow != '0px 2px 10px') {
    graficos.style.boxShadow = '0px 2px 10px'
} else {
    graficos.style.boxShadow = ''
}

if (graficos.style.borderBlockStartColor != '') {
    graficos.style.borderBlockStartColor = ''
    
} else {
    graficos.style.borderBlockStartStyle = 'solid'
    graficos.style.borderBlockStartColor = 'black'
    graficos.style.borderRadius = '20px'
}

//Descripcion cambio
if (descripcion.style.boxShadow != '0px 2px 10px') {
    descripcion.style.boxShadow = '0px 2px 10px'
} else {
    descripcion.style.boxShadow = ''
}

//imagen cambio

if (imagen.style.boxShadow != '0px 2px 10px') {
    imagen.style.boxShadow = '0px 2px 10px'
} else {
    imagen.style.boxShadow = ''
}

//footer cambio

if (footer.style.boxShadow != '0px 2px 10px') {
    footer.style.boxShadow = '0px 2px 10px'
} else {
    footer.style.boxShadow = ''
}



})

//boton subir
botonSubir.addEventListener("click", () =>{


// input nombre

document.getElementById("nombrePrincipal").innerHTML = inputNombre.value
if (inputNombre.value != '') {
    inputNombre.value = ''
}
else{
    document.getElementById("nombrePrincipal").innerHTML = 'PEDRO FERNANDEZ'

}

// input profesion
document.getElementById("profesion").innerHTML = inputProfesion.value
if (inputProfesion.value != '') {
    inputProfesion.value = ''
}
else{
    document.getElementById("profesion").innerHTML = 'RECEPCIONIST'
}
// input foto


imagen.src = inputFoto.value
if (inputFoto.value != '') {
    inputFoto.value = ''
}
else{
    imagen.src = '/Curriculum/styles/img/perfilIMG.jpg'
}


// input telefono
document.getElementById("telefonoP").innerHTML = inputTelefono.value
if (inputTelefono.value != '') {
    inputTelefono.value = ''
}
else{
    document.getElementById("telefonoP").innerHTML = '6235-2359'
}

// input correo
document.getElementById("correoP").innerHTML = inputCorreo.value
if (inputCorreo.value != '') {
    inputCorreo.value = ''
}
else{
    document.getElementById("correoP").innerHTML = 'tuCorreo@gmail.com'
}

//input ubicacion
document.getElementById("ubicacionP").innerHTML = inputUbicacion.value
if (inputUbicacion.value != '') {
    inputUbicacion.value = ''
}
else{
    document.getElementById("ubicacionP").innerHTML = 'Tu ubicacion'
}


}
)

