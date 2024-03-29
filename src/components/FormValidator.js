class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    const { inputSelector } = this._settings;
    this._inputs = [...this._formElement.querySelectorAll(inputSelector)];
    const {  submitButtonSelector } = this._settings;
    this._buttonElement = this._formElement.querySelector(submitButtonSelector);
  }

  _showError(input) {
    const { inputErrorClass, errorClass } = this._settings;
    const error = input.validationMessage;
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
    input.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
  }

  _hideError(input) {
    const { inputErrorClass, errorClass } = this._settings;
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
  }
  
  _checkFormValidity  = () => this._inputs.every(input => input.validity.valid && input.value.length > 0);

  _setEventListeners = () => {
    this.toggleButtonState();
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleInputError(inputElement);
        this.toggleButtonState(inputElement);
      });
    });
  };

 _toggleInputError(input) {
    if (input.validity.valid) {
      this._hideError(input, this._settings);
    } else {
      this._showError(input, this._settings);
    }
  }

  toggleButtonState() {
    const { inactiveButtonClass} = this._settings; 
    const isFormValid = this._checkFormValidity();
    if (isFormValid === true) {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(inactiveButtonClass);
    } else {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(inactiveButtonClass);
    }
  }

  resetValidation() {
    this._inputs.forEach((input) => {
      this._hideError(input);
    });
  }
  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
