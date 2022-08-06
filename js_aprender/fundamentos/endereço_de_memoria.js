const a = {Nome: 'Pão'}
console.log(a)

const b = a
b.Nome='Frango'
console.log(a)
console.log(b)
//a e b estão apontando para o mesmo local de memoria , então se mudar um o outro muda

let c = 3
console.log(c)  

let d = c
d++
console.log(c)
console.log(d)
//aqui foi feito uma copia por valor e não o mesmo endereço