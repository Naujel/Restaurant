const elementoHamburguesa = document.querySelector(".hamburger")
const elementoPanel = document.querySelector(".panel")

document.addEventListener("click", e => {
    if (e.target.matches(".hamburger") || e.target.matches(".hamburger *")){
        elementoHamburguesa.classList.toggle("is-active")
        elementoPanel.classList.toggle("is-active")
    }
})