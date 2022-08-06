function aumento (salario , plano){
    switch (plano){
        case 'A': return salario * 1.1 
        case 'B': return salario * 1.15
        case 'C': return salario * 1.2
        default:
            return 'Plano inválido , escolha entre A , B ou C'
    }
}

console.log(aumento(2000,'A'))
console.log(aumento(2000,'1'))