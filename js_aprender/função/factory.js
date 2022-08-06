//factory é uma função que retorna um objeto
function criarProduto(n,p){
    return {
        Nome:n,
        Preco:p       
    }
}

console.log(criarProduto('camisa',50))