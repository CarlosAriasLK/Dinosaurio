function calcular() {
    // Obtener los valores de los números ingresados y convertirlos a números de punto flotante
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Obtener el valor de la operación seleccionada por el usuario
    let operacion = document.getElementById("operacion").value;

    // Declarar la variable donde se almacenará el resultado
    let resultado;

    // Utilizar una estructura switch para realizar la operación según la selección del usuario
    switch (operacion) {
        case "+":
            resultado = num1 + num2;  // Sumar num1 y num2 si el usuario selecciona "+"
            break;

        case "-":
            resultado = num1 - num2;  // Restar num1 y num2 si el usuario selecciona "-"
            break;

        case "*":
            resultado = num1 * num2;  // Multiplicar num1 y num2 si el usuario selecciona "*"
            break;

        case "/":
            resultado = num1 / num2;  // Dividir num1 y num2 si el usuario selecciona "/"
            break;

        default:
            resultado = "Operación no válida";  // Mostrar un mensaje de error si la operación no es válida
    }
    
    // Mostrar el resultado en el elemento con el id "resultado"
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
