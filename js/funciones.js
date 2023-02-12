// Funcionalidad de los botones de datos personales y contacto

document.getElementById("nombre").addEventListener("mouseover", function () {
    document.getElementById("info_visual").innerHTML = "¡Hola!<br>Soy Federico Maidana";
})

document.getElementById("edad").addEventListener("mouseover", function () {
    document.getElementById("info_visual").innerHTML = "Actualmente tengo<br>" + calcularEdad('04-02-1993') + " años";
})

document.getElementById("direccion").addEventListener("mouseover", function () {
    document.getElementById("info_visual").innerHTML = "Vivo en Frías<br>Santiago del Estero, Argentina";
})

document.getElementById("email").addEventListener("mouseover", function () {
    document.getElementById("info_visual").innerHTML = "Mi correo electrónico es<br>fede.amaidana@gmail.com";
})

document.getElementById("telefono").addEventListener("mouseover", function () {
    document.getElementById("info_visual").innerHTML = "Mi número de celular es<br> 3854 - 413401";
})

//Funcionalidad de la sección de información

document.getElementById("formacion_academica_boton").addEventListener("click", function () {
    document.getElementById("formacion_academica").style.display ="block";
    document.getElementById("experiencia_laboral").style.display ="none";
    document.getElementById("mas_datos").style.display ="none";
    window.scroll(0, window.innerHeight);
})

document.getElementById("experiencia_laboral_boton").addEventListener("click", function () {
    document.getElementById("formacion_academica").style.display ="none";
    document.getElementById("experiencia_laboral").style.display ="block";
    document.getElementById("mas_datos").style.display ="none";
    window.scroll(0, window.innerHeight);
})

document.getElementById("mas_datos_boton").addEventListener("click", function () {
    document.getElementById("formacion_academica").style.display ="none";
    document.getElementById("experiencia_laboral").style.display ="none";
    document.getElementById("mas_datos").style.display ="block";
    window.scroll(0, window.innerHeight);
})


//Saqué esto de internet pero le invertí el formato a DD/MM/AAAA
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const anioActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth())+1;
    const diaActual = parseInt(fechaActual.getDate());

    const anioNacimiento = parseInt(String(fechaNacimiento).substring(6, 10));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(3, 5));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(0, 2));

    let edad = anioActual - anioNacimiento;

    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual == mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
}