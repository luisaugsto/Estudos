//exercicio Limite de velocidade
/* let velocidade = 60

verificarVelocidade(velocidade)

function verificarVelocidade(velocidade){
    if (velocidade > 70){
        console.log("Acima do limite")
    }
    else{
        console.log("dentro do limite")
    }
}*/

//exercicio par ou impar
/*let limite=5

exibirTipo(limite)
function exibirTipo(limite){
    for (let i=0;i<limite;i++){
        if (i % 2 == 0){
            console.log(i,"PAR")
        }else{
            console.log(i,"IMPAR")
        }
    }
}*/


function mudarTexto(){
    document.getElementById("texto").innerHTML="Voce é gay"
}
function desfazer(){
    document.getElementById("texto").innerHTML=""
}

const carro = {
        marca:"ferrari" ,
        modelo:"enzo",
        ano:"2015", 
        
    }
carro.modelo="spider"
console.log(carro)
