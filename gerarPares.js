function gerarPares(n) {
    const pares = [];

    for (let i = 1; pares.length < n; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    
    return pares;
}

const quantidade = 5;
const numerosPares = gerarPares(quantidade);

console.log(numerosPares);