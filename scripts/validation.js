function enableValidation(settings) {
  const forms = [...document.querySelectorAll(".popup__form")];
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
    const inputs = form.querySelectorAll(".popup__input");
    console.log(inputs);
  });
  //find all forms
  //prevent their default behavior
  //search for all inputs
  //subscribe to its change
  // check is input is valid
  //if is valid do nothing
  // if no show error === default browser message for input
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
