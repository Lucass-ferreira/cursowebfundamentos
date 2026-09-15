

const calcularImc = function (peso, altura, cb) {
    if(peso === undefined|| altura === undefined){
        throw Error("Passe os valores corretos!")
    }

    if(cb === undefined) {
        return peso / (altura**2)
    } else {
        return msg(peso/(altura**2))
    }
}

const msg = function (imc){
    if(imc <= 16.9){
        return "Muito abaixo do peso"
    } else if (imc <= 18.4){
        return "Abaixo do peso"
    } else if (imc <= 24.9) {
        return "Normal"
    } else if (imc <= 29.9) {
        return "Acima do peso"
    } else if (imc <= 34.9){
        return "Obsidade de grau I"
    } else if (imc <= 40){
        return "Obsidade de grau II"
    } else {
        return "Obsidade de grau III"
    }
}

// let imc = calcularImc(80, 1.75, msg(imc))
console.log(calcularImc(80, 1.85))
// console.log(msg(imc))