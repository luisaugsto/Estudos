let pontos = [5,8.2,4,4,2,-2,-1.5,16,14.2,10,5.5]

function pontuacao(pontos){
    let total=0
    let max = Math.max.apply(null,pontos)
    let min = Math.min.apply(null,pontos)
    for (const p of pontos) {
        total = total + p
    }
    let media = total/11

    console.log(`pontuação total: ${total}`)
    console.log(`media: ${media}`)
    console.log(`maior pontuação: ${max}`)
    console.log(`menor pontuação: ${min}`)

}

pontuacao(pontos)