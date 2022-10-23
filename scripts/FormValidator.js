class FormValidator {
  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
  }

  _showError(input, error) {
    const { inputErrorClass, errorClass } = this.settings;
    error = input.validationMessage;
    const errorElement = this.formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
    input.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
  }

  _hideError(input) {
    const { inputErrorClass, errorClass } = this.settings;
    const errorElement = this.formElement.querySelector(`#${input.id}-error`);
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
    const { inputSelector } = this.settings;

    this.inputs = [...this.formElement.querySelectorAll(inputSelector)];
    console.log(this.inputs);

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
      this._hideError(input, this.settings);
    } else {
      this._showError(input, this.settings);
    }
  }

  _toggleButtonState() {
    const { inactiveButtonClass } = this.settings;
    const isFormValid = this._checkFormValidity();
    const { submitButtonSelector } = this.settings;
    const button = this.formElement.querySelector(submitButtonSelector);
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
    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
