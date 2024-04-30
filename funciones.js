//Agarrando elementos
let hojaCurriculum = document.getElementById("baseCurriculum")
let body = document.getElementById("body")

//Parte del navbar
let nav = document.getElementById("nav")
//graficos
let graficos = document.getElementById("graficos")
//descripcion
let descripcion = document.getElementById("descripcion")
//imagen
let imagen = document.getElementById("imagen")
//footer
let footer = document.getElementById("footer")
//boton
let surpriseBtn = document.getElementById("surprisePrueba")


//funciones
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
nav.style.backgroundColor = '#efefef'




})














