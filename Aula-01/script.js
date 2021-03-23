var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter? ")

var valorEmRealFixado = (parseFloat(valorEmDolarTexto) * 5.55).toFixed(2)

document.write("<h2>" + "O valor em reais é: " + valorEmRealFixado + "</h2>")