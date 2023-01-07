export default class Popup{
    constructor(popupSelector){
      this._popup = document.querySelector(popupSelector);
    }
    open() {
        this._popup.classList.add("popup_open");
        document.addEventListener("keydown", this._handleEscClose);  
    }

    close() {
        this._popup.classList.remove("popup_open");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(event) {
        const key = event.key;
        if (key === "Escape") {
          this.close();
        }
    }
      setEventListeners(){
        this._popup.addEventListener("mousedown", (event) =>{
         if(event.target.classList.contains("popup") || event.target.classList.contains("popup__close") ){
            this.close()
         }
        
        })
      } 
}
