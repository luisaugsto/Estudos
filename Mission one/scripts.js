
let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")

async function ConverterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    console.log(moedas)

    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "$ Dólar Americano") {
        let valorDolar = inputValorReais / dolar
        inputMoedas.innerHTML = valorDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    if (select.value === "€ Euro") {
        let valorEuro = inputValorReais / euro
        inputMoedas.innerHTML = valorEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }

    textoReal.innerHTML = inputValorReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
function TrocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moeda")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/estados-unidos (1) 1.png"
    }
    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"
    }
    ConverterMoedas()
}

botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", TrocaDeMoeda)