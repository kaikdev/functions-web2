function inverterArray(array) {
    const arrayInvertido = [];

    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    
    return arrayInvertido;
}

const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = inverterArray(numeros);

console.log(numerosInvertidos);