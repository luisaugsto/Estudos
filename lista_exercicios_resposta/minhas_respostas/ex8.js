let listaPontos = [10, 20, 20, 8, 25, 3, 0, 30, 1]

function Estatisticas(listaPontos) {
    tamanho = listaPontos.length
    let resultado=[]
    let recorde = 0
    let piorJogo = 0

    for (let i = 1; i <= tamanho; i++)
        if (listaPontos[i] > listaPontos[i - 1]) recorde += 1
        resultado.push(recorde)
        
    for (let j = 0; j < tamanho; j++)
        if (listaPontos[j] < listaPontos[j + 1]) 
        piorJogo = j
        resultado.push(piorJogo)
        
    return resultado

}
console.log(Estatisticas(listaPontos))