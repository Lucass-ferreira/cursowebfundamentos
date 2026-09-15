//every()

const arr = [1, 5, 10, "ola", true]

let sohNumeros = arr.every(function (el) {
    console.log(el)
    return typeof el === "number"
})

console.log(sohNumeros)
console.log("-----------------------------------------")

// -----------------------------------------
//some()

sohNumeros = arr.some(function(el){
    return typeof el === "number"
})

console.log(sohNumeros)
console.log("-----------------------------------------")

// -----------------------------------------
//filter()

const arr1 = arr.filter(function(el, i, _arr){
    // console.log(el)
    return typeof el === "number"
    // console.log(i)
    // console.log(_arr)
})

console.log(arr1)
console.log("-----------------------------------------")

// -----------------------------------------
//forEach

arr.forEach(function(el, i, _arr){
    console.log(i + ": ", el)
})

console.log("-----------------------------------------")

// -----------------------------------------
//map

const arr3 = arr1.map(function(el, i, _arr){
    return el * el
})

console.log(arr3)
console.log("-----------------------------------------")

