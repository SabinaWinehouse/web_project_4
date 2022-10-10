class FormValidator {
  constructor() {}
}
const editFormValidator = new FormValidator();
const addFormValidator = new FormValidator();

// class FormValidator {
//   constructor(settings, formElement) {
//     this.settings = settings;
//     this.formElement = formElement;
//   }

//   enableValidation() {
//     const { formSelector, inputSelector, submitButtonSelector, ...rest } =
//       settings;

//     this.formElement.addEventListener("submit", (e) => e.preventDefault());

//     const inputs = [...form.querySelectorAll(inputSelector)];
//     const button = form.querySelector(submitButtonSelector);
//     toggleButtonState(inputs, button, settings);
//     inputs.forEach((input) => {
//       input.addEventListener("input", () => {
//         toggleInputError(input, rest);
//         toggleButtonState(inputs, button, rest);
//       });
//     });
//   }
// }
// const settings = {
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// };

// const editForm = document.querySelector(".popup__form");
// const addCardForm = document.querySelector(".popup__form");

// const editFormValidator = new FormValidator(settings, editForm);
// const addFormValidator = new FormValidator(settings, addCardForm);
// formValidator.enableValidation();
