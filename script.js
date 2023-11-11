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


// window.addEventListener('scroll', function () {
//     const perkStick = document.querySelector('.perk__stick');
//     const lastPerk = document.querySelector('.perk:last-child');
//     const scrollPosition = window.scrollY;
//     const lastPerkPosition = lastPerk.offsetTop;

//     if (scrollPosition >= lastPerkPosition) {
//         perkStick.style.position = 'relative';
//         perkStick.style.top = `${-[Number.lastPerkPosition]-[Number.scrollPosition]}px`;
//     } else {
//         perkStick.style.position = 'sticky';
//         perkStick.style.top = '0';
//     }
// });


// CTA POP UP
const ctabtn = document.querySelector(".joinourwaitlistcta");
const ctapopup = document.querySelector(".cta__pop__up");

ctabtn.addEventListener("click", () => {
    if (ctapopup.classList.contains("open")) {
        ctapopup.classList.remove("open");
    } else {
        ctapopup.classList.add("open");
    }
});

function joinourwaitlistcta() {
    ctapopup.classList.add("open");
}

function closeCtaPopup() {
    ctapopup.classList.remove("open");
};


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
        '<iframe loading="lazy" src="https://www.youtube.com/embed/fRZhdf-xDFA?si=uexBoK9Ur2kYl8v_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
};

function closePopup() {
    VidPopUp.classList.remove("open");
};
