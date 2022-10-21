// function that shows the error when you type something wrong from what we requer
function showError(input, settings) {
  const { inputErrorClass } = settings;
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;
  input.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
}

function hideError(input, settings) {
  const { inputErrorClass } = settings;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
}

function toggleInputError(input, settings) {
  if (input.validity.valid) {
    hideError(input, settings);
  } else {
    showError(input, settings);
  }
}

function toggleButtonState(inputs, button, settings) {
  const { inactiveButtonClass } = settings;
  const isFormValid = checkFormValidity(inputs);
  if (isFormValid) {
    button.disabled = false;
    button.classList.remove(inactiveButtonClass);
  } else {
    button.disabled = true;
    button.classList.add(inactiveButtonClass);
  }
}

function enableValidation(settings) {
  const {
    formSelector,
    inputSelector,
    submitButtonSelector,
    // inactiveButtonClass,
    // inputErrorClass,
    // errorClass,
  } = settings;
  const forms = [...document.querySelectorAll(formSelector)];
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);
    toggleButtonState(inputs, button, settings);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        toggleInputError(input, rest);

        toggleButtonState(inputs, button, rest);
      });
    });
  });
}

// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// });
