const avo = {
    atributo1: 'A'
}
const pai = {
    atributo2: 'B',
    __proto__:avo
}
const filho = {
    atributo3: 'C',
    __proto__:pai
}

console.log(filho.atributo1 , filho.atributo2 , filho.atributo3)

