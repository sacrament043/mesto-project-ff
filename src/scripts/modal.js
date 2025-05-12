export { openPopup, closePopUp, escapeKey, overlayClick };

//открытие поп апа
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
}

//закрытие поп апа
function closePopUp(popup) {
  popup.classList.remove("popup_is-opened");
}

function escapeKey() {
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closePopUp(openedPopup);
    }
  }
})};

function overlayClick() {
const allPopUps = document.querySelectorAll(".popup");
allPopUps.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closePopUp(popup);
    }
  });
})};