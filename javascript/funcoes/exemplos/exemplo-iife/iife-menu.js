// function init(){
//     let isValid = false
//     console.log("init menu", isValid)
// }
// init()

(function(win, doc){
    let isValid = false
    win.alert("ola, mundo")
    console.log(" menu", isValid)

    function init(){
        console.log("init do menu")
    }

    init()
})(window, document)