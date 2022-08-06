function imprimirSoma(a , b){
    console.log (a + b)
}

imprimirSoma(2 , 3)
imprimirSoma(2)//O segundo valor vai ser undefined
imprimirSoma(2,3,4,5,6,7) // vai ignorar os outros valores

function soma (a, b = 0)//0 vai ser o valor padrão
{
    return a + b
}

console.log(soma(2))

const imprimirNome = function(a){
    console.log(a)
}

imprimirNome('Luis')

//função arrow
const subtracao = (a,b) => {
    return a - b
}
console.log(subtracao(5,1))

//fazendo a mesma coisa com o retorno implícito
const multiplicacao = (a,b) => a * b

console.log(multiplicacao(4,4))

