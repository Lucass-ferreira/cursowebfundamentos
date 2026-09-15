let x = 10
let y = { n: 10 }

function mudarx(x) {
    x++
    console.log("x interno", x)
}

function mudarY(obj) {
    obj.n++
}

//por valor
mudarx(x)
console.log("x externo", x)


//Quando passa um obj como parametro, eu estou passando uma referencia e não um valor
mudarY(y)
console.log(y)