function dentroDoIntervalo(vetor){
    let dentro = 0
    let fora = 0
    for (let i = 0; i < vetor.length; i++) {
        const element = vetor[i];
        if (element >= 10 && element <= 20) dentro += 1
        else fora += 1
    }
    return console.log(`Dentro do Intervalo 10 a 20: ${dentro} 
Fora do intervalo 10 a 20: ${fora}`)
}

let vetor = [1,2,3,4,5,10,11,12,21,22]

dentroDoIntervalo(vetor)