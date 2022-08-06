let vida_personagem=10
let atq_personagem=2
let def_personagem=2


console.log(Vida(1,10))

function Vida(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}  
//let atq_random=
//let def_random=

criarPersonagem(vida_personagem,atq_personagem,def_personagem)

function criarPersonagem(vida_personagem,atq_personagem,def_personagem){
let vida = vida_personagem
let ataque = atq_personagem
let defesa = def_personagem
console.log(vida)
console.log(ataque)
console.log(defesa)
}

/*function criarInimigo(vida_random,atq_random,def_random){
    
}*/