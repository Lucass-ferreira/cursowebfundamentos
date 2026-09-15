function changeName(name) {
    this.name = name
    this.updateAT = new Date()
}

// const changeName = name => {
//     console.log(name)
//     console.log(this)
// }

const task1 = {
    name: "task 1",
    createAt: new Date(),
    updateAT: null,
    completed: false,
    changeName
}

const task2 = {
    name: "task 2",
    createAt: new Date(),
    updateAT: null,
    completed: false,
    changeName
}

task1.name = "task 1 updated"
task1.updateAT = new Date()

task1.changeName("Nome atualizado")

task2.changeName("novo nome")

// console.log(task1)
console.log(task2)