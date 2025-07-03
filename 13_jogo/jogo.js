const NUM_MOEDAS = 40
let pontos = 0
let tempo = 0
let timer = null

function contaTempo() {
    tempo--
    let t = document.getElementById("tempo")
    t.innerHTML = tempo

    if(tempo <= 0) {
        clearInterval(timer)
        alert("Parabéns, você fez " + pontos + " pontos!")
        iniciaJogo()
    }
}

function iniciaJogo(){
    pontos = 0
    tempo = 10

    let tela = document.getElementById('tela')
    tela.innerHTML = '' // remover todos os filhos

	for(let i = 0; i < NUM_MOEDAS; i++) {
		let moeda = document.createElement("img")
		moeda.src = "bitcoin.jpg"
        moeda.id = 'm' + i

        moeda.onclick = function() {
            pegaMoeda(this)
        }

		tela.appendChild(moeda)
    }

    // inicia o timer
    timer = setInterval(contaTempo, 1000)
}

function pegaMoeda(moeda) {
    if(tempo == 0) {
        return
    }

    moeda.src = "bitcoin2.jpg"
    moeda.onclick = null
    pontos++
    
    // atualiza os pontos na página
    var p = document.getElementById("pontos")
    p.innerHTML = pontos
}