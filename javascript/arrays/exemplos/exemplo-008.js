//exemplos for of

const arr = [1,2,3]
const obj = {
    nome: "maria",
    idade: "28",
    email: "maria@server"
}

//loop for in é para percorrer objetos
for (let prop in obj){
    console.log(prop)
    console.log(obj[prop])
}

//interação de array vai retornar os valores de arr

for(n of arr){
    console.log(n)
}