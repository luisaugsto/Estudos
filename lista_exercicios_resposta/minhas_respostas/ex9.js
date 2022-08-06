function arredondamento(nota){
    let resto = nota % 5
    if (resto = 3) return nota + (resto - 1)
    else if (resto = 4) return nota + (resto - 3)
    else return nota
}

/*
function avaliarNota(notaArredondada){
    let situacao
    if (nota < 40)situacao = 'Reprovado' 

    return situacao
}

console.log(arredondamento(4))
console.log(avaliarNota())
*/

console.log(arredondamento(19))