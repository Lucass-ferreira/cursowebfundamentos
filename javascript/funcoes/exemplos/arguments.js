// fuction declaretion

// function somar(arr){
//     let total = 0
//     console.log(arguments)
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i]
//     }   
//     return total
// }

// console.log(somar(1, 2, 3))
// console.log(somar(1, 2, 3, 9, 6, 7))
// console.log(somar(1, 2, 3, 8, 2, 7, 15, 40, 43, 51))

// fuction expression

// const somar = function () {
//     console.log(arguments)
//     let total = 0
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i]
//     }   
//     return total
// }

// console.log(somar(1, 2, 3))
// console.log(somar(1, 2, 3, 9, 6, 7))
// console.log(somar(1, 2, 3, 8, 2, 7, 15, 40, 43, 51))

// arrow function

const somar = () => {
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }   
    return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 9, 6, 7))
console.log(somar(1, 2, 3, 8, 2, 7, 15, 40, 43, 51))