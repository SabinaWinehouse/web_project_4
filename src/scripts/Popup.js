export default class Popup{
    constructor(popupSelector){
      this._popup = document.querySelector(popupSelector);
    }
    open() {
      this._setEventListeners()
        this._popup.classList.add("popup_open");
        document.addEventListener("keydown",(e) => this._handleEscClose(e));  
    }

    close() {
        this._popup.classList.remove("popup_open");
        document.removeEventListener("keydown",(e) => this._handleEscClose(e));
    }

    _handleEscClose(event) {
        const key = event.key;
        if (key === "Escape") {
          this.close();
        }
    }
      _setEventListeners(){
        this._popup.addEventListener("mousedown", (event) =>{
         
         if(event.target.classList.contains("popup") || event.target.classList.contains("popup__close") ){
          console.log("dfs");
            this.close()
         }
        
        })
      } 
}
