import { openPopup, closePopup } from "./utils.js";
class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;

    this._templateCardElement = templateCardSelector;
    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }
  getCardElement = () => {
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
      const popupCaption = popupImageCard.querySelector(".popup__caption");

      popupCaption.textContent = this._name;

      const image = document.querySelector(".popup__image");
      image.src = this._link;
      image.alt = `A beautiful scene in ${this._name}`;

      openPopup(popupImageCard);
    };

    likeButton.addEventListener("click", this._handleLikeButton);
    deleteButton.addEventListener("click", this._handleDeleteCard);

    cardImage.addEventListener("click", openCardPreview);
    return cardElement;
  };
}
