// push()
let arr = [1, 3, 5, 7, 9]

let teste = arr.push(11, 13, true, "ola mundo")
console.log(teste)
console.log(arr)

// pop()
let ultimoItem = arr.pop()
console.log(ultimoItem)
console.log(arr)

// shift()
let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)

// unshift()
let teste2 = arr.unshift(4, 8 , 0)
console.log(teste2)
console.log(arr)

//slice()
// let arr2 = arr.slice(2, 4)
let arr2 = arr.slice(5)
console.log(arr2)
console.log(arr)

//splice()
// let arr3 = arr.splice(2)
let arr3 = arr.splice(2, 4, "ola mundo", 10, 100, 1000)
console.log(arr)
console.log(arr3) // sempre retorna os valores removidos
