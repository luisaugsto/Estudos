/*
Ao clicar no botão , deverá aparecer na tela uma imagem aleatoria. 
1. mudar o texto do botão para "gerar outra imagem"
2. gerar um número aleatório entre 1 a 10
3. criar um elemento img no html 
4. esse elemento tera um source caoX.png , sendo o X o número gerado anteriormente , esse número corresponde a uma das imagens de cachorros
5. limpar a tela para não gerar imagens infinitamente , deixando sempre uma imagem na tela
*/ 


function limparTela(){
    var imagens = document.querySelectorAll("img")
    if (imagens.length = 1)
    document.getElementById('imagem-cachorro').remove()
}

function mudarTexto() {
    document.getElementById("botao").innerHTML = "GERAR OUTRA IMAGEM";
}

function gerarNumero(){
    let numeroAleatorio=Math.floor(Math.random() * 20)//<-quantidade de cachorros
    numeroAleatorio+=1

    return numeroAleatorio
    
}

function gerarImagem(){
    let numeroAtual = gerarNumero()

    const imagem = document.createElement("img")
    imagem.setAttribute("id", "imagem-cachorro")
    
    imagem.setAttribute("src",`img/cao${numeroAtual}.png`)

    document.getElementById("caixa-imagem").appendChild(imagem);
}
