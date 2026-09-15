// (function () {
//         let novoElemento = document.createElement("p")
//         novoElemento.className = ".textContent"

//         const elementoPai = document.querySelector("#newsletterFeedback")
//         elementoPai.insertBefore(novoElemento, elementoPai.firstChild)
// })()

function clicar(){
    let email = document.querySelector("#txtEmail")
    let output = document.querySelector("#newsletterFeedback")


    output.innerHTML = ` <p>O e-mail ${email.value} foi cadastrado com sucesso! </p>`
}