function jurosSimples (capitalInicial,taxaJ,meses){
    let juros = (capitalInicial * taxaJ * meses)/100
    let montante = capitalInicial + juros
    return montante
}

function jurosCompostos (capitalInicial,taxaJ,meses){
    let juros = taxaJ/100
    let montante = capitalInicial * (1 + juros)**meses
    return montante
}

console.log('Montante:R$',jurosSimples(10000,5,12))
console.log('Montante:R$',jurosCompostos(10000,5,12))