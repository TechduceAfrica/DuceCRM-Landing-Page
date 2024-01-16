export const handleClosePopUp = () => {
    const popupWrapper = document.querySelector('.form__popup');
    if (popupWrapper) {
        popupWrapper.classList.toggle('open');
    }
};