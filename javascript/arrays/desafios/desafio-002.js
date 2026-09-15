// const numeros = [1,2,3]
// let soma = 0
// let media = 0

// const somador = function sum() {
//     for(n of numeros){
//         soma += n
//     }
//     return soma
// }
// console.log(somador())
// console.log("--------------------")

// function avarege() {
//     media = soma / numeros.length
//     return media
// }
// console.log(avarege())

function sum(){
    // const numbers = Array.from(arguments) 
    const numbers = [...arguments]
    return numbers.reduce( function(soma, numeroAtual){
        return soma + numeroAtual
    }, 0)
}

function avarege(){
    return sum(...arguments) / arguments.length
}

let soma = sum(1,2,3) 
console.log(soma)

let media = avarege(1,2,3,4,5)
console.log(media)