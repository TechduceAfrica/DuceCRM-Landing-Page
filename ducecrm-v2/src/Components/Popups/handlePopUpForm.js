'use client'
export const handleOpenPopup = () => {
    const popUpOpener = document.querySelector('.form__popup');
    if (popUpOpener) {
        popUpOpener.classList.toggle('open');
    }
};