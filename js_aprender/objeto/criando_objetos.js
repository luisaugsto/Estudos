// forma literal
const obj1 = {}

//object em JS
const obj2 = new Object

//Funções construtoras
function obj3(nome,preco,desc){
    this.nome = nome
    this.PrecoComDesconto = () => {
        return preco * (1 - desc)
    }
} 

const p1 = new obj3('camisa',50,0.1)
console.log(p1.PrecoComDesconto())