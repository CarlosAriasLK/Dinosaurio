var contador = 1;
// Declara una variable 'contador' y la inicializa en 1

var temporizador;
// Declara una variable 'temporizador' sin valor inicial

function iniciar() {
    temporizador = setInterval(rotarImagenes, 3000);
    // Inicia un temporizador que ejecuta la función 'rotarImagenes' cada 3 segundos
}

function rotarImagenes() {
    if (contador >= 10) {
        contador = 0;
        // Reinicia el contador a 0 si alcanza 10
    }

    var img = document.getElementById('imgSlide');
    // Obtiene el elemento de la imagen por su id 'imgSlide'

    img.src = 'images/img' + ++contador + '.jpg';
    // Cambia la imagen mostrada incrementando el número en el nombre del archivo
}
