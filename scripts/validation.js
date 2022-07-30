function showError(input, settings) {
  const { inputErrorClass } = settings;
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;
  input.classList.add(inputErrorClass);
}
// .popup__input_theme_error{
//   color: Red;
// }
function hideError(input, settings) {
  const { inputErrorClass } = settings;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove(inputErrorClass);
}

function checkValidity(input, settings) {
  if (input.validity.valid) {
    hideError(input, settings);
  } else {
    showError(input, settings);
  }
}

function toggleButtonState(inputs, button, settings) {
  const { inactiveButtonClass } = settings;
  const isFormValid = inputs.every((input) => input.validity.valid);
  if (isFormValid) {
    button.disaled = false;
    button.classList.remove(inactiveButtonClass);
  } else {
    button.disaled = "disabled";
    button.classList.add(inactiveButtonClass);
  }
  //add styles for popup__button_disabled class
}

function enableValidation(settings) {
  const { formSelector, inputSelector, submitButtonSelector, ...rest } =
    settings;
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkValidity(input, rest);
        toggleButtonState(inputs, button, rest);
      });
    });
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
enableValidation(config);
