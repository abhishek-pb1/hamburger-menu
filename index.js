const navMenu = document.querySelector('.nav-menu');
const navToggler = document.querySelector('.navbar-toggler');

navToggler.addEventListener("click", () => {
    const visbility = navMenu.getAttribute("data-visible");

    if(visbility === "false") {
        navMenu.setAttribute('data-visible', "true");
        // navMenu.style.height = "0"
        navToggler.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

    else if(visbility ==="true") {
        navMenu.setAttribute('data-visible', "false");
        // navMenu.style.height = "100%"
        navToggler.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
})