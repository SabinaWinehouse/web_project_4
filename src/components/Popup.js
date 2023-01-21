export default class Popup{
    constructor(popupSelector){
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = (e) => {this._escClose(e)};
    }
    open() {
      this._setEventListeners()
        this._popup.classList.add("popup_open");
        document.addEventListener("keyup", this._handleEscClose);  
    }

    close() {
        this._popup.classList.remove("popup_open");
        document.removeEventListener("keyup", this._handleEscClose);
    }

    _escClose(event) {
        const key = event.key;
        if (key === "Escape") {
          this.close();
        }
    }
      _setEventListeners(){
        this._popup.addEventListener("mousedown", (event) =>{
         
         if(event.target.classList.contains("popup") || event.target.classList.contains("popup__close") ){
            this.close()
         }
        
        })
      } 
}
