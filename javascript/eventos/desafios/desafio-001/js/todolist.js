; (function () {
    "use strict"

    //ARMAZENA O DOM EM VARIAVEIS
    const itemInput = document.querySelector("#item-input")
    const todoAddForm = document.querySelector("#todo-add")
    const ul = document.querySelector("#todo-list")
    const lis = ul.getElementsByTagName("li")

    //estrutura de dados
    const arrTasks = getSaveData()

    //funções
    function getSaveData() {
        let taskData = localStorage.getItem("tasks")
        taskData = JSON.parse(taskData)

        return taskData && taskData.length ? taskData : [
            {
                name: "task1",
                createAt: Date.now(),
                completed: false
            },

            {
                name: "task2",
                createAt: Date.now(),
                completed: true
            }
        ]
    }

    function setNewData() {
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }

    setNewData()

    // setNewData()

    function limpar(item) {
        item.value = ""
    }

    // function addEventLi(li) {
    //     li.addEventListener("click", function () {
    //         console.log(this)
    //     })
    // }

    function generationLiTask(obj) {
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkBtn = document.createElement("button")
        const editBtn = document.createElement("i")
        const deleteBtn = document.createElement("i")


        checkBtn.className = "button-check"
        checkBtn.innerHTML = `
            <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkBtn"></i>`
        checkBtn.setAttribute("data-action", "checkBtn")
        li.appendChild(checkBtn)

        li.className = "todo-item"
        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        editBtn.className = "fas fa-edit"
        editBtn.setAttribute("data-action", "editBtn")
        li.appendChild(editBtn)

        const containerEdit = document.createElement("div")
        containerEdit.className = "editContainer"

        const editInput = document.createElement("input")
        editInput.setAttribute("type", "text")
        editInput.className = "editInput"
        editInput.value = obj.name
        containerEdit.appendChild(editInput)

        const editContainerBtn = document.createElement("button")
        editContainerBtn.className = "editButton"
        editContainerBtn.textContent = "Edit"
        editContainerBtn.setAttribute("data-action", "editContainerBtn")
        containerEdit.appendChild(editContainerBtn)

        const cancelContainerBtn = document.createElement("button")
        cancelContainerBtn.className = "cancelButton"
        cancelContainerBtn.textContent = "Cancel"
        cancelContainerBtn.setAttribute("data-action", "cancelContainerBtn")
        containerEdit.appendChild(cancelContainerBtn)

        li.appendChild(containerEdit)

        deleteBtn.className = "fas fa-trash-alt"
        deleteBtn.setAttribute("data-action", "deleteBtn")
        li.appendChild(deleteBtn)

        // cancelContainerBtn.addEventListener("click", function () {
        //     containerEdit.style.display = "none"
        // })

        // editBtn.addEventListener("click", function () {
        //     containerEdit.style.display = "flex"
        // })

        // addEventLi(li)
        return li
    }

    function renderTasks() {
        ul.innerHTML = ""
        arrTasks.forEach(task => {
            ul.appendChild(generationLiTask(task))
        });
    }

    function addTask(task) {
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })

        setNewData()
    }

    function clickedUl(e) {
        // console.log(e.target.getAttribute("data-action"))
        const dataAction = e.target.getAttribute("data-action")

        if (!dataAction) return

        let currentLi = e.target
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }

        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            editBtn: function editBtn() {
                const containerEdit = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                containerEdit.style.display = "flex";
            },

            deleteBtn: function deleteBtn() {
                arrTasks.splice(currentLiIndex, 1)
                renderTasks()
                setNewData()
                // currentLi.remove()
                // currentLi.parentElement.removeChild(currentLi)
            },

            editContainerBtn: function () {
                const val = currentLi.querySelector(".editInput").value
                currentLi.querySelector(".editInput").focus()
                arrTasks[currentLiIndex].name = val
                renderTasks()
                setNewData()
            },

            cancelContainerBtn: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style")

                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name
            },

            checkBtn: function () {
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed

                // if (arrTasks[currentLiIndex].completed) {
                //     currentLi.querySelector(".fa-check").classList.remove("displayNone")
                // } else {
                //     currentLi.querySelector(".fa-check").classList.add("displayNone")
                // }
                setNewData()
                renderTasks()
            }
        }


        if (actions[dataAction]) {
            actions[dataAction]()
        }

    }

    //codigo

    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(itemInput.value)
        addTask(itemInput.value)
        renderTasks()
        limpar(itemInput)
        itemInput.focus()
    });

    ul.addEventListener("click", clickedUl)

    renderTasks()
})()