(function () {
    const DataDOM = document.querySelector(".hero-content h1 span").innerText
    console.log(DataDOM)
    const dateEvent = getDate(DataDOM)
    console.log(dateEvent)

    const dataAtual = new Date()

    let left = dateEvent.getTime() - dataAtual.getTime()

    const one_minute = 60 * 1000
    const one_hour = 60 * one_minute
    const one_day = 24 * one_hour

    const daysLeft = parseInt(left / one_day)
    left = left - daysLeft * one_day

    const hoursLeft = parseInt(left / one_hour)
    left = left - hoursLeft * one_hour

    const minutesLeft = parseInt(left / one_minute)
    left = left - minutesLeft * one_minute

    const secondLeft = parseInt(left / 1000)
    addLeftTime(daysLeft, hoursLeft, minutesLeft, secondLeft)

    function addLeftTime(dia, hora, minutos, segundos){
        const paragrf = document.createElement("p")
        paragrf.textContent = `Contagem regressiva: ${daysLeft} dias, ${hoursLeft} horas, ${minutesLeft} minutos, ${secondLeft} segundos`
        document.querySelector(".hero-content").appendChild(paragrf)
    }

    function getDate(string){
        const [data, hora] = string.split(" ")
        const [dia, mes, ano] = data.split("/")
        const [hr, min] = hora.split("H")
        return new Date(ano, mes - 1, dia, hr, min)

    }

})()