const fabricantes = ['Audi','Mercedes','BMW']

function Imprimir(nome , indice){
    console.log(indice + '. ' + nome)
}

fabricantes.forEach(Imprimir)
fabricantes.forEach((fabricante) => console.log(fabricante))