import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard, likeCard, deleteCard } from "./card.js";
import { openPopup, closePopUp, escapeKey, overlayClick } from "./modal.js";


function openImagePopUp(imageLink, imageName) {
  const imagePopUp = document.querySelector(".popup_type_image");
  const imageElement = imagePopUp.querySelector(".popup__image");
  const captionElement = imagePopUp.querySelector(".popup__caption");

  imageElement.src = imageLink;
  imageElement.alt = imageName;
  captionElement.textContent = imageName;

  imagePopUp.classList.add("popup_is-opened");
}

const placesList = document.querySelector(".places__list");


initialCards.forEach(function (cardData) {
  const cardElement = createCard(cardData, likeCard, openImagePopUp);
  placesList.append(cardElement);
});

//кнопка редактировать - поп ап
const editPopUp = document.querySelector(".popup_type_edit");
const editPopUpButton = document.querySelector(".profile__edit-button");
editPopUpButton.addEventListener("click", function () {
  openPopup(editPopUp);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//добавить карточку поп ап
const addCardPopUp = document.querySelector(".popup_type_new-card");
const addCardPopUpButton = document.querySelector(".profile__add-button");
addCardPopUpButton.addEventListener("click", function () {
  openPopup(addCardPopUp);
});

//закрыть поп ап нажать крестик
const closePopUpButton = document.querySelectorAll(".popup__close");
closePopUpButton.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopUp(popup);
  });
});




const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopUp(editPopUp);
}

formElement.addEventListener("submit", handleFormSubmit);


const formAddCard = document.querySelector('form[name="new-place"]');
const placeInput = document.querySelector(".popup__input_type_card-name");
const linkInput = document.querySelector(".popup__input_type_url");

function addCardSubmit(evt) {
  evt.preventDefault();

  const cardData = {
    name: placeInput.value,
    link: linkInput.value,
  };

  const newCard = createCard(cardData, likeCard, openImagePopUp);
  placesList.prepend(newCard);

  formAddCard.reset();
  closePopUp(addCardPopUp);
}

formAddCard.addEventListener("submit", addCardSubmit);
