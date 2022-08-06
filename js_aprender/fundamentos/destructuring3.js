function rand([min = 0 , max = 100]){
    if (min > max) [min , max] = [max , min]
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([1,10]))
console.log(rand([10,1]))
console.log(rand([ ,10]))

