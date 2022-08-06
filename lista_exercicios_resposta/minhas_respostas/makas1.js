function quantidadeLatas(base,altura){
    let area = base * altura
    let resultado = area / 15
    return resultado
}

console.log(quantidadeLatas(6,10))

function valorQuiloWatts(salarioMinimo , qtdeQuilowatts){
    let umQuilowatt = salarioMinimo/500
    let valor = qtdeQuilowatts * umQuilowatt
    return `valor kW: ${umQuilowatt}
valor a ser pago: ${valor}`
}

console.log(valorQuiloWatts(1000 , 500))
