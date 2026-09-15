const textEmail = document.getElementById("txtEmail")

function editarEmail(){
    textEmail.disabled = false
    textEmail.focus()
}

function perdeFoco(){
    textEmail.disabled = true
}