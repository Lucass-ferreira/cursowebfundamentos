//desafio formata nome

function formatarNome(nomeCompleto){

    let espaco = nomeCompleto.indexOf(" ")
    const primeiroNome = nomeCompleto.slice(0, espaco)
    const segundoNome = nomeCompleto.slice(espaco + 1)

    if(espaco < 0){
        return nomeCompleto
    } else {
        return `${segundoNome}, ${primeiroNome}`
    }
}

console.log(formatarNome("Lucas")) // lucas
console.log(formatarNome("astrofonildo Almeida")) // Almeida, Lucas
console.log(formatarNome("Lucas Ferreira de Almeida")) // Ferreira de Almeida, Lucas

console.log("Lucas Ferreira de Almeida".split(" "))

let [nome, sobrenome]= "Lucas Ferreira de Almeida".split(" ")

console.log(nome, sobrenome)