let produtos = [
    {
        "id": 1,
        "nome": "Bola de vôlei Mikasa",
        "preco": 1200,
        "quantidade": 5,
        "descricao": "Bola para ter status ou qualidade de jogo"
    },
    {
        "id": 5,
        "nome": "Tênis Jordan",
        "preco": 1200,
        "quantidade": 99,
        "descricao": "Outra parte do kit status"
    },
    {
        "id": 13,
        "nome": "Tênis Olympikus",
        "preco": 150,
        "quantidade": 23,
        "descricao": "Tênis fuleira de acordo com a Haylla"
    },
    {
        "id": 25,
        "nome": "Manguito",
        "preco": 100,
        "quantidade": 35,
        "descricao": "Protege dos mosquitos"
    },
    {
        "id": 33,
        "nome": "Joelheira Olympikus",
        "preco": 30,
        "quantidade": 55,
        "descricao": "Protege os joelhos"
    }
]

let filtrado = produtos

function mostrarProdutos() {
    let porta_card = document.getElementById("porta_card")
    porta_card.innerHTML = ""

    for (let i = 0; i < filtrado.length; i++) {
        let p = filtrado[i]

        // card
        let card = document.createElement("div")
        card.className = "card"

        // titulo do card
        let titulo = document.createElement("h2")
        titulo.innerHTML = p.nome

        // texto do card
        let texto = document.createElement("p")
        texto.innerHTML = p.descricao

        card.appendChild(titulo)
        card.appendChild(texto)

        porta_card.appendChild(card)
    }
}

function contem(produto, texto) {
    let somente_nome = document.getElementById("somente_nome").checked

    texto = texto.toUpperCase()

    if (somente_nome) {
        return produto.nome.toUpperCase().includes(texto)
    } else {
        return (
            produto.nome.toUpperCase().includes(texto) ||
            produto.descricao.toUpperCase().includes(texto) ||
            produto.preco == texto ||
            produto.quantidade == texto
        )
    }

}

function filtrar() {
    let texto = document.getElementById("texto_busca").value

    if (texto.trim() == "") {
        filtrado = produtos
    }
    else {
        filtrado = produtos.filter((p) => contem(p, texto))
    }

    mostrarProdutos()
}