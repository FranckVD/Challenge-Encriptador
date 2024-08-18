// Preparando el archivo javaScript
function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(textoEncriptado);
    document.getElementById('texto').value = "";
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(textoDesencriptado);
    document.getElementById('texto').value = "";
}

function mostrarResultado(texto) {
    let textoSalida = document.getElementById("texto-salida");
    let botonCopiar = document.querySelector(".contenido-texto .botones");
    let mensaje = document.querySelector(".mensaje");
    let mensajeAviso = document.querySelector(".mensaje-aviso");
    let imagen = document.querySelector(".presentación_muñeco");

    textoSalida.value = texto;
    textoSalida.style.display = "block";
    botonCopiar.style.display = "block";
    mensaje.style.display = "none";
    mensajeAviso.style.display = "none";
    imagen.style.display = "none";
}

function copiarTexto() {
    let textoSalida = document.getElementById("texto-salida");
    textoSalida.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
    limpiarResultado();
}

function limpiarResultado() {
    let textoSalida = document.getElementById("texto-salida");
    let botonCopiar = document.querySelector(".contenido-texto .botones");
    let mensaje = document.querySelector(".mensaje");
    let mensajeAviso = document.querySelector(".mensaje-aviso");
    let imagen = document.querySelector(".presentación_muñeco");

    textoSalida.value = "";
    textoSalida.style.display = "none";
    botonCopiar.style.display = "none";
    mensaje.style.display = "block";
    mensajeAviso.style.display = "block";
    imagen.style.display = "block";
}
