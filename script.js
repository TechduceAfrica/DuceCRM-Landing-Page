const hamburger = document.querySelector(".mobile__nav");
const mobileMenu = document.querySelector(".mobile__menu");

hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("clicked")) {
        hamburger.classList.remove("clicked");
        mobileMenu.classList.remove("clicked");
    } else {
        hamburger.classList.add("clicked");
        mobileMenu.classList.add("clicked");
    }
});

// window.addEventListener("click", (event) => {
//     if (event.target !== hamburger && event.target !== mobileMenu) {
//         hamburger.classList.remove("clicked");
//         mobileMenu.classList.remove("clicked");
//     }
// });
