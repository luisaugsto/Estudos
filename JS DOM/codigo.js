//mudar texto através de um clique
let botao = document.getElementById('botao')

botao.addEventListener('click',() => {
    botao.textContent = 'Clicado';
})

//botão patra trocar imagens
let imagem = document.getElementById('imagem')
let botao1 = document.getElementById('botao1')
let botao2 = document.getElementById('botao2') 
let foto1 = './img/walter.png'
let foto2 = './img/gato.jpg'

botao1.addEventListener('click',() => {
    imagem.src = foto1
})

botao2.addEventListener('click',() => {
    imagem.src = foto2
})

//adicionar novo elemento 
let novoTitulo = document.createElement('h1')
novoTitulo.textContent='Tu é baitola'

document.body.appendChild(novoTitulo)