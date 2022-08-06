function fatorial(num){
    let resultado = 1
    if (num == 0) return 1
    for (let i=num;i>0;i--){
        resultado = i * resultado
    }
    return resultado
}

console.log(fatorial(6))