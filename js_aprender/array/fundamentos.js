let carros = ['HB20','Ferrari Enzo','Logan']
console.log(carros)

carros.push('Uno')
carros[4] = 'Lancer'
console.log(carros)
console.log(carros[5])
console.log(carros.length)

delete carros[3]
console.log(carros)
carros[3] = 'Azera'
carros.sort()
console.log(carros)

carros.splice(4,1,'GTR')
console.log(carros)
