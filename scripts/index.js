// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function createCard(cardData, deleteCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  deleteButton.addEventListener("click", function () {
    deleteCard(cardElement);
  });

  return cardElement;
}

function removeDeleteCard(cardElement) {
  cardElement.remove();
}

const placesList = document.querySelector(".places__list");

initialCards.forEach(function (cardData) {
  const cardElement = createCard(cardData, removeDeleteCard);
  placesList.append(cardElement);
});
