function somarValoresInputs() {
    const valor1 = Number(document.getElementById("numeroUm").value);
    const valor2 = Number(document.getElementById("numeroDois").value);
    const soma = valor1 + valor2

    document.getElementById("resultadoSoma").innerHTML = soma

    return soma
}

async function buscarPokemon() {
    const idPokemon = document.getElementById("idPokemon").value
    const url = "https://pokeapi.co/api/v2/pokemon/" + idPokemon

    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    document.getElementById("nomePokemon").innerHTML = pokemon.name

    document.getElementById("imagemPokemon").src = pokemon.sprites.front_default

    return pokemon
}

async function enviarDados() {

    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const email = document.getElementById("email").value
    const mensagem = document.getElementById("mensagem").value

    const dadosParaEnviar = {
        nome, sobrenome, email, mensagem
    }

    url = "https://generica"

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosParaEnviar)
    }

    const resposta = await fetch(url, options)
    return resposta
}