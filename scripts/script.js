import FormValidator from "./FormValidator.js";
import { openPopup } from "./utils.js";
import { closePopup } from "./utils.js";
import { Card } from "./Card.js";
import {initialCards} from "./contstans.js";
const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//forms
const editProfileForm = document.querySelector("#editProfileForm");
const createCardForm = document.querySelector("#createCardForm");
const editFormValidator = new FormValidator(settings, editProfileForm);
const addFormValidator = new FormValidator(settings, createCardForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
addFormValidator.resetValidation();
editFormValidator.resetValidation();

//sections
const galleryList = document.querySelector(".gallery__list");
const popupImageCard = document.querySelector("#popup__image-section");
const popupEditSection = document.querySelector("#popup__section-edit");
const popupAddSection = document.querySelector("#popup__section-add");

//inputs
const nameField = document.querySelector(".profile__name");
const jobField = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-subtitle");
const placeInputName = document.querySelector(".popup__form-title");
const placeInputLink = document.querySelector(".popup__form-link");

//buttons
const buttonEditSectionProfile = document.querySelector(
  ".profile__button-edit"
);
const buttonAddSectionProfile = document.querySelector(".profile__button-add");
const cardImagePopupSectionCloseButton = document.querySelector(
  ".popup__button-close-image"
);
const editPopupSectionCloseButton = document.querySelector(
  "#editPopupSectionCloseButton"
);
const addPopupSectionCloseButton = document.querySelector(
  "#addPopupSectionCloseButton"
);

const cardTemplateSelector = "#card-template";
//functions
function createCard(data) { 
  const card = new Card({...data}, cardTemplateSelector);
  return card.createCard();
 }
function handlePopupCardForm() {
  const link = placeInputLink.value;
  const name = placeInputName.value;

  const card = {
    name: name,
    link: link,
  };

  const cardElement = createCard(card);
  renderCard(cardElement, galleryList);
  closePopup(popupAddSection);
}

function handleProfileFormSubmit() {
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  closePopup(popupEditSection);
}
//render-card
initialCards.forEach((card) => {
  const cardElement = new Card({...card}, cardTemplateSelector);
  renderCard(cardElement, galleryList);
  
});

function renderCard(card, container) {
  const cardEl = new Card ( );
  container.prepend(card);
}
function fillProfileForm() {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}


//event-listeners
cardImagePopupSectionCloseButton.addEventListener("click", () => {
  closePopup(popupImageCard);
});
//opening and closing ADD-section
buttonAddSectionProfile.addEventListener("click", () => {
  openPopup(popupAddSection);
});

createCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handlePopupCardForm();
  createCardForm.reset();
  addFormValidator.toggleButtonState()
});

addPopupSectionCloseButton.addEventListener("click", () => {
  closePopup(popupAddSection);
});
//opening and closing EDIT-sections

buttonEditSectionProfile.addEventListener("click", () => {
  editFormValidator.resetValidation();
  openPopup(popupEditSection);
  fillProfileForm();
});

editProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleProfileFormSubmit();
  editProfileForm.reset();
});

editPopupSectionCloseButton.addEventListener("click", () => {
  closePopup(popupEditSection);
});
