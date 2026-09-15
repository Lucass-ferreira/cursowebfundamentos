// uma função construtoras é feita pra criar objetos, para usar as fnções construtoras precisa obrigatoriamente usar o operador "new"

function Task(name) {
    "use strict"
    let _name = name

    // this.name = name
    this.createdAT = new Date()
    this.updateAT = null
    this.changeName = function (newName) {
        if (newName) {
            _name = newName
            this.updateAT = new Date()
        }
    }
    this.getName = function () {
        return _name
    }
}

const task1 = new Task("Minha tarefa")
task1.changeName("minha tarefa atualizada")

const task2 = new Task("minha segunda tarefa")

console.log(task1.getName())

task1.changeName("lalala")
console.log(task1.getName())
console.log(task1)

console.log(task2)