function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e) 
    }finally{
        console.log('final')
    }
}
//erro no código 
/* const obj = {nome : 'luis , volta aqui'}
imprimirNomeGritado(obj)
*/
//código certo
const obj = {name : 'luis , volta aqui'}
imprimirNomeGritado(obj)