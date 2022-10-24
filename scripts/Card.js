import { openPopup, popupCaption, imageElement  } from "./utils.js";
export class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;

    this._templateCardElement = templateCardSelector;
    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }
  createCard = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);
    const cardImage = this._cardElement.querySelector(".card__picture");
    const likeButton = this._cardElement.querySelector(".card__like-button");
    const deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    const cardTitleElement = this._cardTemplate.querySelector(".card__title");
    const popupImageCard = document.querySelector("#popup__image-section");

    cardImage.src = this._link;
    cardImage.alt = `A beautiful scene in ${this._name}`;
    cardTitleElement.textContent = this._name;

    _handleLikeButton = (e) =>
      e.target.classList.toggle("card__like-button_active");
    _handleDeleteCard = () => this._cardElement.remove();

    const openCardPreview = () => {
   

      popupCaption.textContent = this._name;

      imageElement.src = this._link;
      imageElement.alt = `A beautiful scene in ${this._name}`;

      openPopup(popupImageCard);
    };

    likeButton.addEventListener("click", this._handleLikeButton);
    deleteButton.addEventListener("click", this._handleDeleteCard);

    cardImage.addEventListener("click", openCardPreview);
    return cardElement;
  };
}
