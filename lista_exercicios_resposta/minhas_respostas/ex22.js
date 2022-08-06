function valorAnual (mes,valor){
    let total = (valor * (1 + 0.05) ** (mes - 1)).toFixed(2)

    return total
}

console.log(valorAnual(4,1000))