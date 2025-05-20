export { createCard, likeCard, deleteCard };

function likeCard(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

function deleteCard(cardElement) {
  cardElement.remove();
}

function createCard(cardData, likeCard, openImagePopUp) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  likeButton.addEventListener("click", function () {
    likeCard(likeButton);
  });

  deleteButton.addEventListener("click", function () {
    deleteCard(cardElement);
  });

  cardImage.addEventListener("click", function () {
    openImagePopUp(cardData.link, cardData.name);
  });

  return cardElement;
}

