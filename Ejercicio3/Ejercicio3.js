let numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Se genera un número secreto aleatorio entre 1 y 10

let intentos = 0;
// Se inicializa un contador para los intentos

function adivinar() {
    let intento = document.getElementById("numero").value;
    // Se obtiene el número ingresado por el usuario

    intentos++;
    // Se incrementa el contador de intentos

    if( intento == numeroSecreto ) {
        document.getElementById("resultado").innerText = "¡Correcto! Adivinaste en " + intentos + " intentos."; 
        // Si el usuario adivina el número, se muestra un mensaje de éxito con el número de intentos
    } else if (intento < numeroSecreto) {
        document.getElementById("resultado").innerText = "El número es mayor. Inténtalo de nuevo"; 
        // Si el número ingresado es menor que el número secreto, se da una pista
    } else {
        document.getElementById("resultado").innerText = "El número es menor. Inténtalo de nuevo"; 
        // Si el número ingresado es mayor que el número secreto, se da otra pista
    }
}