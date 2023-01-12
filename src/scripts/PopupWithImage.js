import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector)
    this.open = this.open.bind(this);
  }

  open(name, link) {
    this._popup.querySelector(".popup__caption").textContent = name;
    const image = this._popup.querySelector(".popup__image");
    image.src = link;
    image.alt = name;
    super.open();
  }
}