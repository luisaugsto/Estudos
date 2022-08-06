function precoConvenio(idade){
    let taxaIdade
    if (idade < 10) taxaIdade = 80
    if (idade > 10 && idade <= 30) taxaIdade = 50
    if (idade > 30 && idade <= 60) taxaIdade = 95
    if (idade > 60) taxaIdade = 130

    let total = taxaIdade + 100
    return `valor do plano de saúde: ${total}`
}

console.log(precoConvenio(75))