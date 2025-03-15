import { somar } from "./somar.js";
import { subtrair } from "./subtrair.js";
import { multiplicar } from "./multiplicar.js";
import { dividir } from "./dividir.js";

const operacao = "+"; // Altere para "-", "*", ou "/"

const num1 = 10;
const num2 = 5;

let resultado;

switch (operacao) {
    case "+":
        resultado = somar(num1, num2);
        break;

    case "-":
        resultado = subtrair(num1, num2);
        break;

    case "*":
        resultado = multiplicar(num1, num2);
        break;

    case "/":
        resultado = dividir(num1, num2);
        break;

    default:
        resultado = "Operação inválida!";
}

console.log(`Resultado: ${resultado}`);