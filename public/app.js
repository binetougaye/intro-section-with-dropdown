const icons = document.querySelectorAll(".icon-arrow");
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => dropdown.classList.add("hidden"));
icons.forEach((icon, index) => {
    icon.addEventListener("mouseover", () => {
        const dropdown = dropdowns[index]; // Associer l'icône au dropdown correspondant

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
