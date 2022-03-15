const openMenu = document.getElementById("open")
const closeMenu = document.getElementById("close")
const menuPanel = document.getElementById("menu")
let menuActive = false
const shadowEffect = document.getElementById("shadow")

const showMenu = () =>{
    if(menuActive === false){
        //menuPanel.style.display = "block"
        menuPanel.style.transform = "translateX(0px)"
        shadowEffect.style.visibility = "initial"
        shadowEffect.style.opacity = "0.6"
        menuActive = true
    }
    else{
        hideMenu()
    }
}

const hideMenu = () =>{
        menuPanel.style.transform = "translateX(-320px)"
        shadowEffect.style.visibility = "hidden"
        shadowEffect.style.opacity = "0"
        menuActive = false
}

openMenu.addEventListener("click", showMenu)
closeMenu.addEventListener("click", hideMenu)
shadowEffect.addEventListener("click", hideMenu) //przy tym if i else oraz menuactive są już niepotrzebne, nawet z-index na hamburgeg menu nie trzeba dawać

