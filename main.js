import { sumar, restar, multiplicar, dividir } from './operaciones.js';

window.calcular = function (operation) {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        document.querySelector("#resultado").innerText = "Por favor ingresa números válidos.";
        return; // Sale de la función si los valores no son válidos
    }

    switch (operation) {
        case 'sumar':
            resultado = sumar(num1, num2);
            break;
        case 'restar':
            resultado = restar(num1, num2);
            break;
        case 'multiplicar':
            resultado = multiplicar(num1, num2);
            break;
        case 'dividir':
            resultado = dividir(num1, num2);
            break;

        case 'reinicio':
            // Reiniciar los campos de entrada y el resultado
            document.querySelector("#num1").value = '';
            document.querySelector("#num2").value = '';
            resultado = '';
            break;

        default:
            resultado = "Opción no disponible";
            break;
    }

    document.querySelector("#resultado").innerText = `Resultado: ${resultado}`;
}
