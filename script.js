const hamburger = document.querySelector(".mobile__nav");
const mobileMenu = document.querySelector(".mobile__menu");

// let isClicked = false;
// let touchStartX = 0;
// let touchEndX = 0;

// hamburger.addEventListener("touchstart", (event) => {
//     touchStartX = event.touches[0].clientX;
// });

// hamburger.addEventListener("touchend", (event) => {
//     touchEndX = event.changedTouches[0].clientX;

//     const swipeDistance = touchEndX - touchStartX;

//     if (swipeDistance < 0) {
//         if (!isClicked) {
//             hamburger.classList.add("clicked");
//             mobileMenu.classList.add("clicked");
//             isClicked = true;
//         }
//     }
// });

hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("clicked")) {
        hamburger.classList.remove("clicked");
        mobileMenu.classList.remove("clicked");
    } else {
        hamburger.classList.add("clicked");
        mobileMenu.classList.add("clicked");
    }
});

window.addEventListener("click", (event) => {
    if (event.target !== hamburger && event.target !== mobileMenu) {
        hamburger.classList.remove("clicked");
        mobileMenu.classList.remove("clicked");
    }
});
