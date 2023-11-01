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

function menuItem() {
    hamburger.classList.remove("clicked");
    mobileMenu.classList.remove("clicked");
}

// window.addEventListener("click", (event) => {
//     if (event.target !== hamburger && event.target !== mobileMenu) {
//         hamburger.classList.remove("clicked");
//         mobileMenu.classList.remove("clicked");
//     }
// });

const playVid = document.querySelector(".svg__play__icon");
const VidPopUp = document.querySelector(".pop__up");

playVid.addEventListener("click", () => {
    if (VidPopUp.classList.contains("open")) {
        VidPopUp.classList.remove("open");
    } else {
        VidPopUp.classList.add("open");
    }
});

function loadYouTubeVideo() {
    var videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML =
      '<iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/fWrZxDYhkq8?si=hmRYKf4JJ4XC5bN7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
};

function closePopup() {
    VidPopUp.classList.remove("open");
};
