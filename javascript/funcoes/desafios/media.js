function media() {
    let soma = 0
    let media = 0
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== "number"){
            throw Error("digite apenas numeros")
        } else {
            soma += arguments[i]
            if(arguments.length === 1) {
                media = soma / 2
            } else {
                media = soma / arguments.length
            }
        }
        
    }
    return media
}

console.log(`A media dos valores é: ${media()}`)