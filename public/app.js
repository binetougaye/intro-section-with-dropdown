const icons = document.querySelectorAll(".icon-arrow");
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => dropdown.classList.add("hidden"));
icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        const dropdown = dropdowns[index]; // Associer l'icône au dropdown correspondant
        console.log(dropdown);

        if (icon.getAttribute("src") === "./images/icon-arrow-down.svg") {
            icon.setAttribute("src", "./images/icon-arrow-up.svg");
            dropdown.classList.remove("hidden");
            dropdown.classList.add("visible");
        } else {
            icon.setAttribute("src", "./images/icon-arrow-down.svg");
            dropdown.classList.remove("visible");
            dropdown.classList.add("hidden");
        }
    });
});
const mediaScreen = window.matchMedia('(max-width: 700px)')
const iconMenu = document.getElementById("icon-menu")
const navItems = document.querySelector(".nav-items")
const auth = document.querySelector(".auth")
console.log(auth);

function mediaQuery(e) {
    if (e.matches) {
        iconMenu.classList.remove("hidden")
        iconMenu.classList.add("visible")
        auth.classList.add("hidden")
        auth.classList.remove('visible')
        navItems.classList.add("hidden")
        navItems.classList.remove("visible")

    } else {
        iconMenu.classList.add("hidden")
        iconMenu.classList.remove("visible")
        auth.classList.add("visible")
        auth.classList.remove("hidden")
        navItems.classList.add("visible")
        navItems.classList.remove("hidden")
    }

}
const menuMobile = document.querySelector(".menu-mobile")
const closeMenu = document.getElementById("close-menu")
function mobile() {
    menuMobile.classList.remove("hidden")
    menuMobile.classList.add("visible")
    iconMenu.classList.add("hidden")
    iconMenu.classList.remove("visible")

}
iconMenu.addEventListener("click", mobile)
closeMenu.addEventListener("click", () => {
    menuMobile.classList.add("hidden")
    menuMobile.classList.remove("visible")
    iconMenu.classList.add("visible")
    iconMenu.classList.remove("hidden")
})
mediaScreen.addEventListener("change", mediaQuery)
mediaQuery(mediaScreen)
