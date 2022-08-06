function bissexto(ano){
    if (ano % 4 == 0 &&
        ano % 100 != 0 && 
        ano % 400 != 0) {
        return 'Bissexto'
    }
    else return 'Não é bissexto'
}

console.log(bissexto(0))
console.log(bissexto(4))
console.log(bissexto(100))
console.log(bissexto(400))
console.log(bissexto(800))
console.log(bissexto(2020))
console.log(bissexto(2021))