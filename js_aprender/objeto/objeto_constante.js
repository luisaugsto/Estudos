//pessoa -> 123 -> {...}
const pessoa = {nome:'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'ana'}

Object.freeze(pessoa) //Tornando o objeto constante

pessoa.nome = 'Maria'
console.log(pessoa)