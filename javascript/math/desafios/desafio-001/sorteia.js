function getRandomNumber(inicio = 0, fim = 10, integer = true){

    let random = Math.random() * (fim - inicio + 1) + inicio

    return integer ? parseInt(random) : random
}

console.log(getRandomNumber(2, 3, false))