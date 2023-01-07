export default class PopupWithImage extends Popup{
   open(link, name){
    this._popup.querySelector(".popup__caption").textContent = name;
    const image = this._popup.querySelector(".popup__image");
    image.src = link;
    image.alt = name;
    super.open();
   }
}