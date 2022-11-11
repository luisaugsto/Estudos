function QtdeParesImpares(vetor){
    let pares=0
    let impares=0
    for (let i = 0; i < vetor.length; i++) {
        const element = vetor[i];
        element % 2 == 0 ? pares += 1 : impares += 1
    }
    return console.log(`pares: ${pares} impares: ${impares}`)
}

let vetor = [1,4,5,6,8,10,12,20]

QtdeParesImpares(vetor)