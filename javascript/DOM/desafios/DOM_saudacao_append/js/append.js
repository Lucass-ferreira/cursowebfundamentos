(function(){
    const nomeUsuario = null
    
    if(nomeUsuario) {
          const topBarElement = document.createElement("div")
          topBarElement.className = "top-bar"

          topBarElement.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b> </p>`

          //elemntoPai.insertBefore(novoElemento, elementoReferencial)
          const elemntoPai = document.querySelector(".hero")
          elemntoPai.insertBefore(topBarElement, elemntoPai.firstElementChild)
    }
    
})()