function gerarNumeroAleatorio(min,max){
    resultado=Math.random() * (max - min) + min
    return Math.floor(resultado )
}

console.log('Resultado:',gerarNumeroAleatorio(1,10))