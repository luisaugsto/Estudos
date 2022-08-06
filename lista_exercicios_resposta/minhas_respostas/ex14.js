function feira(fruta){
    switch(fruta){
        case 'maça': return 'Não vendemos essa fruta aqui'
        case 'kiwi': return 'Estamos com excassez de Kiwis'
        case 'melancia': return 'Aqui está , são 3 reais o quilo'
        default:'Digite novamente'
    }
}

console.log(feira('maça'))
console.log(feira('kiwi'))
console.log(feira('melancia'))