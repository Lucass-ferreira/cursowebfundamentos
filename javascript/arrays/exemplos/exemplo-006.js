// reverse()
let arr = [1, 2, 3, 4]
//console.log(arr.reverse()) // modifica minha array original

// reduce()
let soma = arr.reduce( function(acumulador, atual, i, _arr){
    console.log(i)
    console.log(_arr)
    console.log("acumulador: ", acumulador, " ----- atual: ", atual)
    return acumulador + atual
}, 0 )
console.log(soma)
console.log(arr)

// objetivo do reduce é retorna um unico valor

const nomes = ["Lucas", "Joao", "Maria", "Joana"]

let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){
    let primeriaLetra = nomeAtual[0]
    if(nomes[primeriaLetra]){
        nomes[primeriaLetra]++
    } else {
        nomes[primeriaLetra] = 1
    }

    return nomes
}, {})

console.log(nomesPorOrdem)

// contatos = {
//     "L": 1,
//     "M": 1
//     "j": 2
// }