


const navIcon = document.querySelector("#nav-icon");
const navber = document.querySelector("#navber");

navIcon.addEventListener("click", () => {
    if (navber.className == "hidden") {
        navber.classList.remove("hidden")
    } else {
        navber.classList.add("hidden")
    }
    
})

