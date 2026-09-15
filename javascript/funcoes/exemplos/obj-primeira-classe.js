function fn(cb){
    console.log("executar ação de callback")
    console.log(typeof cb)
    cb()
}

function callback() {
    console.log("função passada por parametro")
}

fn(callback)

const obj = {
    callback
}

obj.callback()

function fn2(n1) {

    return function(n2){
        return n1 * n2
    }
}

const funcao2 = fn2(10)
const mult = funcao2(2)

console.log(mult)

function fn3() {
    return function _fn3() {
        console.log("função retornada por parametro")
    }
}

const funcao3 = fn3
funcao3()