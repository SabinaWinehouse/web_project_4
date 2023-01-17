
export class Card {
  constructor({ name, link }, templateCardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardTemplate = document.querySelector(templateCardSelector).content.querySelector(".card");
    this._handleCardClick = handleCardClick;
  
  };

  _addEventListeners() {
    const likeButton = this._cardElement.querySelector(".card__like-button");
    const deleteButton = this._cardElement.querySelector(".card__delete-button");
    likeButton.addEventListener("click", this._handleLikeButton);
    deleteButton.addEventListener("click", this._handleDeleteCard);
    this._cardImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));
  }

  _handleLikeButton = (e) => e.target.classList.toggle("card__like-button_active");
  _handleDeleteCard = () => this._cardElement.remove();

  createCard = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".card__picture");
    const cardTitleElement = this._cardElement.querySelector(".card__title");
    this._cardImage.src = this._link;
    this._cardImage.alt = `A beautiful scene in ${this._name}`;
    cardTitleElement.textContent = this._name;
    this._addEventListeners();
    return this._cardElement;
  };
}
