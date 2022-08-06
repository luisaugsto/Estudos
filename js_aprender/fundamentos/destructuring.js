const pessoa = {
    nome:'luis',
    idade:20,
    endereco:{
        rua:'marcelino',
        numero:130
    }
}

//extrair nome e idade do objeto 'pessoa'
const {nome , idade} = pessoa
console.log(nome,idade)

//extrair nome e idade do objeto 'pessoa' e renomear as variaveis
const {nome:n , idade:i} = pessoa
console.log(n,i)

//acessar rua e número
const {endereco: {rua , numero}} = pessoa
console.log(rua,numero)
