// Esta función cambia el color de los elementos con los IDs especificados.
function cambiarColor(color) {
    // Si el color pasado es 'rojo', se pone el fondo del elemento con ID 'rojo' en rojo.
    // De lo contrario, se pone en gris.
    document.getElementById("rojo").style.backgroundColor = color === 'rojo' ? 'red' : 'grey'; 

    // Si el color pasado es 'amarillo', se pone el fondo del elemento con ID 'amarillo' en amarillo.
    // De lo contrario, se pone en gris.
    document.getElementById("amarillo").style.backgroundColor = color === 'amarillo' ? 'yellow': 'grey'; 

    // Si el color pasado es 'verde', se pone el fondo del elemento con ID 'verde' en verde.
    // De lo contrario, se pone en gris.
    document.getElementById("verde").style.backgroundColor = color === 'verde' ? 'green' : 'grey';
}

// Esta función inicia el ciclo del semáforo.
function iniciarSemaforo() {
    // Cambia el color a rojo inmediatamente.
    setTimeout(() => cambiarColor('rojo'), 0);

    // Cambia el color a amarillo después de 3000 milisegundos.
    setTimeout(() => cambiarColor('amarillo'), 3000); 

    // Cambia el color a verde después de 6000 milisegundos.
    setTimeout(() => cambiarColor('verde'), 6000); 

    // Llama a la función iniciarSemaforo nuevamente después de 9000 milisegundos, reiniciando el ciclo.
    setTimeout(iniciarSemaforo, 9000);
}