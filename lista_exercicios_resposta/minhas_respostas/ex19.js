function Compra(codigo,qtd){
    switch(codigo){
    case 100: return 3 * qtd
    case 200: return 4 * qtd
    case 300: return 5.5 * qtd
    case 400: return 7.5 * qtd
    case 500: return 3.5 * qtd
    case 600: return 2.8 * qtd
    }
}

console.log('valor a ser pago:',Compra(300,2))