function quantoFaltaPara(mes, dia) {

    const dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)

    let anoAtual = dataAtual.getFullYear()

    const dataNiver = new Date(anoAtual, mes - 1, dia)

    const dataAtualTS = +dataAtual
    let dataNiverTS = +dataNiver

    if (dataNiverTS < dataAtualTS) {
        dataNiver.setFullYear(++anoAtual)
        dataNiverTS = +dataNiver
    }

    const UM_DIA = 24 * 60 * 60 * 1000
    const diferenca = dataNiverTS - dataAtualTS

    return parseInt(diferenca / UM_DIA)
}