let str1 = "Minha String Bacanuda"
//console.log(str1.replace("i", "o")) // usando expressão regular
console.log(str1.replace("i", "o")) // normal
console.log(str1)

// console.log(str1.indexOf("string")) // retorna a primeira ocorrencia
// console.log(str1.lastIndexOf("i")) // retorna a ultima ocorrencia
// console.log(str1.indexOf("kjhsafjhs")) // se não existir nada ele retorna -1
// console.log(str1.includes("minha")) // usando includes
// console.log(str1.indexOf("minha") >= 0) // usando includes atravez do indexOf

console.log(str1.slice(2, 7)) // 
console.log(str1.substring(2, 7))

console.log(str1.slice(-5, -2)) // aceita valores negativos
console.log(str1.substring(-5, -2)) //não aceita valores negativos

console.log(str1.slice(8, 1)) // não aceita numero incial maior q o numero final
console.log(str1.substring(8, 1)) // aceita numero inicial menor q o numero final

console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1)

let srtAsObj = new String("minha string com objeto")
console.log(srtAsObj)
console.log(srtAsObj.valueOf())
console.log(srtAsObj.toString())

/*str1 = `
     
    teste
               
`*/
console.log(str1)
console.log("--------------------")
console.log(str1.trim()) // remove todos os espaços
console.log("--------------------")
console.log(str1.trimEnd()) // remove espaços no final
console.log("--------------------")
console.log(str1.trimStart()) // remove espaços no começo
console.log("--------------------")
console.log(str1)

str1 = "0123456789"
console.log(str1.padEnd(20)) // coloca um preenchimento na variavel
console.log(str1.padEnd(20, "*")) // coloca um preenchimento na variavel no final
//console.log(str1.padStart(20, "*")) // coloca um preenchimento na variavel no inicio
console.log(str1.padEnd(20, "*").length)
console.log(str1)

//desafio mascara numero
// let telefone = "91234-2345"
// function mascaraNumero(numero){
//     let numeroEdit = numero.slice(0, 1).padEnd(5, "*") + "-" +  numero.slice(-2).padStart(4, "*")
//     console.log(numeroEdit)
// }
//mascaraNumero(telefone)

// correção do desafio
let telefone1 = "91234-2345" //"9****-**45"
let telefone2 = "1234-2345"  //"1***-**45"
function mascararTelefone(numero) {
    let hifemPosicao = numero.indexOf("-")
    let numeroInicio = numero.slice(0, hifemPosicao)
    let numeroFinal = numero.slice(hifemPosicao + 1)
    let doisUltimosNumeros = numeroFinal.slice(-2)
    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosNumeros.padStart(numeroFinal.length, "*")}`

}
console.log(mascararTelefone(telefone1))
console.log(mascararTelefone(telefone2))

let str2 = "Hoje é sabado"
console.log(str2.startsWith("Hoje")) // verifica se a string começa com determinado caractere
console.log(str2.endsWith("hoje")) // verifica se a string termina com determinado caractere

let str3 = "abcdefgh"
console.log(str3.charAt(1)) // mostra o valor q está no indice passado por parametro
console.log(str3[1])
console.log(str3.charCodeAt(0)) // mostra o numero na tabela de codigo dos caracterers
console.log(str3.charCodeAt(1))



/*
replace(),          replaceAll() **
indexOf(),          lastIndexOf(),          includes()*,
slice(),            substring(),            split(),
toLowerCase(),      toUpperCase(),
valueOf(),
trim()*,            trimEnd()*,             trimStart()*,
padStart()*,        padEnd()*,
startsWith()*,      endsWith()*,
charAt(),           charCodeAt()            e length */