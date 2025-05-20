import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard, likeCard, deleteCard } from "./card.js";
import { openModal, closeModal, setOverlayListeners } from "./modal.js";

setOverlayListeners();

const imagePopUp = document.querySelector(".popup_type_image");
const imageElement = imagePopUp.querySelector(".popup__image");
const captionElement = imagePopUp.querySelector(".popup__caption");
const editPopUp = document.querySelector(".popup_type_edit");
const editPopUpButton = document.querySelector(".profile__edit-button");
const addCardPopUp = document.querySelector(".popup_type_new-card");
const addCardPopUpButton = document.querySelector(".profile__add-button");
const closePopUpButton = document.querySelectorAll(".popup__close");

const formElementProfile = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");

const placesList = document.querySelector(".places__list");

const formAddCard = document.querySelector('form[name="new-place"]');
const placeInput = document.querySelector(".popup__input_type_card-name");
const linkInput = document.querySelector(".popup__input_type_url");


function openImagePopUp(imageLink, imageName) {
  imageElement.src = imageLink;
  imageElement.alt = imageName;
  captionElement.textContent = imageName;

  openModal(imagePopUp);
};

initialCards.forEach(function (cardData) {
  const cardElement = createCard(cardData, likeCard, openImagePopUp);
  placesList.append(cardElement);
});

//кнопка редактировать - поп ап
editPopUpButton.addEventListener("click", function () {
  openModal(editPopUp);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//добавить карточку поп ап
addCardPopUpButton.addEventListener("click", function () {
  openModal(addCardPopUp);
});

//закрыть поп ап нажать крестик
closePopUpButton.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closeModal(popup);
  });
});


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeModal(editPopUp);
}

formElementProfile.addEventListener("submit", handleProfileFormSubmit);

function addCardSubmit(evt) {
  evt.preventDefault();

  const cardData = {
    name: placeInput.value,
    link: linkInput.value,
  };

  const newCard = createCard(cardData, likeCard, openImagePopUp);
  placesList.prepend(newCard);

  formAddCard.reset();
  closeModal(addCardPopUp);
}

formAddCard.addEventListener("submit", addCardSubmit);
