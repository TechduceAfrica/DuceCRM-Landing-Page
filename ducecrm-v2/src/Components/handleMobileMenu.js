'use client'
export const handleMobileMenu = () => {
    const menuToggle = document.querySelector('.mobile__menu');
    const hamburgerAni = document.querySelector('.mobile__nav');
    if (menuToggle) {
        menuToggle.classList.toggle('clicked');
        hamburgerAni.classList.toggle('clicked');
    }
};