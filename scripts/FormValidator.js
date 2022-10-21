class FormValidator {
  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
  }

  _showError(input, error) {
    const { inputErrorClass, errorClass } = this.settings;
    const error = input.validationMessage;
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
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  };

  _setEventListeners = () => {
    const { inputSelector } = this.settings;

    this.inputs = [...this.formElement.querySelectorAll(inputSelector)];

    this.inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkFormValidity(inputElement, rest);
        toggleInputError();

        toggleButtonState();
      });
    });
  };

  _toggleInputError(input) {
    if (input.validity.valid) {
      hideError(input, settings);
    } else {
      showError(input, settings);
    }
  }

  _toggleButtonState() {
    const { inactiveButtonClass } = this.settings;
    const isFormValid = _checkFormValidity();
    if (isFormValid) {
      button.disabled = false;
      button.classList.remove(inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(inactiveButtonClass);
    }
  }

  enableValidation() {
    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}
const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editForm = document.querySelector(".popup__form");
const addCardForm = document.querySelector(".popup__form");

const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addCardForm);
FormValidator.enableValidation();
FormValidator._showError();
