const idades = [10,11,15,19,25,55,70]

console.log(idades.filter(menorDeIdade))

function menorDeIdade(idade){
    return idade < 18
}


