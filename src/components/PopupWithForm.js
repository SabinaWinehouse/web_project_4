import Popup from "./Popup";
export default class PopupWithForm extends Popup{
    constructor(formSelector, popupSelector, {handleSubmit}){
     super(popupSelector);
     this._form = this._popup.querySelector(formSelector);
     this._handleSubmit = handleSubmit;
    }
    _getInputValues(){
     this._inputList = this._form.querySelectorAll(".popup__input");
     this._formValues = {};
     this._inputList.forEach(input => {
       this._formValues[input.name] = input.value;
     }) 
     return this._formValues;
    }
  
    _setEventListeners() {
      this._form.addEventListener("submit", () => {
        this._handleSubmit(this._getInputValues());
        this.close();
      });
      super._setEventListeners();
    }
  
    close(){
     this._form.reset();
     super.close();
    }
}