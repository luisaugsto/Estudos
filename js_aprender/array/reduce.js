const numeros = [175, 50, 25]

function subtrair(total,numero){
    return total - numero
}

console.log(numeros.reduce(subtrair))