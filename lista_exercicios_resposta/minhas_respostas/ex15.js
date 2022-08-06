function escolhaCarro(carro){
    switch(carro){
        case 'hatch': return 'Carro comprado com sucesso'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(escolhaCarro('hatch'))
console.log(escolhaCarro('caminhonete'))

