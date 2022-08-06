const ferrari = {
    modelo: 'f40',
    velMax: 350
}

const volvo = {
    modelo: 'v40',
    valMax: 220
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

