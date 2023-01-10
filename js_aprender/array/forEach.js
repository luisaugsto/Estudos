const aprovados = ['Luis','Ana','Beatriz','Cesar']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})

function lista(nome , indice){
    console.log(`${indice + 1} - ${nome}`)
}

aprovados.forEach(lista)