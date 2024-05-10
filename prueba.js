// Array con las rutas de las imágenes que deseas mostrar
const imagenes = ["./assets/image/fixito.png", "./assets/image/fix2.png"];

// Índice de la imagen actual
let indice = 0;

// Función para cambiar la imagen
function cambiarImagen() {
    const imagen1 = document.getElementById("imagen1");
    const imagen2 = document.getElementById("imagen2");

    // Ocultar la imagen actual
    if (indice === 0) {
        imagen1.style.display = "none";
    } else {
        imagen2.style.display = "none";
    }

    // Cambiar el índice
    indice = 1 - indice;

    // Mostrar la nueva imagen
    if (indice === 0) {
        imagen1.style.display = "block";
    } else {
        imagen2.style.display = "block";
    }
}

// Llamar a la función para cambiar imágenes cada 0.5 segundos
setInterval(cambiarImagen, 250); // 500 milisegundos = 0.5 segundos
