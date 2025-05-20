export { openModal, closeModal, setOverlayListeners };

function openModal(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscapeKey);
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

// Навешиваем слушатель клика по оверлею один раз при инициализации
function setOverlayListeners() {
  const allPopups = document.querySelectorAll(".popup");
  allPopups.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target === popup) {
        closeModal(popup);
      }
    });
  });
}
