export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleSubmit){
     super(popupSelector)
     this._handleSubmit = handleSubmit;
    }
    _getInputValues(){
     this._inputList = this.popup.querySelectorAll(".popup__input");
     this._formValues = {};
     this._inputList.forEach(input => {
       this._formValues[input.name] = input.value
     }) 
     return this._formValues;
    }
    _setEventListeners(){
     this._popup.addEventListener("submit", () => {
        this._handleSubmit(this._getInputValues())
        this.close();
    })
    super.setEventListeners();
    } 
    close(){
     this._popup.reset();
     super.close();
    }
}