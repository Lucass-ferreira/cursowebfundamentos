let numero = 1234567.890

console.log(numero.toFixed(2)) // numero de casas decimais o numero tem, esse metodo trasforma o numero em string
console.log(typeof numero.toFixed(2))

console.log(numero.toPrecision(3)) // é a quantidade de numeros que eu quero

numero = 12.34567

console.log(numero.toExponential()) // transforma o numero em notação cientifica, e recebe um paramentro para a quantidade de casas decimais no numero
console.log(numero.toExponential(4))

numero = 15

console.log(numero.toString(2)) // base 2, numero binario
console.log((2).toString(2))

console.log((15).toString(16)) // base 16, numero exadecimal
console.log((16).toString(16))

numero = 123456.789
console.log(numero.toLocaleString())
console.log(numero.toLocaleString("pt-BR"))
console.log(numero.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
console.log(numero.toLocaleString("pt-PT", {style: "currency", currency: "EUR"}))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

let numeroAsString = "3.456"
console.log(isNaN(numeroAsString)) // se for true é um NaN, se não ele pd ser convertido para numero