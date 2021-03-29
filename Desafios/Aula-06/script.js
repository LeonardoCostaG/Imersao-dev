var times = [];

for (var i = 0; i < times.length; i++) {
    times[i].pontos = calcPontos(times[i])
}

function calcPontos(time) {
    var points = (time.vitorias * 3)
    return points
}

show (times)

function show (times) {
    var html = ""
    for (var i = 0; i < times.length; i++) {
        html += "<tr><td>" + times[i].nome + "</td>"
        html += "<td>" + times[i].partidas + "</td>"
        html += "<td>" + times[i].vitorias + "</td>"
        html += "<td>" + times[i].derrotas + "</td>"
        html += "<td>" + times[i].pontos + "</td>"
        html += "<td><button onclick='addWin(" + i + ")'>Vitória</button></td>"
        html += "<td><button onclick='addLose(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaTimes = document.getElementById("tabelaTimes")
    tabelaTimes.innerHTML = html
}

function addWin (i) {
    var time = times[i]
    time.partidas++
    time.vitorias++
    time.pontos = calcPontos(time)
    show (times)
}

function addLose (i) {
    var time = times[i]
    time.partidas++
    time.derrotas++
    time.pontos = calcPontos(time)
    show (times)
}


function adicionarTime () {
    var nomeDoTimeAdicionado = prompt("Qual o nome do time que deseja adicionar?")
    var timeAdicionado = {
        nome: nomeDoTimeAdicionado,
        partidas: 0,
        vitorias: 0,
        derrotas: 0,
        pontos: 0,
    }
    if (nomeDoTimeAdicionado == "") {
        alert("Você precisa escrever o nome do time!")
    } else if (nomeDoTimeAdicionado == null){
        reset()
    } else {
        times.push(timeAdicionado)
        show(times)
    }
}

function reset () {
    times.length = 0
    show(times)
}
