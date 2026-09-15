//desafio ES05

function sum(){
    const numbers = []
    // for(let i = 0; i < arguments.length; i++){
    //     numbers.push(arguments[i])
    // }
    // console.log(numbers)

    Array.prototype.forEach.call(arguments, function(argument){
        numbers.push(argument)
    })

    return numbers.reduce( function(soma, numeroAtual){
        return soma + numeroAtual
    }, 0)
}

console.log(sum(1,2,3,4,5))

function avarage(){
    const soma = sum.apply(null, arguments)

    return soma / arguments.length
}
 
console.log(avarage(1,2,3,4,5))


// sum.call(null, 1,2,3,4,5) // passa varios argumentos
// sum.apply(null, [1,2,3,4,5]) // passa um unico argumento, sendo o mesmo uma Array