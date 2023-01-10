/*
transforma um array em outro com o mesmo número de elementos
EX:pega um array (1 , 2 , 3) e transforma em (2 , 4 , 6)  */

const nums = [1, 2, 3]  

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
