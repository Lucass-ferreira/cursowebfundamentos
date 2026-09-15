// desafio reduce()
const numeros = [1,3,4,1,4,5,3,5,8,9]

let numerosUnicos = numeros.reduce( function(numUnicos, numAtual) {
    if(numUnicos.indexOf(numAtual) === -1){
        numUnicos.push(numAtual)
    }
    return numUnicos
}, [])

console.log(numerosUnicos)

// const numerosUnicos = [1, 3, 4, 5, 8, 9]