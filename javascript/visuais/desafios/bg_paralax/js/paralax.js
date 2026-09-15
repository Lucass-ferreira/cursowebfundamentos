(function(){

    window.addEventListener("scroll", positionImage)

    const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")]

    function isGettingOut (_container){
        return _container.getBoundingClientRect().top <= 0
    }

    function getNewPosition(contain){
        const veloz = parseFloat(contain.getAttribute("data-p-velocity")) || .5
        return contain.getBoundingClientRect().top * veloz * -1
    }

    function positionImage(){
        dataParalaxContainer.forEach(container => {
            let originalPositionY = getComputedStyle(container).backgroundPositionY
            let originalPositionX = getComputedStyle(container).backgroundPositionX

            console.log(originalPositionX, originalPositionY)

            if(isGettingOut(container)){
                container.style.backgroundPosition = ` ${originalPositionX} ${getNewPosition(container)}px`
            } else {
                container.style.backgroundPosition = ` ${originalPositionX} 0px`
            }
        })
    }

    positionImage()

})()