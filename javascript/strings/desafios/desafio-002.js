//desafio formatar nome com split()

function formatarNome(nomeCompleto){

    let nomesAsArray = nomeCompleto.split(" ")
    if(nomesAsArray.length === 1){
        return nomeCompleto
    }

    let primeiroNome = nomesAsArray.shift()

    return nomesAsArray.join(" ") + ", " + primeiroNome

}

console.log(formatarNome("Lucas")) // [lucas]
console.log(formatarNome("Lucas Almeida")) // [Almeida, Lucas]
console.log(formatarNome("Lucas Ferreira de Almeida")) // [Ferreira de Almeida, Lucas]