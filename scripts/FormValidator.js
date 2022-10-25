class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  _showError(input, error) {
    const { inputErrorClass, errorClass } = this._settings;
    error = input.validationMessage;
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

  _checkFormValidity = (input) => {
    if (!input) {
      return;
    }
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  };

  _setEventListeners = () => {
    const { inputSelector } = this._settings;

    this.inputs = [...this._formElement.querySelectorAll(inputSelector)];

    this.inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkFormValidity(inputElement);
        this._toggleInputError(inputElement);

        this._toggleButtonState();
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

  _toggleButtonState() {
    const { inactiveButtonClass } = this._settings;
    const isFormValid = this._checkFormValidity();
    const { submitButtonSelector } = this._settings;
    const button = this._formElement.querySelector(submitButtonSelector);
    if (isFormValid) {
      button.disabled = false;
      button.classList.remove(inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(inactiveButtonClass);
    }
  }

  resetValidation() {
    this.inputs.forEach((input) => {
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
