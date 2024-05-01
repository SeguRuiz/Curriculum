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














