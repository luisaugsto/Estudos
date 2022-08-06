const pessoa = {
    nome:'luis',
    idade:20,
    peso:50
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable:true,
    writable:false,
    value:'10/10/2000'
})

pessoa.dataNascimento = '05/06/2006'
console.log(pessoa.dataNascimento)