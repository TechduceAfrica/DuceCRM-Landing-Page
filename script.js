const hamburger = document.querySelector(".mobile__nav");
const mobileMenu = document.querySelector(".mobile__menu");

let isClicked = false;
let touchStartX = 0;
let touchEndX = 0;

hamburger.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
});

hamburger.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].clientX;

    // Calculate the horizontal movement
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance < 0) {
        // Swipe left detected
        if (!isClicked) {
            hamburger.classList.add("clicked");
            mobileMenu.classList.add("clicked");
            isClicked = true;
        }
    }
});

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
    // Check if the click target is not the mobile__nav or new-element
    if (event.target !== hamburger && event.target !== mobileMenu) {
        // Remove the "clicked" class from both elements
        hamburger.classList.remove("clicked");
        mobileMenu.classList.remove("clicked");
    }
});
